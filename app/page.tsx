"use client";

import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Carousel,
  Card,
  Button,
} from "react-bootstrap";

<Navbar bg="dark" data-bs-theme="dark" expand="lg">
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
  <Navbar.Toggle aria-controls="navbar-nav" />
  <Navbar.Collapse id="navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">Inicio</Nav.Link>
      <Nav.Link href="/productos">Productos</Nav.Link>
      <Nav.Link href="/nosotros">Nosotros</Nav.Link>
      <Nav.Link href="/blog">Blog</Nav.Link>
      <Nav.Link href="/contacto">Contacto</Nav.Link>
    </Nav>
    <Nav className="ms-auto align-items-center">
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
  </Navbar.Collapse>
</Container>
</Navbar>

<footer className="footer bg-dark text-white py-4 mt-5">
  <Container>
    <Row>
      <Col md={3}>
        <h2 className="logo">Tienda</h2>
        <p>
          Tienda enfocada en conectar a las personas con la música. Vinilos,
          CDs, Blurays y objetos para melómanos.
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
      <p className="mb-0">&copy; 2025 Tienda. Todos los derechos reservados.</p>
    </div>
  </Container>
</footer>;
