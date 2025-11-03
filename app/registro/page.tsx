"use client";

import { useState } from "react";
import { Form, Button, Card, Row, Col, Toast } from "react-bootstrap";
import Link from "next/link";

interface Usuario {
  nombre: string;
  email: string;
  password: string;
  direccion: string;
  region: string;
  comuna: string;
}

export default function RegistroPage() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [direccion, setDireccion] = useState("");
  const [region, setRegion] = useState("");
  const [comuna, setComuna] = useState("");

  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastBg, setToastBg] = useState<"danger" | "success">("success");

  const comunasPorRegion: Record<string, string[]> = {
    metropolitana: [
      "Santiago",
      "Maipú",
      "Puente Alto",
      "Las Condes",
      "La Florida",
    ],
    valparaiso: [
      "Valparaíso",
      "Viña del Mar",
      "Quilpué",
      "Villa Alemana",
      "San Antonio",
    ],
    biobio: ["Concepción", "Talcahuano", "Chillán", "Los Ángeles", "Coronel"],
  };

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

    if (password !== confirmar) {
      showToastMsg("Las contraseñas no coinciden", "danger");
      return;
    }

    if (password.length < 4) {
      showToastMsg("La contraseña debe tener al menos 4 caracteres", "danger");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

    if (storedUsers.some((user: Usuario) => user.email === email)) {
      showToastMsg("Este correo ya está registrado", "danger");
      return;
    }

    const newUser = {
      nombre,
      email,
      password,
      direccion,
      region,
      comuna,
    };

    const updatedUsers = [...storedUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    showToastMsg("Registro exitoso ✅", "success");

    setTimeout(() => {
      window.location.href = "/sesion";
    }, 1200);
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-black text-white">
        <Card className="p-4 shadow" style={{ width: "500px" }}>
          <h3 className="text-center mb-3 text-dark">Registro de usuario</h3>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nombre">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Juan Pérez"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="nombre@ejemplo.com"
                maxLength={100}
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
                minLength={4}
                maxLength={10}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmar">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repite tu contraseña"
                minLength={4}
                maxLength={10}
                value={confirmar}
                onChange={(e) => setConfirmar(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="direccion">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Calle 1234"
                minLength={4}
                maxLength={50}
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                required
              />
            </Form.Group>

            <Row className="mb-3">
              <Col>
                <Form.Label>Región</Form.Label>
                <Form.Select
                  value={region}
                  onChange={(e) => {
                    setRegion(e.target.value);
                    setComuna("");
                  }}
                  required
                >
                  <option value="">Seleccione región</option>
                  <option value="metropolitana">Metropolitana</option>
                  <option value="valparaiso">Valparaíso</option>
                  <option value="biobio">Biobío</option>
                </Form.Select>
              </Col>

              <Col>
                <Form.Label>Comuna</Form.Label>
                <Form.Select
                  value={comuna}
                  onChange={(e) => setComuna(e.target.value)}
                  required
                  disabled={!region}
                >
                  <option value="">Seleccione comuna</option>
                  {region &&
                    comunasPorRegion[region]?.map((c) => (
                      <option key={c} value={c.toLowerCase()}>
                        {c}
                      </option>
                    ))}
                </Form.Select>
              </Col>
            </Row>

            <Button type="submit" variant="danger" className="w-100">
              Registrarse
            </Button>

            <div className="text-center mt-3">
              <small>
                ¿Ya tienes cuenta?{" "}
                <Link
                  href="/sesion"
                  className="text-decoration-none text-danger"
                >
                  Inicia sesión
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
              {toastBg === "success" ? "Éxito" : "Error"}
            </strong>
          </Toast.Header>
          <Toast.Body className="text-white">{toastMsg}</Toast.Body>
        </Toast>
      </div>
    </>
  );
}
