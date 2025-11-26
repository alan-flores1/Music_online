"use client";

import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="py-5 bg-auto">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="fw-bold">TIENDA FÍSICA DE MÚSICA</h2>
              <p>
                🎶 “En nuestra tienda la música no es solo un producto, es una
                experiencia. Cada vinilo, cada CD y cada objeto tiene una
                historia que conecta pasado y presente. Somos un espacio para
                melómanos, coleccionistas y soñadores, donde la pasión por el
                sonido se transforma en comunidad. Aquí la música se vive, se
                toca y se comparte.” 🎶
              </p>

              <Link href="/productos">
                <Button variant="danger">Ver Productos</Button>
              </Link>
            </Col>

            <Col md={6} className="text-center">
              <Image
                src="/images/fondo.jpg"
                alt="Imagen Tienda"
                width={500}
                height={350}
                className="img-fluid border rounded"
              />
            </Col>
          </Row>
        </Container>
      </section>

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
                  <Link href="/contacto">Sobre Nosotros</Link>
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
                <Link href="#">Facebook</Link>
                <Link href="#">Instagram</Link>
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
