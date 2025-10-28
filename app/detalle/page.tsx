"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
  Carousel,
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
}

const productos: Producto[] = [
  {
    id: 1,
    nombre: "Vinilo Luis Miguel",
    precio: 80000,
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
    id: 2,
    nombre: "Los Prisioneros",
    precio: 150000,
    categoria: "Vinilos",
    imagenes: [
      "/images/vinilos/viniloprisioneros.jpeg",
      "/images/vinilos/viniloprisioneros2.jpeg",
      "/images/vinilos/viniloprisioneros3.jpeg",
    ],
    descripcion:
      "La banda chilena que marcó a toda una generación, ahora en formato vinilo para coleccionistas.",
  },
  {
    id: 3,
    nombre: "Vinilo Queen",
    precio: 300000,
    categoria: "Vinilos",
    imagenes: [
      "/images/vinilos/viniloqueen.jpeg",
      "/images/vinilos/viniloqueen2.jpeg",
      "/images/vinilos/viniloqueen3.jpeg",
    ],
    descripcion:
      "El legado de Freddie Mercury y Queen en vinilo, un imprescindible del rock clásico.",
  },
  {
    id: 4,
    nombre: "Vinilo Beethoven",
    precio: 300000,
    categoria: "Vinilos",
    imagenes: [
      "/images/vinilos/beethoven.png",
      "/images/vinilos/beethoven2.jpeg",
      "/images/vinilos/beethoven3.png",
    ],
    descripcion:
      "Obras maestras de Beethoven en vinilo, ideal para los amantes de la música clásica.",
  },
  {
    id: 5,
    nombre: "Vinilo Green Day",
    precio: 70000,
    categoria: "Vinilos",
    imagenes: [
      "/images/vinilos/greenday.png",
      "/images/vinilos/greenday2.png",
      "/images/vinilos/greenday3.png",
    ],
    descripcion:
      "Los éxitos de Green Day en formato vinilo, perfectos para los fanáticos del punk rock.",
  },
  {
    id: 6,
    nombre: "Vinilo Artic Monkey",
    precio: 75000,
    categoria: "Vinilos",
    imagenes: [
      "/images/vinilos/articmonkey.png",
      "/images/vinilos/articmonkey2.png",
      "/images/vinilos/articmonkey3.png",
    ],
    descripcion:
      "El sonido alternativo de Arctic Monkeys en vinilo, ideal para coleccionistas modernos.",
  },
  {
    id: 7,
    nombre: "Vinilo Pearl Jam Ten",
    precio: 65000,
    categoria: "Vinilos",
    imagenes: [
      "/images/vinilos/pearljam.png",
      "/images/vinilos/pearljam2.png",
      "/images/vinilos/pearljam3.png",
    ],
    descripcion:
      "El icónico álbum 'Ten' de Pearl Jam en vinilo, un clásico del grunge de los 90.",
  },
  {
    id: 8,
    nombre: "Vinilo Doja Cat / Planet Her",
    precio: 300000,
    categoria: "Vinilos",
    imagenes: [
      "/images/vinilos/dojacat.png",
      "/images/vinilos/dojacat2.png",
      "/images/vinilos/dojacat3.png",
    ],
    descripcion:
      "El aclamado 'Planet Her' de Doja Cat en vinilo, con un estilo pop moderno y fresco.",
  },

  {
    id: 9,
    nombre: "CD Bruno Mars / Doo-Wops",
    precio: 50000,
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
    id: 10,
    nombre: "CD Bob Marley",
    precio: 60000,
    categoria: "CDs",
    imagenes: [
      "/images/cd/bob.png",
      "/images/cd/bob2.png",
      "/images/cd/bob3.png",
    ],
    descripcion:
      "Los mejores éxitos de Bob Marley en CD, un viaje directo al reggae más auténtico.",
  },
  {
    id: 11,
    nombre: "CD Benson Boone / American Heart",
    precio: 300000,
    categoria: "CDs",
    imagenes: [
      "/images/cd/benson.png",
      "/images/cd/benson2.png",
      "/images/cd/benson3.png",
    ],
    descripcion:
      "El álbum 'American Heartbreak' de Benson Boone en CD, con un sonido fresco y juvenil.",
  },
  {
    id: 12,
    nombre: "CD Olivia Rodrigo / Sour",
    precio: 300000,
    categoria: "CDs",
    imagenes: [
      "/images/cd/olivia.png",
      "/images/cd/olivia2.png",
      "/images/cd/olivia3.png",
    ],
    descripcion:
      "El explosivo debut de Olivia Rodrigo en CD, con todos sus himnos juveniles.",
  },
  {
    id: 13,
    nombre: "CD Kendrick Lamar",
    precio: 70000,
    categoria: "CDs",
    imagenes: [
      "/images/cd/kendric.png",
      "/images/cd/kendric2.png",
      "/images/cd/kendric3.png",
    ],
    descripcion:
      "Las rimas únicas de Kendrick Lamar en CD, considerado uno de los mejores raperos de su generación.",
  },
  {
    id: 14,
    nombre: "CD Dua Lipa / Radical",
    precio: 75000,
    categoria: "CDs",
    imagenes: [
      "/images/cd/dualipa.png",
      "/images/cd/dualipa2.png",
      "/images/cd/dualipa3.png",
    ],
    descripcion:
      "El sonido pop renovado de Dua Lipa en su álbum 'Radical', disponible en CD.",
  },
  {
    id: 15,
    nombre: "CD Los Bunkers",
    precio: 300000,
    categoria: "CDs",
    imagenes: [
      "/images/cd/bunkers.png",
      "/images/cd/bunkers2.png",
      "/images/cd/bunkers3.png",
    ],
    descripcion:
      "El rock chileno de Los Bunkers en CD, una pieza esencial para fanáticos nacionales.",
  },
  {
    id: 16,
    nombre: "CD Gorillaz / Demon Days",
    precio: 300000,
    categoria: "CDs",
    imagenes: [
      "/images/cd/gorilaz.png",
      "/images/cd/gorilaz2.png",
      "/images/cd/gorilaz3.png",
    ],
    descripcion:
      "El icónico 'Demon Days' de Gorillaz en CD, con una mezcla única de estilos.",
  },

  {
    id: 17,
    nombre: "Lector de Vinilos",
    precio: 200000,
    categoria: "Accesorios",
    imagenes: [
      "/images/accesorios/lectorvinilo.png",
      "/images/accesorios/lectorvinilo2.png",
      "/images/accesorios/lectorvinilo3.png",
    ],
    descripcion:
      "Reproductor de vinilos de alta calidad, ideal para disfrutar tu colección.",
  },
  {
    id: 18,
    nombre: "Reproductor CD",
    precio: 180000,
    categoria: "Accesorios",
    imagenes: [
      "/images/accesorios/reproductorcd.png",
      "/images/accesorios/reproductorcd2.png",
      "/images/accesorios/reproductorcd3.png",
    ],
    descripcion:
      "Compacto y moderno reproductor de CDs, perfecto para escuchar tu música favorita.",
  },
  {
    id: 19,
    nombre: "Fundas Vinilos",
    precio: 300000,
    categoria: "Accesorios",
    imagenes: [
      "/images/accesorios/fundas.png",
      "/images/accesorios/fundas2.png",
      "/images/accesorios/fundas3.png",
    ],
    descripcion:
      "Set de fundas protectoras para vinilos, mantiene tu colección en perfecto estado.",
  },
  {
    id: 20,
    nombre: "Kit Limpieza Vinilo",
    precio: 70000,
    categoria: "Accesorios",
    imagenes: [
      "/images/accesorios/kit.png",
      "/images/accesorios/kit2.png",
      "/images/accesorios/kit3.png",
    ],
    descripcion:
      "Kit de limpieza para vinilos, elimina polvo y estática para mejor sonido.",
  },
  {
    id: 21,
    nombre: "Maleta Vinilo",
    precio: 75000,
    categoria: "Accesorios",
    imagenes: [
      "/images/accesorios/maleta.png",
      "/images/accesorios/maleta2.png",
      "/images/accesorios/maleta3.png",
    ],
    descripcion:
      "Maleta rígida para transportar y proteger tus vinilos de forma segura.",
  },
  {
    id: 22,
    nombre: "Pua Tornamesa",
    precio: 100000,
    categoria: "Accesorios",
    imagenes: [
      "/images/accesorios/pua.png",
      "/images/accesorios/pua2.png",
      "/images/accesorios/pua3.png",
    ],
    descripcion:
      "Aguja de repuesto para tornamesa, garantiza la mejor calidad de reproducción.",
  },
];

