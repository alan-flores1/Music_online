"use client";

import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  NavDropdown,
} from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="py-3">
        <Container fluid>
          <Link
            href="/"
            className="navbar-brand d-flex align-items-center me-3"
          >
            <Image
              src="/images/Icono.png"
              alt="Logo"
              width={30}
              height={30}
              className="me-2"
            />
          </Link>

          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="me-auto d-flex align-items-center">
              <Nav.Link href="/" className="active">
                Inicio
              </Nav.Link>
              <NavDropdown
                title="Productos"
                id="productos-dropdown"
                menuVariant="dark"
                className="text-light"
              >
                <NavDropdown.Item href="/productos#vinilos">
                  Vinilos
                </NavDropdown.Item>
                <NavDropdown.Item href="/productos#cds">CDs</NavDropdown.Item>
                <NavDropdown.Item href="/productos#cds">
                  Accesorios
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/nosotros" className="">
                Nosotros
              </Nav.Link>
              <Nav.Link href="/blog" className="">
                Blog
              </Nav.Link>
              <Nav.Link href="/contacto" className="">
                Contacto
              </Nav.Link>
            </Nav>

            <Nav className="ms-auto align-items-center gap-3">
              <Link href="/sesion" className="nav-link">
                Inicio de sesión
              </Link>
              <Link href="/carrito" className="nav-link p-0">
                <Image
                  src="/images/carrito.png"
                  alt="Carrito"
                  width={28}
                  height={28}
                  className="carrito"
                />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
              <Button variant="danger" href="/productos">
                Ver Productos
              </Button>
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
