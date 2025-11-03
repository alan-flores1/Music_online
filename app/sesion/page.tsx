"use client";

import { useState } from "react";
import { Form, Button, Card, Toast } from "react-bootstrap";
import Link from "next/link";

interface Usuario {
  nombre: string;
  email: string;
  password: string;
  direccion: string;
  region: string;
  comuna: string;
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.endsWith("@gmail.com") && !email.endsWith("@duocuc.cl")) {
      showToastMsg("El correo debe ser Gmail o DuocUC válido", "danger");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const foundUser = storedUsers.find((user: Usuario) => user.email === email);

    if (!foundUser) {
      showToastMsg("El correo no está registrado", "danger");
      return;
    }

    if (foundUser.password !== password) {
      showToastMsg("Contraseña incorrecta", "danger");
      return;
    }

    localStorage.setItem("logged", "true");
    localStorage.setItem("currentUser", JSON.stringify(foundUser));

    showToastMsg("Bienvenido ✅", "success");

    setTimeout(() => {
      window.location.href = "/";
    }, 1200);
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
          autohide
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
