// =====================
// PRODUCTOS
// =====================
export async function getProductos() {
  const url = "https://musicapi01-production.up.railway.app/api/productos";

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return [];

  return await res.json();
}

// =====================
// USUARIOS
// =====================
export async function getUsers() {
  const url = "https://musicapi01-production.up.railway.app/api/users";

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return [];

  return await res.json();
}

// Crear usuario
export async function crearUsuario(usuario) {
  const url = "https://musicapi01-production.up.railway.app/api/users";

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario),
  });

  return await res.json();
}

// Iniciar sesión (si tu API lo maneja)
export async function login(email, contrasenia) {
  const url = `https://musicapi01-production.up.railway.app/api/users`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, contrasenia }),
  });

  return await res.json();
}
