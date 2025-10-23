import React from "react";

export const Home: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src="/images/Icono.png"
              alt="Logo"
              width={30}
              height={30}
              className="d-inline-block align-text-top me-2"
            />
          </a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Productos">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Nosotros">
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Contacto">
                  Contacto
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="Sesion">
                  Inicio de sesión
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-0" href="carrito">
                  <img
                    src="/images/carrito.png"
                    alt="Carrito"
                    width={30}
                    height={30}
                    className="carrito"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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
              <a href="Productos.html" className="btn btn-danger">
                Ver Productos
              </a>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="/images/fondo.jpg"
                className="img-fluid border"
                alt="Imagen Tienda"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2 className="logo">Tienda</h2>
              <p>
                Tienda enfocada en conectar a las personas con la música.
                Vinilos, CDs, Blurays y objetos para melómanos.
              </p>
            </div>

            <div className="col-md-3">
              <h3>Enlaces</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="App.tsx" className="text-white text-decoration-none">
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="Productos"
                    className="text-white text-decoration-none"
                  >
                    Productos
                  </a>
                </li>
                <li>
                  <a
                    href="Contacto"
                    className="text-white text-decoration-none"
                  >
                    Sobre Nosotros
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h3>Contacto</h3>
              <p>📧 contacto@tienda.cl</p>
              <p>📞 +56 2 2222 3333</p>
            </div>

            <div className="col-md-3">
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

        <div className="text-center mt-4">
          <p>&copy; 2025 Tienda. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
