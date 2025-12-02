"use client";

import { createContext, useContext } from "react";
import { Toaster, toast } from "react-hot-toast";

const ToastContext = createContext({
    showSuccess: (msg: string) => { },
    showError: (msg: string) => { },
});

export default function ToastProvider({ children }: any) {
    const showSuccess = (msg: string) => toast.success(msg);
    const showError = (msg: string) => toast.error(msg);

    return (
        <ToastContext.Provider value={{ showSuccess, showError }}>
            <Toaster position="top-right" />
            {children}
        </ToastContext.Provider>
    );
}

export const useToast = () => useContext(ToastContext);
