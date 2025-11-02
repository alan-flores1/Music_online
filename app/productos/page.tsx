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
  NavDropdown,
} from "react-bootstrap";

import Image from "next/image";
import Link from "next/link";
import { productos, agregarCarrito } from "@/app/datos/data";

import type { Producto } from "@/app/datos/data";

function CarouselCategoria({ categoria }: { categoria: string }) {
  const idsEnOferta = [1, 9, 17];

  const lista = productos.filter(
    (p) => p.categoria === categoria && !idsEnOferta.includes(p.id)
  );

  const slides: Producto[][] = [];
  for (let i = 0; i < lista.length; i += 4) {
    slides.push(lista.slice(i, i + 4));
  }

  return (
    <div className="mb-5">
      <h3 className="text-light mb-3">{categoria}</h3>
      <Carousel interval={4000} indicators={false} pause={false}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center">
              {slide.map((p: Producto) => (
                <Col key={p.id} xs={6} sm={4} md={3} lg={2}>
                  <Card className="compact-card h-100 bg-dark text-light">
                    <Card.Img
                      variant="top"
                      src={p.imagenes[0]}
                      alt={p.nombre}
                      style={{ height: 200, objectFit: "cover" }}
                    />
                    <Card.Body className="text-center p-2">
                      <Card.Title as="h6">{p.nombre}</Card.Title>
                      <Card.Text>${p.precio}</Card.Text>
                      <div className="d-flex justify-content-center gap-2">
                        <Button
                          variant="secondary"
                          size="sm"
                          href={`/detalle?id=${p.id}`}
                        >
                          Ver detalle
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => agregarCarrito(p.id)}
                        >
                          Comprar
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default function ProductosPage() {
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
                className="active text-light"
                style={{
                  color: "#fff",
                }}
              >
                <NavDropdown.Item href="#vinilos">Vinilos</NavDropdown.Item>
                <NavDropdown.Item href="#cds">CDs</NavDropdown.Item>
                <NavDropdown.Item href="#accesorios">
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

      <section
        style={{ backgroundColor: "black", color: "white", padding: "40px 0" }}
      >
        <Container>
          <div id="vinilos">
            <CarouselCategoria categoria="Vinilos" />
          </div>
          <div id="cds">
            <CarouselCategoria categoria="CDs" />
          </div>
          <div id="accesorios">
            <CarouselCategoria categoria="Accesorios" />
          </div>
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
