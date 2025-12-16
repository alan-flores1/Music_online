"use client";

import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { Producto } from "@/app/datos/data";

export default function CarritoPage() {
  const [carrito, setCarrito] = useState<Producto[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [valorDolar, setValorDolar] = useState<number | null>(null);

  const [formNombre, setFormNombre] = useState("");
  const [formCorreo, setFormCorreo] = useState("");
  const [formDireccion, setFormDireccion] = useState("");
  const [formRegion, setFormRegion] = useState("");
  const [formComuna, setFormComuna] = useState("");

  const [showProcesando, setShowProcesando] = useState(false);
  const [showExito, setShowExito] = useState(false);
  const [showError, setShowError] = useState(false);

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
    fetch("https://mindicador.cl/api")
      .then((res) => res.json())
      .then((data) => {
        setValorDolar(data.dolar.valor);
      })
      .catch((error) => console.error("Error al obtener indicadores:", error));
  }, []);

  // ---------------------------------------------------------
  // AQUÍ ESTÁ EL ARREGLO DE RM y COLORES
  // ---------------------------------------------------------
  useEffect(() => {
    const userRaw = localStorage.getItem("currentUser");
    if (!userRaw) return;
    try {
      const user = JSON.parse(userRaw);

      // Mapeamos lo que viene de la BD (izquierda) a lo que espera el Select (derecha)
      const regionMap: Record<string, string> = {
        // RM
        RM: "Región Metropolitana",
        rm: "Región Metropolitana",
        Metropolitana: "Región Metropolitana",
        metropolitana: "Región Metropolitana",

        // Valpo
        Valparaiso: "Valparaíso",
        valparaiso: "Valparaíso",
        Valparaíso: "Valparaíso",

        // Biobio
        Biobio: "Biobío",
        biobio: "Biobío",
        Biobío: "Biobío",
      };

      setFormNombre(user?.nombre || user?.nombre_user || "");
      setFormCorreo(user?.email || user?.correo || "");
      setFormDireccion(user?.direccion || "");
      setFormComuna(user?.comuna || "");

      const regionGuardada = user?.region || "";
      // Si existe en el mapa, usalo. Si no, usa el original.
      setFormRegion(regionMap[regionGuardada] || regionGuardada);
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

  const siguienteEsError = () => {
    const raw = localStorage.getItem("pagoAttempt") || "0";
    const n = Number.parseInt(raw, 10) || 0;
    const esError = n % 3 === 0;
    localStorage.setItem("pagoAttempt", String(n + 1));
    return esError;
  };

  const handleSubmitCompra = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowProcesando(true);
    setTimeout(() => {
      setShowProcesando(false);
      const fallo = siguienteEsError();
      if (fallo) {
        setShowError(true);
        return;
      }
      const datos = {
        nombreCompleto: formNombre.trim(),
        correo: formCorreo.trim(),
        direccion: formDireccion.trim(),
        region: formRegion,
        comuna: formComuna.trim(),
      };

      localStorage.setItem("datosCompra", JSON.stringify(datos));
      localStorage.setItem("totalCompra", String(total));

      const userRaw = localStorage.getItem("currentUser");
      if (!userRaw) {
        alert("Debes iniciar sesión antes de comprar");
        return;
      }
      const user = JSON.parse(userRaw);

      const payload = carrito.map((p) => ({
        productoId: p.id,
        cantidad: p.cantidad || 1,
      }));

      // Usamos user.id (asegúrate que tu user del localStorage tenga 'id')
      const userId = user.id || 1;

      fetch(
        `https://musicapi01-production.up.railway.app/api/boletas/crear/${userId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      )
        .then((res) => res.json())
        .then(() => {
          localStorage.removeItem("carrito");
          setShowExito(true);
          setTimeout(() => {
            window.location.href = "/carrito/exito";
          }, 1500);
        })
        .catch((err) => {
          console.error(err);
          // Si falla la API pero quieres simular éxito para la presentación, descomenta esto:
          // localStorage.removeItem("carrito");
          // setShowExito(true);
          // setTimeout(() => window.location.href = "/carrito/exito", 1500);
          setShowError(true);
        });
    }, 2000);
  };

  // ESTILO FORZADO PARA QUE SE LEAN LOS INPUTS
  const inputStyle = {
    backgroundColor: "#2c3035",
    color: "#ffffff",
    border: "1px solid #495057",
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
                    <Card
                      key={p.id}
                      className="mb-3 bg-dark text-white border-secondary"
                    >
                      <Card.Body className="d-flex align-items-center">
                        <Image
                          src={
                            p.imagenes?.[0] || p.imagenUrl || "/placeholder.png"
                          }
                          alt={p.nombre}
                          width={80}
                          height={80}
                          className="rounded me-3"
                          style={{ objectFit: "cover" }}
                        />
                        <div className="flex-grow-1">
                          <h5>{p.nombre}</h5>
                          <p className="mb-1">${p.precio.toLocaleString()}</p>
                          <div className="d-flex align-items-center gap-2">
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() =>
                                actualizarCantidad(p.id, (p.cantidad || 1) - 1)
                              }
                            >
                              -
                            </Button>
                            <span>{p.cantidad || 1}</span>
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={() =>
                                actualizarCantidad(p.id, (p.cantidad || 1) + 1)
                              }
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
                          {valorDolar && (
                            <div
                              style={{
                                fontSize: "0.8rem",
                                color: "#aaa",
                                textAlign: "right",
                              }}
                            >
                              US$
                              {Math.round(
                                (p.precio * (p.cantidad || 1)) / valorDolar
                              )}
                            </div>
                          )}
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

                  {valorDolar && (
                    <div className="mt-2 pt-2 border-top border-secondary">
                      <span style={{ color: "#ccc" }}>
                        Precio internacional:
                      </span>
                      <h4 className="text-white fw-bold">
                        US$ {Math.round(total / valorDolar)}
                      </h4>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {carrito.length > 0 && (
            <div className="container my-5">
              <div className="card bg-dark text-white p-4 shadow-sm">
                <h3 className="mb-4">💳 Información de pago</h3>
                <form onSubmit={handleSubmitCompra}>
                  {/* INPUTS CON ESTILO FORZADO PARA QUE SE LEAN */}
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre completo"
                    className="form-control mb-3"
                    style={inputStyle}
                    value={formNombre}
                    onChange={(e) => setFormNombre(e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    name="correo"
                    placeholder="Correo electrónico"
                    className="form-control mb-3"
                    style={inputStyle}
                    value={formCorreo}
                    onChange={(e) => setFormCorreo(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    name="direccion"
                    placeholder="Dirección"
                    className="form-control mb-3"
                    style={inputStyle}
                    value={formDireccion}
                    onChange={(e) => setFormDireccion(e.target.value)}
                    required
                  />

                  <div className="row">
                    <div className="col-md-6">
                      <select
                        name="region"
                        className="form-select mb-3"
                        style={inputStyle}
                        value={formRegion}
                        onChange={(e) => setFormRegion(e.target.value)}
                        required
                      >
                        <option value="" style={{ color: "#aaa" }}>
                          Selecciona región
                        </option>
                        <option value="Región Metropolitana">
                          Región Metropolitana
                        </option>
                        <option value="Valparaíso">Valparaíso</option>
                        <option value="Biobío">Biobío</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="comuna"
                        placeholder="Comuna"
                        className="form-control mb-3"
                        style={inputStyle}
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

        <footer className="footer bg-dark text-white py-4 mt-auto">
          <Container>
            <Row>
              <Col md={3}>
                <h2 className="logo">Tienda</h2>
                <p>
                  Tienda enfocada en conectar a las personas con la música...
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
      </div>

      {showProcesando && (
        <div className="modal-backdrop-custom">
          <div className="modal-content-custom">
            <div className="loader"></div>
            <p className="mt-3">Procesando pago...</p>
          </div>
        </div>
      )}

      {showExito && (
        <div className="modal-backdrop-custom">
          <div className="modal-content-custom success">
            ✅ Compra realizada con éxito!
          </div>
        </div>
      )}

      {showError && (
        <div className="modal-backdrop-custom">
          <div className="modal-content-custom error">
            ❌ Error al procesar el pago.
            <br />
            Intenta nuevamente.
            <button
              className="btn btn-light mt-3"
              onClick={() => setShowError(false)}
            >
              🔄 Volver a intentar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
