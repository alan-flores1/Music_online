"use client";

import { useState } from "react";
import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

export default function ContactoPage() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Ticket enviado con éxito ✅");
    setShowModal(false);
  };

  return (
    <>
      {/* CONTENIDO */}
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="bg-dark p-4 shadow rounded contact-card text-white">
          <Image
            src="/images/Icono.png"
            alt="Logo"
            width={60}
            height={60}
            className="mb-2"
          />
          <h1 className="fw-bold mb-3">Contáctanos</h1>
          <p>
            ¿Tienes algún problema con la página? ¿Errores en los pagos?
            contáctate con nosotros
          </p>
          <p>Estamos para ayudarte.</p>

          <h2 className="fw-bold mt-5 mb-3">Ayuda y reclamos</h2>
          <Row className="mb-4">
            <Col md={6}>
              <h5 className="fw-bold">Soporte</h5>
              <p>
                Envía un{" "}
                <a href="#" onClick={handleShow}>
                  ticket de atención
                </a>
                .
              </p>
            </Col>
            <Col md={6}>
              <h5 className="fw-bold">Horario de atención</h5>
              <p>
                Lunes a Jueves: 08:30 a 17:30
                <br />
                Viernes: 08:30 a 16:30
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mb-4">
              <h5 className="fw-bold">Sugerencias</h5>
              <p className="mb-1">Envíanos un correo con tus ideas!</p>
              <p>
                <a href="mailto:correoejemplo@music.cl">
                  correoejemplo@music.cl
                </a>
              </p>
            </Col>

            <Col md={6}>
              <h5 className="fw-bold">Contacto de empresa</h5>
              <p>
                Para solicitudes empresariales o asuntos similares, contactar
                con nosotros en:{" "}
                <a href="mailto:correoejemplo@empresario.cl">
                  correoejemplo@empresario.cl
                </a>
              </p>
            </Col>
          </Row>
        </div>
      </div>

      {/* MODAL */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Enviar Ticket de Atención</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>
                Nombre <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" required maxLength={100} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Correo <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                required
                maxLength={100}
                placeholder="ejemplo@gmail.com"
              />
              <Form.Text muted>
                Solo se permiten correos @duoc.cl, @profesor.duoc.cl y
                @gmail.com
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Comentario <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control as="textarea" rows={4} required maxLength={500} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" type="submit">
              Enviar
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* FOOTER */}
      <footer className="footer bg-dark text-white py-4 mt-5">
        <Container>
          <Row>
            <Col md={3}>
              <h2 className="logo">Tienda</h2>
              <p>
                Tienda enfocada en conectar a las personas con la música.
                Vinilos, CDs, Blurays y objetos para melómanos.
              </p>
            </Col>

            <Col md={3}>
              <h3>Enlaces</h3>
              <ul className="list-unstyled">
                <li>
                  <Link href="/">Inicio</Link>
                </li>
                <li>
                  <Link href="/productos">Productos</Link>
                </li>
                <li>
                  <Link href="/nosotros">Sobre Nosotros</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/contacto">Contacto</Link>
                </li>
              </ul>
            </Col>

            <Col md={3}>
              <h3>Contacto</h3>
              <p>📧 contacto@tienda.cl</p>
              <p>📞 +56 2 2222 3333</p>
            </Col>

            <Col md={3}>
              <h3>Síguenos</h3>
              <div className="d-flex flex-column">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
              </div>
            </Col>
          </Row>

          <div className="text-center mt-4 border-top pt-3">
            <p className="mb-0">
              &copy; 2025 Tienda. Todos los derechos reservados.
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
}
