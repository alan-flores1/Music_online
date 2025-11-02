"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
  Carousel,
  NavDropdown,
} from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

import { productos, agregarCarrito } from "@/app/datos/data";
import type { Producto } from "@/app/datos/data";

function DetalleContent() {
  const searchParams = useSearchParams();
  const idParam = searchParams.get("id");
  const [producto, setProducto] = useState<Producto | null>(null);
  const [otros, setOtros] = useState<Producto[]>([]);

  useEffect(() => {
    if (!idParam) return;

    const id = parseInt(idParam);
    const encontrado = productos.find((p) => p.id === id);
    setProducto(encontrado || null);

    const relacionados = productos
      .filter((p) => p.id !== id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);

    setOtros(relacionados);
  }, [idParam]);

  if (!producto)
    return <p className="text-center text-light mt-5">Cargando...</p>;

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
              <Nav.Link href="/">Inicio</Nav.Link>
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
                <NavDropdown.Item href="/productos#accesorios">
                  Accesorios
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/nosotros">Nosotros</Nav.Link>
              <Nav.Link href="/blog" className="active">
                Blog
              </Nav.Link>
              <Nav.Link href="/contacto">Contacto</Nav.Link>
              <Nav.Link href="/oferta">Ofertas</Nav.Link>
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
                />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section className="bg-black text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <Carousel>
                {producto.imagenes.map((img, i) => (
                  <Carousel.Item key={i}>
                    <img
                      src={img}
                      alt={producto.nombre}
                      className="d-block w-100"
                      style={{
                        height: 400,
                        objectFit: "contain",
                        borderRadius: "10px",
                      }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>

            <Col md={6} className="text-light">
              <h2>{producto.nombre}</h2>
              <h4 className="text-danger mb-3">${producto.precio}</h4>
              <p>{producto.descripcion}</p>
              <Button
                variant="danger"
                size="lg"
                className="mt-3"
                onClick={() => agregarCarrito(producto.id)}
              >
                Añadir al carrito 🛒
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <h3 className="mb-4">Otros productos</h3>
          <Row className="g-3">
            {otros.map((p) => (
              <Col key={p.id} xs={6} md={3}>
                <Card className="h-100 bg-light text-dark">
                  <Card.Img
                    variant="top"
                    src={p.imagenes[0]}
                    style={{ height: 200, objectFit: "cover" }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>{p.nombre}</Card.Title>
                    <Card.Text>${p.precio}</Card.Text>
                    <Link href={`/detalle?id=${p.id}`}>
                      <Button variant="danger" size="sm">
                        Ver detalle
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

// ✅ Esta función debe ir fuera de la anterior
export default function DetallePage() {
  return (
    <Suspense
      fallback={<p className="text-center text-light mt-5">Cargando...</p>}
    >
      <DetalleContent />
    </Suspense>
  );
}
