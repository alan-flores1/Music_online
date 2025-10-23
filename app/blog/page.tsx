import React from "react";

const Blog: React.FC = () => {
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
                <a className="nav-link" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Productos.html">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Nosotros.html">
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="blog.html"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Contacto.html">
                  Contacto
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="Sesion.html">
                  Inicio de sesión
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-0" href="#">
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

      <div className="container my-5">
        <h1 className="text-center mb-5">Blogs Importantes</h1>

        <div className="row g-4">
          <div className="col-md-4">
            <a
              href="https://es.wikipedia.org/wiki/Disco_de_vinilo"
              className="text-decoration-none"
            >
              <div className="card blog-card">
                <img
                  src="/images/discodevinilo.png"
                  className="card-img-top"
                  alt="Cómo se inició el vinilo"
                />
                <div className="card-body">
                  <h5 className="card-title">¿Cómo se inició el vinilo?</h5>
                  <p className="card-text">Publicado el 29 junio, 2025</p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-4">
            <a
              href="https://www.youtube.com/watch?v=HWfhnt6V54Q&t=617s"
              className="text-decoration-none"
            >
              <div className="card blog-card">
                <img
                  src="/images/almacenarvinilo.png"
                  className="card-img-top"
                  alt="Tips para cuidar vinilos"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Tips para cuidar tus discos de vinilo
                  </h5>
                  <p className="card-text">Publicado el 4 agosto, 2024</p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-4">
            <a href="index.html" className="text-decoration-none">
              <div className="card blog-card">
                <img
                  src="/images/ventas.png"
                  className="card-img-top"
                  alt="Ventas de vinilo"
                />
                <div className="card-body">
                  <h5 className="card-title">Ventas de vinilo</h5>
                  <p className="card-text">Publicado el 15 Septiembre, 2025</p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-4">
            <a
              href="https://www.youtube.com/watch?v=yqnLfuA-aNQ"
              className="text-decoration-none"
            >
              <div className="card blog-card">
                <img
                  src="/images/limpiarvi.png"
                  className="card-img-top"
                  alt="Cómo limpiar vinilos"
                />
                <div className="card-body">
                  <h5 className="card-title">¿Cómo limpiar vinilos?</h5>
                  <p className="card-text">Publicado el 9 enero, 2024</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

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
                  <a
                    href="index.html"
                    className="text-white text-decoration-none"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="productos.html"
                    className="text-white text-decoration-none"
                  >
                    Productos
                  </a>
                </li>
                <li>
                  <a
                    href="nosotros.html"
                    className="text-white text-decoration-none"
                  >
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="blog.html"
                    className="text-white text-decoration-none"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="contacto.html"
                    className="text-white text-decoration-none"
                  >
                    Contacto
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

export default Blog;
