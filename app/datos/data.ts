export interface Producto {
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

const productosdcto: Producto[] = [
  {
    id: 1,
    nombre: "Vinilo Luis Miguel",
    precio: 80000,
    descuento: 20,
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
    id: 9,
    nombre: "CD Bruno Mars / Doo-Wops",
    precio: 50000,
    descuento: 15,
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
    id: 17,
    nombre: "Lector de Vinilos",
    precio: 200000,
    descuento: 10,
    categoria: "Accesorios",
    imagenes: [
      "/images/accesorios/lectorvinilo.png",
      "/images/accesorios/lectorvinilo2.png",
      "/images/accesorios/lectorvinilo3.png",
    ],
    descripcion:
      "Reproductor de vinilos de alta calidad, ideal para disfrutar tu colección.",
  },
];

function agregarCarrito(producto: Producto, cantidad = 1) {
  const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");

  const existente = carrito.find((p: Producto) => p.id === producto.id);

  if (existente) existente.cantidad += cantidad;
  else carrito.push({ ...producto, cantidad });

  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(`${producto.nombre} añadido al carrito`);
}

export { productosdcto, agregarCarrito };
