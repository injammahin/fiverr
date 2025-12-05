"use client";

import { useEffect, useState } from "react";
import { API } from "@/app/lib/api";
import toast from "react-hot-toast";

interface TenantUser {
    id: number;
    username: string;
    email: string;
    role: string;
    password_plain: string; // IMPORTANT: backend field name
    permissions?: {
        can_upload_receipts: boolean;
        can_approve_bookings: boolean;
    };
}

export default function TenantUsersPage() {
    const [users, setUsers] = useState<TenantUser[]>([]);
    const [showPassword, setShowPassword] = useState<{ [key: number]: boolean }>({});
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("boss");

    const loadUsers = () => {
        API.get("/tenant/users")
            .then((res) => setUsers(res.data as TenantUser[]))
            .catch(() => toast.error("Failed to load users"));
    };

    useEffect(() => {
        loadUsers();
    }, []);

    const createUser = async () => {
        if (!username.trim()) return toast.error("Username required");

        try {
            await API.post("/tenant/users", { username, role });
            toast.success("User created");
            setUsername("");
            loadUsers();
        } catch (err: any) {
            toast.error(err.response?.data?.message || "Failed to create user");
        }
    };

    const deleteUser = async (id: number) => {
        if (!confirm("Delete this user?")) return;

        try {
            await API.delete(`/tenant/users/${id}`);
            toast.success("User deleted");
            loadUsers();
        } catch {
            toast.error("Failed to delete user");
        }
    };

    const togglePermission = async (
        id: number,
        perm: "can_upload_receipts" | "can_approve_bookings",
        value: boolean
    ) => {
        try {
            await API.put(`/tenant/users/${id}/permissions`, { [perm]: value });
            loadUsers();
        } catch {
            toast.error("Failed to update permissions");
        }
    };

    const copyPassword = (password: string) => {
        navigator.clipboard.writeText(password);
        toast.success("Password copied!");
    };

    return (
        <div>
            <h3 className="mb-3">Tenant Users</h3>

            {/* CREATE USER */}
            <div className="d-flex gap-2 mb-4">
                <input
                    className="form-control"
                    placeholder="Username..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <select
                    className="form-select"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="boss">Boss</option>
                    <option value="accountant">Accountant</option>
                    <option value="assistant">Assistant</option>
                </select>

                <button className="btn btn-success" onClick={createUser}>
                    Add User
                </button>
            </div>

            {/* TABLE */}
            <table className="table table-bordered text-center">
                <thead className="table-light">
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Role</th>
                        <th>Upload</th>
                        <th>Approve</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((u) => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.username}</td>
                            <td>{u.email}</td>

                            {/* PASSWORD CELL */}
                            <td style={{ minWidth: "180px" }}>
                                {showPassword[u.id] ? (
                                    <code>{u.password_plain}</code>
                                ) : (
                                    <code>••••••••</code>
                                )}

                                <div className="mt-1 d-flex justify-content-center gap-2">
                                    <button
                                        className="btn btn-sm btn-warning"
                                        onClick={() =>
                                            setShowPassword((prev) => ({
                                                ...prev,
                                                [u.id]: !prev[u.id],
                                            }))
                                        }
                                    >
                                        {showPassword[u.id] ? "Hide" : "Show"}
                                    </button>
                                    {/* 
                                    <button
                                        className="btn btn-sm btn-secondary"
                                        onClick={() => copyPassword(u.password_plain)}
                                    >
                                        Copy
                                    </button> */}
                                </div>
                            </td>

                            <td className="text-capitalize">{u.role}</td>

                            {/* UPLOAD */}
                            <td>
                                <input
                                    type="checkbox"
                                    checked={u.permissions?.can_upload_receipts || false}
                                    onChange={(e) =>
                                        togglePermission(
                                            u.id,
                                            "can_upload_receipts",
                                            e.target.checked
                                        )
                                    }
                                />
                            </td>

                            {/* APPROVE */}
                            <td>
                                <input
                                    type="checkbox"
                                    checked={u.permissions?.can_approve_bookings || false}
                                    onChange={(e) =>
                                        togglePermission(
                                            u.id,
                                            "can_approve_bookings",
                                            e.target.checked
                                        )
                                    }
                                />
                            </td>

                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteUser(u.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
