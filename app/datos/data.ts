export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  imagenes: string[];
  descripcion: string;
  descuento?: number;
  cantidad?: number;
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

function agregarCarrito(id: number, cantidad = 1) {
  const carrito: { id: number; cantidad: number }[] = JSON.parse(
    localStorage.getItem("carrito") || "[]"
  );
  const producto = productos.find((p) => p.id === id);
  if (!producto) return alert("Producto no encontrado");

  const existente = carrito.find((p) => p.id === id);
  if (existente) existente.cantidad += cantidad;
  else carrito.push({ ...producto, cantidad });

  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(`${producto.nombre} (x${cantidad}) añadido al carrito ✅`);
}

export { productos, productosdcto, agregarCarrito };
