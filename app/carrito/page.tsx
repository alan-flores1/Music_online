"use client";

import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import NavbarTienda from "@/components/NavbarTienda";

import { Producto } from "@/app/datos/data";

export default function CarritoPage() {
  const [carrito, setCarrito] = useState<Producto[]>([]);
  const [total, setTotal] = useState<number>(0);

  const [formNombre, setFormNombre] = useState("");
  const [formCorreo, setFormCorreo] = useState("");
  const [formDireccion, setFormDireccion] = useState("");
  const [formRegion, setFormRegion] = useState("");
  const [formComuna, setFormComuna] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("carrito") || "[]");
    setCarrito(stored);
  }, []);

  useEffect(() => {
    const totalCalculado = carrito.reduce(
      (acc, p) => acc + p.precio * (p.cantidad || 1),
      0
    );
    setTotal(totalCalculado);
  }, [carrito]);

  useEffect(() => {
    const userRaw = localStorage.getItem("currentUser");
    if (!userRaw) return;
    try {
      const user = JSON.parse(userRaw);

      const regionMap: Record<string, string> = {
        metropolitana: "Región Metropolitana",
        valparaiso: "Valparaíso",
        biobio: "Biobío",
      };

      setFormNombre(user?.nombre || "");
      setFormCorreo(user?.email || "");
      setFormDireccion(user?.direccion || "");

      const regionGuardada = user?.region || "";
      setFormRegion(regionMap[regionGuardada] ?? regionGuardada);

      setFormComuna(user?.comuna || "");
    } catch {}
  }, []);

  const actualizarCantidad = (id: number, cantidad: number) => {
    if (cantidad <= 0) return eliminarProducto(id);
    const nuevoCarrito = carrito.map((p) =>
      p.id === id ? { ...p, cantidad } : p
    );
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };

  const eliminarProducto = (id: number) => {
    const nuevoCarrito = carrito.filter((p) => p.id !== id);
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };

  const handleSubmitCompra = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const datos = {
      nombreCompleto: formNombre.trim(),
      correo: formCorreo.trim(),
      direccion: formDireccion.trim(),
      region: formRegion,
      comuna: formComuna.trim(),
    };

    localStorage.setItem("datosCompra", JSON.stringify(datos));
    localStorage.setItem("totalCompra", String(total));

    localStorage.removeItem("carrito");
    window.location.href = "/carrito/exito";
  };

  return (
    <>

      <div className="d-flex flex-column min-vh-100">
        <div className="flex-grow-1">
          <div className="container" style={{ marginTop: "120px" }}>
            <div className="row">
              <div className="col-md-8">
                <h2 className="mb-4">🛒 Mi carrito de compras</h2>
                {carrito.length === 0 ? (
                  <p>No hay productos en el carrito.</p>
                ) : (
                  carrito.map((p) => (
                    <Card key={p.id} className="mb-3 bg-dark text-white border-secondary">
                      <Card.Body className="d-flex align-items-center">
                        <Image
                          src={p.imagenes[0]}
                          alt={p.nombre}
                          width={80}
                          height={80}
                          className="rounded me-3"
                        />
                        <div className="flex-grow-1">
                          <h5>{p.nombre}</h5>
                          <p className="mb-1">${p.precio.toLocaleString()}</p>
                          <div className="d-flex align-items-center gap-2">
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => actualizarCantidad(p.id, (p.cantidad || 1) - 1)}
                            >
                              -
                            </Button>
                            <span>{p.cantidad || 1}</span>
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() => actualizarCantidad(p.id, (p.cantidad || 1) + 1)}
                            >
                              +
                            </Button>
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={() => eliminarProducto(p.id)}
                            >
                              Eliminar
                            </Button>
                          </div>
                        </div>
                        <div>
                          <strong>
                            ${(p.precio * (p.cantidad || 1)).toLocaleString()}
                          </strong>
                        </div>
                      </Card.Body>
                    </Card>
                  ))
                )}
              </div>

              <div className="col-md-4" style={{ marginTop: "50px" }}>
                <div className="card p-3 shadow-sm bg-dark text-white">
                  <h4 className="fw-bold">TOTAL:</h4>
                  <h3 className="text-success fw-bold">
                    ${total.toLocaleString()}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {carrito.length > 0 && (
            <div className="container my-5">
              <div className="card bg-dark text-white p-4 shadow-sm">
                <h3 className="mb-4">💳 Información de pago</h3>

                <form onSubmit={handleSubmitCompra}>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre completo"
                    className="form-control mb-3 bg-dark text-white border-secondary"
                    value={formNombre}
                    onChange={(e) => setFormNombre(e.target.value)}
                    required
                  />

                  <input
                    type="email"
                    name="correo"
                    placeholder="Correo electrónico"
                    className="form-control mb-3 bg-dark text-white border-secondary"
                    value={formCorreo}
                    onChange={(e) => setFormCorreo(e.target.value)}
                    required
                  />

                  <input
                    type="text"
                    name="direccion"
                    placeholder="Dirección"
                    className="form-control mb-3 bg-dark text-white border-secondary"
                    value={formDireccion}
                    onChange={(e) => setFormDireccion(e.target.value)}
                    required
                  />

                  <div className="row">
                    <div className="col-md-6">
                      <select
                        name="region"
                        className="form-select mb-3 bg-dark text-white border-secondary"
                        value={formRegion}
                        onChange={(e) => setFormRegion(e.target.value)}
                        required
                      >
                        <option value="">Selecciona región</option>
                        <option value="Región Metropolitana">Región Metropolitana</option>
                        <option value="Valparaíso">Valparaíso</option>
                        <option value="Biobío">Biobío</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="comuna"
                        placeholder="Comuna"
                        className="form-control mb-3 bg-dark text-white border-secondary"
                        value={formComuna}
                        onChange={(e) => setFormComuna(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="btn btn-success w-100">
                    Finalizar compra (${total.toLocaleString()})
                  </Button>
                </form>
              </div>
            </div>
          )}
        </div>

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
                  <li><Link href="/">Inicio</Link></li>
                  <li><Link href="/productos">Productos</Link></li>
                  <li><Link href="/contacto">Sobre Nosotros</Link></li>
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
        </footer>
      </div>
    </>
  );
}
