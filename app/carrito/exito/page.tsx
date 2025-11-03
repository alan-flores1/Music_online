"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Pequeñas animaciones con CSS inline y SVG animado
export default function ExitoPage() {
  const [nombre, setNombre] = useState("Cliente");
  const [direccion, setDireccion] = useState("");
  const [total, setTotal] = useState<string>("0");

  useEffect(() => {
    // Cargar datos de compra
    const datosRaw = localStorage.getItem("datosCompra");
    const totalRaw = localStorage.getItem("totalCompra");
    try {
      const datos = datosRaw ? JSON.parse(datosRaw) : null;
      if (datos?.nombreCompleto) setNombre(datos.nombreCompleto);
      if (datos?.direccion) setDireccion(datos.direccion);
    } catch {}
    setTotal(totalRaw || "0");

    // (Opcional) Limpia datos de compra después de mostrarlos
    // setTimeout(() => {
    //   localStorage.removeItem("datosCompra");
    //   localStorage.removeItem("totalCompra");
    // }, 5000);
  }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.card} className="shadow-lg">
        {/* Check animado */}
        <div style={styles.checkWrap}>
          <svg
            viewBox="0 0 120 120"
            width="120"
            height="120"
            style={{ overflow: "visible" }}
          >
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="#28a745"
              strokeWidth="6"
              style={{
                opacity: 0.2,
              }}
            />
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="#28a745"
              strokeWidth="6"
              strokeDasharray="339.292"
              strokeDashoffset="339.292"
              style={{
                animation: "drawCircle 900ms ease-out forwards",
              }}
            />
            <polyline
              points="36,64 54,78 84,46"
              fill="none"
              stroke="#28a745"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="80"
              strokeDashoffset="80"
              style={{
                animation: "drawCheck 700ms 500ms ease-out forwards",
              }}
            />
          </svg>
        </div>

        <h1 style={styles.title}>¡Compra realizada con éxito!</h1>

        <p style={styles.subtitle}>
          Gracias por tu compra, <strong>{nombre}</strong>.
        </p>

        <div style={styles.summary}>
          <h3 style={{ marginBottom: 12 }}>🧾 Resumen</h3>
          <p style={{ margin: 0 }}>Dirección: <strong>{direccion || "—"}</strong></p>
          <p style={{ margin: 0 }}>Total pagado: <strong>${Number(total).toLocaleString()}</strong></p>
        </div>

        <Link href="/" style={styles.button}>
          Volver a la tienda
        </Link>
      </div>

      {/* Animaciones CSS */}
      <style>{`
        @keyframes drawCircle {
          to { stroke-dashoffset: 0; }
        }
        @keyframes drawCheck {
          to { stroke-dashoffset: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    minHeight: "100vh",
    width: "100%",
    background: "#0b0f14",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  card: {
    width: "100%",
    maxWidth: 560,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 16,
    padding: 28,
    textAlign: "center",
    animation: "fadeIn 420ms ease-out both",
  },
  checkWrap: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    margin: "6px 0 4px",
    fontWeight: 800,
    letterSpacing: 0.2,
  },
  subtitle: {
    opacity: 0.9,
    marginBottom: 18,
  },
  summary: {
    textAlign: "left",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 12,
    padding: 16,
    marginBottom: 18,
  },
  button: {
    display: "inline-block",
    background: "#28a745",
    color: "white",
    textDecoration: "none",
    padding: "10px 18px",
    borderRadius: 10,
    fontWeight: 700,
  },
};