export default function DetallePage() {
  const searchParams = useSearchParams();
  const idParam = searchParams.get("id");
  const [producto, setProducto] = useState<Producto | null>(null);
  const [otros, setOtros] = useState<Producto[]>([]);

  useEffect(() => {
    if (!idParam) return;

    const id = parseInt(idParam);
    const encontrado = productos.find((p) => p.id === id);
    setProducto(encontrado || null);

    const relacionados = productos
      .filter((p) => p.id !== id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);

    setOtros(relacionados);
  }, [idParam]);

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

  if (!producto)
    return <p className="text-center text-light mt-5">Cargando...</p>;

  return (
    <>
      {/* NAVBAR */}
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <Link href="/" className="navbar-brand d-flex align-items-center">
            <Image
              src="/images/Icono.png"
              alt="Logo"
              width={30}
              height={30}
              className="me-2"
            />
          </Link>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/productos">Productos</Nav.Link>
              <Nav.Link href="/nosotros">Nosotros</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/contacto">Contacto</Nav.Link>
            </Nav>
            <Nav className="ms-auto align-items-center">
              <Link href="/sesion" className="nav-link">
                Inicio de sesión
              </Link>
              <Link href="/carrito" className="nav-link p-0">
                <Image
                  src="/images/carrito.png"
                  alt="Carrito"
                  width={30}
                  height={30}
                  className="carrito"
                />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* DETALLE PRODUCTO */}
      <section className="bg-black text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <Carousel>
                {producto.imagenes.map((img, i) => (
                  <Carousel.Item key={i}>
                    <img
                      src={img}
                      alt={producto.nombre}
                      className="d-block w-100"
                      style={{
                        height: 400,
                        objectFit: "contain",
                        borderRadius: "10px",
                      }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>

            <Col md={6} className="text-light">
              <h2>{producto.nombre}</h2>
              <h4 className="text-danger mb-3">${producto.precio}</h4>
              <p>{producto.descripcion}</p>
              <Button
                variant="danger"
                size="lg"
                className="mt-3"
                onClick={() => agregarCarrito(producto.id)}
              >
                Añadir al carrito 🛒
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* OTROS PRODUCTOS */}
      <section>
        <Container>
          <h3 className="mb-4">Otros productos</h3>
          <Row className="g-3">
            {otros.map((p) => (
              <Col key={p.id} xs={6} md={3}>
                <Card className="h-100 bg-light text-dark">
                  <Card.Img
                    variant="top"
                    src={p.imagenes[0]}
                    style={{ height: 200, objectFit: "cover" }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>{p.nombre}</Card.Title>
                    <Card.Text>${p.precio}</Card.Text>
                    <Link href={`/detalle?id=${p.id}`}>
                      <Button variant="danger" size="sm">
                        Ver detalle
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
