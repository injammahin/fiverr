"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/app/config/api";
import toast from "react-hot-toast";

interface Employee {
    id: number;
    email: string;
}

export default function EmployeesPage() {
    const [employees, setEmployees] = useState<Employee[]>([]);

    const loadEmployees = async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await fetch(`${API_BASE_URL}/admin/employees`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            const data = await res.json();
            setEmployees(data);
        } catch {
            toast.error("Failed to load employees");
        }
    };

    useEffect(() => {
        loadEmployees();
    }, []);

    return (
        <div>
            <div className="d-flex justify-content-between mb-3">
                <h3>Employees</h3>
                <Link href="/admin/employees/new" className="btn btn-success">
                    + Add Employee
                </Link>
            </div>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Assigned Tenants</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map((e) => (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.email}</td>
                            <td>
                                {e.assigned_tenants?.length
                                    ? e.assigned_tenants.map((t: any) => t.company_name).join(", ")
                                    : "No tenants"}
                            </td>

                            <td>
                                <Link href={`/admin/employees/${e.id}/assign-tenants`}
                                    className="btn btn-sm btn-primary me-2">
                                    Assign Tenants
                                </Link>
                                <button className="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}
