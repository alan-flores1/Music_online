import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { ToastContainer } from "react-bootstrap";
import NavbarTienda from "@/components/NavbarTienda";

export const metadata: Metadata = {
  title: "Tienda de Música",
  description: "Tienda online de vinilos, CDs y accesorios",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <NavbarTienda />
        {children}

        <ToastContainer
          position="top-center"
          className="p-3"
          style={{ zIndex: 9999 }}
        />
      </body>
    </html>
  );
}
