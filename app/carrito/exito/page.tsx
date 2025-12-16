"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";

export default function ExitoPage() {
  const [nombre, setNombre] = useState("Cliente");
  const [comuna, setComuna] = useState("");
  const [clima, setClima] = useState<string>("");
  const [temp, setTemp] = useState<string>("");
  const [cargandoClima, setCargandoClima] = useState(false);

  useEffect(() => {
    // 1. Recuperamos los datos que el usuario ingresó en el Carrito
    const datosRaw = localStorage.getItem("datosCompra");

    if (datosRaw) {
      try {
        const datos = JSON.parse(datosRaw);
        if (datos.nombreCompleto) setNombre(datos.nombreCompleto);
        if (datos.comuna) {
          setComuna(datos.comuna);
          obtenerClima(datos.comuna); // <--- LLAMADA A LA API CON DATOS DEL USUARIO
        }
      } catch (e) {
        console.error("Error leyendo datos locales", e);
      }
    }
  }, []);

  // 2. Función para consultar la API del clima según la comuna del usuario
  const obtenerClima = (ciudad: string) => {
    setCargandoClima(true);
    // Usamos wttr.in que devuelve JSON y no pide Key (Seguro y fácil)
    // format=j1 entrega JSON detallado
    fetch(`https://wttr.in/${ciudad}?format=j1`)
      .then((res) => res.json())
      .then((data) => {
        // Extraemos la condición actual
        const current = data.current_condition[0];
        const temperatura = current.temp_C;
        const descripcion = current.lang_es
          ? current.lang_es[0].value
          : "Despejado";

        setTemp(temperatura);
        setClima(descripcion);
        setCargandoClima(false);
      })
      .catch((err) => {
        console.error("No se pudo obtener el clima", err);
        setCargandoClima(false);
        // Fallback visual si falla la API
        setClima("No disponible");
      });
  };

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
              r="50"
              fill="none"
              stroke="#25ff48"
              strokeWidth="5"
              style={styles.circleAnim}
            />
            <path
              d="M35 60 L55 80 L85 40"
              fill="none"
              stroke="#25ff48"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={styles.checkAnim}
            />
          </svg>
        </div>

        <h1 style={styles.title}>¡Gracias, {nombre}!</h1>
        <p style={styles.text}>Tu compra ha sido procesada exitosamente.</p>

        {/* 3. SECCIÓN DE INTEGRACIÓN API (CLIMA) */}
        {comuna && (
          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: "10px",
              border: "1px solid #444",
            }}
          >
            <h5
              style={{
                color: "#aaa",
                fontSize: "0.9rem",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Reporte de Despacho
            </h5>
            <p style={{ marginBottom: "5px" }}>
              Destino: <strong>{comuna}</strong>
            </p>

            {cargandoClima ? (
              <p style={{ color: "#888" }}>
                Consultando condiciones climáticas...
              </p>
            ) : clima && clima !== "No disponible" ? (
              <div>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  {temp}°C
                </div>
                <p style={{ color: "#25ff48", textTransform: "capitalize" }}>
                  {clima}
                </p>
                <small style={{ color: "#aaa", fontStyle: "italic" }}>
                  &quot;Ideal para esperar tus vinilos escuchando música&quot;
                </small>
              </div>
            ) : (
              <small style={{ color: "#666" }}>
                Datos del clima no disponibles por el momento.
              </small>
            )}
          </div>
        )}

        <div style={{ marginTop: 40 }}>
          <Link href="/productos">
            <Button variant="outline-light" className="me-3">
              Seguir comprando
            </Button>
          </Link>
          <Link href="/">
            <Button variant="danger">Volver al inicio</Button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes drawCircle {
          from {
            stroke-dasharray: 0 314;
          }
          to {
            stroke-dasharray: 314 314;
          }
        }
        @keyframes drawCheck {
          from {
            stroke-dashoffset: 100;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
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
    fontSize: "2rem",
    fontWeight: 700,
    marginBottom: 8,
  },
  text: {
    fontSize: "1.1rem",
    color: "#ccc",
  },
  circleAnim: {
    animation: "drawCircle 0.6s ease-out forwards",
  },
  checkAnim: {
    strokeDasharray: 100,
    strokeDashoffset: 100,
    animation: "drawCheck 0.4s 0.6s ease-out forwards",
  },
};
