"use client";

import { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
  NavDropdown,
} from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  imagenes: string[];
  descripcion: string;
  cantidad?: number;
}

export default function CarritoPage() {
  const [carrito, setCarrito] = useState<Producto[]>([]);
  const [total, setTotal] = useState<number>(0);

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

  const pagar = () => {
    alert("✅ Gracias por tu compra!");
    localStorage.removeItem("carrito");
    setCarrito([]);
    setTotal(0);
  };

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

      <div className="container" style={{ marginTop: "120px"}}>
        <div className="row">
          {/* Lista de productos */}
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
                    </div>
                  </Card.Body>
                </Card>
              ))
            )}
            
            </div>
            <div className="col-md-4" style={{ marginTop: "50px" }}>
                <div className="card p-3 shadow-sm bg-dark text-white">
                <h4 className="fw-bold">TOTAL:</h4>
                <h3 id="carrito-total" className="text-success fw-bold">
                    ${total.toLocaleString()}
                </h3>
                <Button
                    id="btnPagar"
                    className="btn btn-success w-100 mt-2"
                    onClick={pagar}
                    disabled={carrito.length === 0}
                >
                    PAGAR
                </Button>
                </div>
            </div>
            </div>
        </div>
        <div className="container my-5">
    <div className="card bg-dark text-white p-4 shadow-sm">
        <h3 className="mb-4">💳 Información de pago</h3>
        <form
        onSubmit={(e) => {
            e.preventDefault();
            const datos = {
            nombre: (e.target as any).nombre.value,
            apellido: (e.target as any).apellido.value,
            correo: (e.target as any).correo.value,
            direccion: (e.target as any).direccion.value,
            region: (e.target as any).region.value,
            comuna: (e.target as any).comuna.value,
            };
            localStorage.setItem("datosCompra", JSON.stringify(datos));
            localStorage.removeItem("carrito");
            window.location.href = "/carrito/exito";
        }}
        >
        <div className="row">
            <div className="col-md-6">
            <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                className="form-control mb-3 bg-dark text-white border-secondary"
                required
            />
            </div>
            <div className="col-md-6">
            <input
                type="text"
                name="apellido"
                placeholder="Apellido"
                className="form-control mb-3 bg-dark text-white border-secondary"
                required
            />
            </div>
        </div>

        <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            className="form-control mb-3 bg-dark text-white border-secondary"
            required
        />

        <input
            type="text"
            name="direccion"
            placeholder="Dirección"
            className="form-control mb-3 bg-dark text-white border-secondary"
            required
        />

        <div className="row">
            <div className="col-md-6">
            <select
                name="region"
                className="form-select mb-3 bg-dark text-white border-secondary"
                required
            >
                <option value="">Selecciona región</option>
                <option>Región Metropolitana</option>
                <option>Valparaíso</option>
                <option>Biobío</option>
            </select>
            </div>
            <div className="col-md-6">
            <input
                type="text"
                name="comuna"
                placeholder="Comuna"
                className="form-control mb-3 bg-dark text-white border-secondary"
                required
            />
            </div>
        </div>

        <Button
            type="submit"
            className="btn btn-success w-100"
            disabled={carrito.length === 0}
        >
            Finalizar compra (${total.toLocaleString()})
        </Button>
        </form>
    </div>
    </div>     
      <footer className="footer bg-dark text-white py-4 mt-5" >
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