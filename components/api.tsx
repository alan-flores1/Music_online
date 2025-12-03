export async function getProductos() {
  const url = "https://musicapi01-production.up.railway.app/api/productos";

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return [];

  return await res.json();
}

export async function getUsers() {
  const url = "https://musicapi01-production.up.railway.app/api/users";

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return [];

  return await res.json();
}

export async function crearUsuario(user: any) {
  try {
    const res = await fetch(
      "https://musicapi01-production.up.railway.app/api/users",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }
    );

    if (!res.ok) {
      return { error: "No se pudo registrar el usuario" };
    }

    const data = await res.json();
    return { data };
  } catch (err) {
    return { error: "Error al comunicar con la API" };
  }
}

export async function login(email: string, contrasenia: string) {
  const url = "https://musicapi01-production.up.railway.app/api/users";

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, contrasenia }),
  });

  return await res.json();
}
