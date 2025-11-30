"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        success: {
          style: {
            background: "#28a745",
            color: "#fff",
          },
        },
        error: {
          style: {
            background: "#dc3545",
            color: "#fff",
          },
        },
      }}
    />
  );
}
