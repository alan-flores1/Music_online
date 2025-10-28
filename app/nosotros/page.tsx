"use client";

import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link href="/" className="navbar-brand d-flex align-items-center">
            <Image
              src="/images/Icono.png"
              alt="Logo"
              width={30}
              height={30}
              className="me-2"
            />
          </Link>
          <Navbar.Brand href="/ ">Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/productos">Productos</Nav.Link>
            <Nav.Link href="/nosotros">Nosotros</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>

          <Nav className="ms-auto">
            <Link href="/sesion" className="nav-link">
              Inicio de sesión
            </Link>
            <Link href="/carrito" className="nav-link p-0">
              <Image
                src="/images/carrito.png"
                alt="Carrito"
                width={30}
                height={30}
                className="carrito"
              />
            </Link>
          </Nav>
        </Container>
      </Navbar>
      
      <section className="about py-5">
      <div className="container">
        <h1 className="text-center fw-bold mb-5">Sobre Nosotros</h1>

        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <img
              src="/images/grupo.jpeg"
              className="img-fluid rounded shadow"
              alt="Nuestra Tienda"
            />
          </div>

          <div className="col-md-6">
            <h2 className="fw-bold">¿Qué es Music Online?</h2>
            <p>
              En <strong>Music Online</strong> creemos que los formatos físicos
              son mucho más que un medio: son nuestra historia, nostalgia y
              cultura. Desde vinilos hasta CDs, cada pieza conecta generaciones
              y revive momentos únicos.
            </p>
            <p>
              Nos enfocamos en ofrecer una experiencia auténtica para melómanos
              y coleccionistas. Queremos que cada visita sea un viaje al mundo
              del sonido, donde cada pieza tenga un valor especial.
            </p>
            <p>
              Nuestra misión es mantener viva la magia de la música física en
              una era digital, creando un espacio para quienes buscan algo más
              que solo escuchar: <em>coleccionar</em>.
            </p>
          </div>
        </div>
      </div>
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
                  <Link href="/Productos">Productos</Link>
                </li>
                <li>
                  <Link href="/Contacto">Sobre Nosotros</Link>
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
