"use client";

import { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
} from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function NavbarTienda() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const isLogged = localStorage.getItem("logged") === "true";
    setLogged(isLogged);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("logged");
    localStorage.removeItem("currentUser");
    setLogged(false);
    window.location.href = "/";
  };

  return (
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
            <Nav.Link as={Link} href="/" className="active">
              Inicio
            </Nav.Link>

            <NavDropdown
              title="Productos"
              id="productos-dropdown"
              menuVariant="dark"
              className="text-light"
            >
              <NavDropdown.Item as={Link} href="/productos#vinilos">
                Vinilos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/productos#cds">
                CDs
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/productos#accesorios">
                Accesorios
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} href="/nosotros">
              Nosotros
            </Nav.Link>
            <Nav.Link as={Link} href="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} href="/contacto">
              Contacto
            </Nav.Link>
            <Nav.Link as={Link} href="/oferta">
              Ofertas
            </Nav.Link>
          </Nav>

          <Nav className="ms-auto align-items-center gap-3">
            {!logged ? (
              <Nav.Link as={Link} href="/sesion">
                Iniciar Sesión
              </Nav.Link>
            ) : (
              <Nav.Link
                onClick={handleLogout}
                style={{ cursor: "pointer" }}
              >
                Cerrar Sesión
              </Nav.Link>
            )}

            <Nav.Link as={Link} href="/carrito" className="p-0">
              <Image
                src="/images/carrito.png"
                alt="Carrito"
                width={28}
                height={28}
                className="carrito"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
