"use client";

import { Container, Row, Col, Carousel, Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Link from "next/link";
import { agregarCarrito } from "@/app/datos/data";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  imagenes: string[];
  imagenUrl?: string;
  descripcion: string;
  descuento?: number;
  cantidad?: number;
}

interface CarouselCategoriaProps {
  categoria: string;
  valorDolar: number | null;
}

function CarouselCategoria({ categoria, valorDolar }: CarouselCategoriaProps) {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    fetch("https://musicapi01-production.up.railway.app/api/productos")
      .then((res) => res.json())
      .then((data: Producto[]) => setProductos(data))
      .catch((error) => console.log("Error", error));
  }, []);

  const lista = productos.filter(
    (p) => p.categoria.toLowerCase() === categoria.toLowerCase()
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
              {slide.map((p) => (
                <Col key={p.id} xs={6} sm={4} md={3} lg={2}>
                  <Card className="compact-card h-100 bg-dark text-light">
                    <Card.Img
                      variant="top"
                      src={p.imagenUrl}
                      alt={p.nombre}
                      className="card-img-top"
                    />
                    <Card.Body className="text-center p-2">
                      <Card.Title
                        as="h6"
                        style={{ height: "20px", overflow: "hidden" }}
                      >
                        {p.nombre}
                      </Card.Title>
                      <div className="mb-2">
                        <span className="d-block fw-bold">
                          ${p.precio.toLocaleString()}
                        </span>
                        {valorDolar && (
                          <small
                            className="text-secondary"
                            style={{ fontSize: "0.75rem" }}
                          >
                            (US$ {Math.round(p.precio / valorDolar)})
                          </small>
                        )}
                      </div>

                      <div className="d-flex justify-content-center gap-2">
                        <Button
                          variant="secondary"
                          size="sm"
                          href={`/detalle?id=${p.id}`}
                        >
                          Ver
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => agregarCarrito(p)}
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
  const [dolar, setDolar] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://mindicador.cl/api")
      .then((res) => res.json())
      .then((data) => setDolar(data.dolar.valor))
      .catch((e) => console.error(e));
  }, []);

  return (
    <>
      <section
        style={{ backgroundColor: "black", color: "white", padding: "40px 0" }}
      >
        <Container>
          {dolar && (
            <div className="text-end mb-3 text-secondary">
              <small>Dólar hoy: ${dolar}</small>
            </div>
          )}

          <div id="vinilos">
            <CarouselCategoria categoria="Vinilo" valorDolar={dolar} />
          </div>
          <div id="cds">
            <CarouselCategoria categoria="Cds" valorDolar={dolar} />
          </div>
          <div id="accesorios">
            <CarouselCategoria categoria="Accesorios" valorDolar={dolar} />
          </div>
        </Container>
      </section>

      <footer className="footer bg-dark text-white py-4 mt-5">
        <Container>
          <Row>
            <Col md={3}>
              <h2 className="logo">Tienda</h2>
              <p>Tienda enfocada en conectar a las personas con la música...</p>
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
