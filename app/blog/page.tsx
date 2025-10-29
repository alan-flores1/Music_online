"use client";

import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  NavDropdown,
} from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
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
              <Nav.Link href="/" className="">
                Inicio
              </Nav.Link>
              <NavDropdown
                title="Productos"
                id="productos-dropdown"
                menuVariant="dark"
                className="text-light"
                style={{
                  color: "#fff",
                }}
              >
                <NavDropdown.Item href="/productos#vinilos">
                  Vinilos
                </NavDropdown.Item>
                <NavDropdown.Item href="/productos#cds">CDs</NavDropdown.Item>
                <NavDropdown.Item href="/productos#accesorios">
                  Accesorios
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/nosotros" className="">
                Nosotros
              </Nav.Link>
              <Nav.Link href="/blog" className="active">
                Blog
              </Nav.Link>
              <Nav.Link href="/contacto" className="">
                Contacto
              </Nav.Link>
              <Nav.Link href="/oferta" className="">
                Ofertas
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

      <Container className="my-5">
        <h1 className="text-center fw-bold mb-5">Blogs Importantes</h1>
        <Row className="g-4">
          <Col md={4}>
            <Link
              href="https://es.wikipedia.org/wiki/Disco_de_vinilo"
              className="text-decoration-none"
              target="_blank"
            >
              <Card className="h-100 bg-dark text-white border-0">
                <Image
                  src="/images/discodevinilo.png"
                  alt="Cómo se inició el vinilo"
                  width={400}
                  height={300}
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title>¿Cómo se inició el vinilo?</Card.Title>
                  <Card.Text>Publicado el 29 junio, 2025</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col md={4}>
            <Link
              href="https://www.youtube.com/watch?v=HWfhnt6V54Q&t=617s"
              className="text-decoration-none"
              target="_blank"
            >
              <Card className="h-100 bg-dark text-white border-0">
                <Image
                  src="/images/almacenarvinilo.png"
                  alt="Tips para cuidar tus discos de vinilo"
                  width={400}
                  height={300}
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title>Tips para cuidar tus discos de vinilo</Card.Title>
                  <Card.Text>Publicado el 4 agosto, 2024</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col md={4}>
            <Link href="/" className="text-decoration-none">
              <Card className="h-100 bg-dark text-white border-0">
                <Image
                  src="/images/ventas.png"
                  alt="Ventas de vinilo"
                  width={400}
                  height={300}
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title>Ventas de vinilo</Card.Title>
                  <Card.Text>Publicado el 15 Septiembre, 2025</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col md={4}>
            <Link
              href="https://www.youtube.com/watch?v=yqnLfuA-aNQ"
              className="text-decoration-none"
              target="_blank"
            >
              <Card className="h-100 bg-dark text-white border-0">
                <Image
                  src="/images/limpiarvi.png"
                  alt="Cómo limpiar vinilos"
                  width={400}
                  height={300}
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title>¿Cómo limpiar vinilos?</Card.Title>
                  <Card.Text>Publicado el 9 enero, 2024</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>

      <footer className="bg-dark text-white py-4 mt-5">
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
