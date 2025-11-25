// app/layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata = {
  title: "ALUXO BY ANNUNZIATA TREUHAND",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-light">{children}</body>
    </html>
  );
}
