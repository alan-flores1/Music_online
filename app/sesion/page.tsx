"use client";

import { useState } from "react";
import { Form, Button, Card, Toast } from "react-bootstrap";
import Link from "next/link";

export interface Usuario {
  id?: number;
  nombre_user: string;
  correo: string;
  contrasenia: string;
  region: string;
  comuna: string;
  rol: "ADMIN" | "CLIENTE";
}

export default function SesionPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastBg, setToastBg] = useState<"danger" | "success">("danger");

  const showToastMsg = (msg: string, bg: "success" | "danger") => {
    setToastMsg(msg);
    setToastBg(bg);
    setShowToast(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !email.endsWith("@gmail.com") &&
      !email.endsWith("@duocuc.cl") &&
      !email.endsWith("@duoc.cl")
    ) {
      showToastMsg("El correo debe ser Gmail o DuocUC válido", "danger");
      return;
    }

    try {
      const res = await fetch(
        "https://musicapi01-production.up.railway.app/api/users"
      );
      if (!res.ok) {
        showToastMsg("Error al conectar con el servidor", "danger");
        return;
      }

      const users: Usuario[] = await res.json();
      const userFound = users.find((u) => u.correo === email);

      if (!userFound) {
        showToastMsg("El correo no está registrado", "danger");
        return;
      }

      if (userFound.contrasenia !== password) {
        showToastMsg("Contraseña incorrecta", "danger");
        return;
      }

      localStorage.setItem("logged", "true");
      localStorage.setItem("currentUser", JSON.stringify(userFound));
      showToastMsg("Bienvenido " + userFound.nombre_user, "success");

      setTimeout(() => {
        window.location.href = "/";
      }, 1200);
    } catch {
      showToastMsg("Error inesperado", "danger");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-black text-white">
        <Card className="p-4 shadow" style={{ width: "450px" }}>
          <h3 className="text-center mb-4 text-white">Inicio de Sesión</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="nombre@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button type="submit" variant="danger" className="w-100">
              Iniciar sesión
            </Button>

            <div className="text-center mt-3">
              <small>
                ¿No tienes cuenta?{" "}
                <Link
                  href="/registro"
                  className="text-decoration-none text-danger"
                >
                  Registrarse
                </Link>
              </small>
            </div>
          </Form>
        </Card>
      </div>

      <div style={{ position: "fixed", top: 10, right: 10, zIndex: 9999 }}>
        <Toast
          bg={toastBg}
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={2000}
          autohide={false}
        >
          <Toast.Header>
            <strong className="me-auto">
              {toastBg === "success" ? "Bienvenido" : "Error"}
            </strong>
          </Toast.Header>
          <Toast.Body className="text-white">{toastMsg}</Toast.Body>
        </Toast>
      </div>
    </>
  );
}
