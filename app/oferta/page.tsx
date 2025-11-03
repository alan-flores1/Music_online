"use client";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link";

import { productosdcto, agregarCarrito } from "@/app/datos/data";

export default function OfertaPage() {
  return (
    <>
      <section
        style={{ backgroundColor: "black", color: "white", padding: "40px 0" }}
      >
        <Container>
          <h2 className="mb-4 text-center">Ofertas Especiales</h2>
          <Row className="g-4 justify-content-center">
            {productosdcto.map((p) => {
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
                          backgroundColor: "#dc3545",
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
                                color: "#dc3545",
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
