"use client";

import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descuento?: number; // porcentaje de descuento
  categoria: string;
  imagenes: string[];
  descripcion: string;
}

const productos: Producto[] = [
  {
    id: 1,
    nombre: "Vinilo Luis Miguel",
    precio: 80000,
    descuento: 20,
    categoria: "Vinilos",
    imagenes: [
      "/images/vinilos/viniloluismi.jpeg",
      "/images/vinilos/viniloluismi2.png",
      "/images/vinilos/viniloluismi3.jpeg",
    ],
    descripcion:
      "El clásico de Luis Miguel en vinilo, ideal para los nostálgicos del pop latino.",
  },
  {
    id: 9,
    nombre: "CD Bruno Mars / Doo-Wops",
    precio: 50000,
    descuento: 15,
    categoria: "CDs",
    imagenes: [
      "/images/cd/bruno.png",
      "/images/cd/bruno2.png",
      "/images/cd/bruno3.png",
    ],
    descripcion:
      "El debut de Bruno Mars con 'Doo-Wops & Hooligans', lleno de hits inolvidables.",
  },
  {
    id: 17,
    nombre: "Lector de Vinilos",
    precio: 200000,
    descuento: 10,
    categoria: "Accesorios",
    imagenes: [
      "/images/accesorios/lectorvinilo.png",
      "/images/accesorios/lectorvinilo2.png",
      "/images/accesorios/lectorvinilo3.png",
    ],
    descripcion:
      "Reproductor de vinilos de alta calidad, ideal para disfrutar tu colección.",
  },
];

function agregarCarrito(id: number, cantidad = 1) {
  let carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
  let producto = productos.find((p) => p.id === id);
  if (!producto) return alert("Producto no encontrado");

  let existente = carrito.find((p: any) => p.id === id);
  if (existente) existente.cantidad += cantidad;
  else carrito.push({ ...producto, cantidad });

  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(`${producto.nombre} (x${cantidad}) añadido al carrito ✅`);
}

export default function OfertaPage() {
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
              <Nav.Link href="/productos">Productos</Nav.Link>
              <Nav.Link href="/nosotros">Nosotros</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/contacto">Contacto</Nav.Link>
              <Nav.Link href="/ofertas" className="active">
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
          <h2 className="mb-4 text-center">Ofertas Especiales</h2>
          <Row className="g-4 justify-content-center">
            {productos.map((p) => {
              const precioConDescuento = p.descuento
                ? Math.round(p.precio * (1 - p.descuento / 100))
                : p.precio;

              return (
                <Col key={p.id} xs={12} sm={6} md={4} lg={3}>
                  <Card className="bg-dark text-light h-100 position-relative">
                    {/* Etiqueta de descuento */}
                    {p.descuento && (
                      <div
                        style={{
                          position: "absolute",
                          top: "10px",
                          left: "10px",
                          backgroundColor: "red",
                          color: "white",
                          padding: "5px 10px",
                          borderRadius: "10px",
                          fontWeight: "bold",
                          fontSize: "0.9rem",
                        }}
                      >
                        -{p.descuento}%
                      </div>
                    )}

                    <Card.Img
                      variant="top"
                      src={p.imagenes[0]}
                      alt={p.nombre}
                      style={{ height: 200, objectFit: "cover" }}
                    />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{p.nombre}</Card.Title>

                      <Card.Text className="mb-2">
                        {p.descuento ? (
                          <>
                            <span
                              style={{
                                textDecoration: "line-through",
                                color: "gray",
                                marginRight: "8px",
                              }}
                            >
                              ${p.precio.toLocaleString("es-CL")}
                            </span>
                            <span
                              style={{
                                color: "#ff4d4d",
                                fontWeight: "bold",
                              }}
                            >
                              ${precioConDescuento.toLocaleString("es-CL")}
                            </span>
                          </>
                        ) : (
                          <span>${p.precio.toLocaleString("es-CL")}</span>
                        )}
                      </Card.Text>

                      <Card.Text className="flex-grow-1">
                        {p.descripcion}
                      </Card.Text>

                      <div className="d-flex justify-content-between mt-auto">
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
              );
            })}
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
