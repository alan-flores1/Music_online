import { Producto } from "@/app/datos/data";

export async function getProductos(): Promise<Producto[]> {
  const url = "https://musicapi01-production.up.railway.app/api/productos";
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return [];
  return await res.json();
}

export type Rol = "ADMIN" | "CLIENTE";

export interface Usuario {
  id?: number;
  nombre_user: string;
  correo: string;
  contrasenia: string;
  region: string;
  comuna: string;
  rol: Rol;
}

export async function getUsers(): Promise<Usuario[]> {
  const url = "https://musicapi01-production.up.railway.app/api/users";
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return [];
  return await res.json();
}

export async function crearUsuario(user: Usuario) {
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
  } catch {
    return { error: "Error al comunicar con la API" };
  }
}

export async function login(
  email: string,
  contrasenia: string
): Promise<Usuario | { error: string }> {
  try {
    const url = "https://musicapi01-production.up.railway.app/api/users";
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, contrasenia }),
    });

    if (!res.ok) return { error: "Error al conectar con el servidor" };
    return await res.json();
  } catch {
    return { error: "Error al comunicar con la API" };
  }
}
