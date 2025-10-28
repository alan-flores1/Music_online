"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomePage() {
  useEffect(() => {
    // Importa Bootstrap JS solo del lado del cliente
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="bg-black text-white">
      navBar()
      <section className="py-5 bg-auto">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold">TIENDA FÍSICA DE MÚSICA</h2>
              <p>
                🎶 “En nuestra tienda la música no es solo un producto, es una
                experiencia. Cada vinilo, cada CD y cada objeto tiene una
                historia que conecta pasado y presente. Somos un espacio para
                melómanos, coleccionistas y soñadores, donde la pasión por el
                sonido se transforma en comunidad. Aquí la música se vive, se
                toca y se comparte.” 🎶
              </p>
              <Link href="/productos" className="btn btn-danger">
                Ver Productos
              </Link>
            </div>

            <div className="col-md-6 text-center">
              <Image
                src="/images/fondo.jpg"
                alt="Imagen Tienda"
                width={500}
                height={400}
                className="img-fluid border"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function navBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image
            src="/images/Icono.png"
            alt="Logo"
            width={30}
            height={30}
            className="d-inline-block align-text-top me-2"
          />
          <span>Tienda</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" className="nav-link active">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/productos" className="nav-link">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/nosotros" className="nav-link">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contacto" className="nav-link">
                Contacto
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link href="/sesion" className="nav-link">
                Inicio de sesión
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/carrito" className="nav-link p-0">
                <Image
                  src="/images/carrito.png"
                  alt="Carrito"
                  width={30}
                  height={30}
                  className="carrito"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  {
    /* FOOTER */
  }
  <footer className="footer bg-dark text-white mt-5 py-4">
    <div className="container">
      <div className="row">
        {/* Columna 1 */}
        <div className="col-md-3 mb-3">
          <h2 className="logo">Tienda</h2>
          <p>
            Tienda enfocada en conectar a las personas con la música. Vinilos,
            CDs, Blurays y objetos para melómanos.
          </p>
        </div>

        {/* Columna 2 */}
        <div className="col-md-3 mb-3">
          <h3>Enlaces</h3>
          <ul className="list-unstyled">
            <li>
              <Link href="/" className="text-white text-decoration-none">
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/productos"
                className="text-white text-decoration-none"
              >
                Productos
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className="text-white text-decoration-none"
              >
                Sobre Nosotros
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div className="col-md-3 mb-3">
          <h3>Contacto</h3>
          <p>📧 contacto@tienda.cl</p>
          <p>📞 +56 2 2222 3333</p>
        </div>

        {/* Columna 4 */}
        <div className="col-md-3 mb-3">
          <h3>Síguenos</h3>
          <div className="d-flex flex-column">
            <a href="#" className="text-white text-decoration-none">
              Facebook
            </a>
            <a href="#" className="text-white text-decoration-none">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center border-top border-secondary pt-3 mt-3">
      <p className="mb-0">&copy; 2025 Tienda. Todos los derechos reservados.</p>
    </div>
  </footer>;
}
