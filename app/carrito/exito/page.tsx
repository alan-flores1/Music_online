"use client";

import { useEffect, useState, CSSProperties } from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";

export default function ExitoPage() {
  const [nombre, setNombre] = useState("Cliente");
  const [comuna, setComuna] = useState("");

  const [climaDescripcion, setClimaDescripcion] = useState("");
  const [temperatura, setTemperatura] = useState("");
  const [cargandoClima, setCargandoClima] = useState(false);

  useEffect(() => {
    const datosRaw = localStorage.getItem("datosCompra");

    if (datosRaw) {
      try {
        const datos = JSON.parse(datosRaw);
        if (datos.nombreCompleto) setNombre(datos.nombreCompleto);

        if (datos.comuna) {
          setComuna(datos.comuna);
          consultarClima(datos.comuna);
        }
      } catch (e) {
        console.error("Error recuperando datos", e);
      }
    }
  }, []);

  const consultarClima = (ciudad: string) => {
    setCargandoClima(true);
    fetch(`https://wttr.in/${ciudad}?format=j1`)
      .then((res) => res.json())
      .then((data) => {
        const current = data.current_condition[0];
        setTemperatura(current.temp_C);
        const desc = current.lang_es ? current.lang_es[0].value : "Despejado";
        setClimaDescripcion(desc);
        setCargandoClima(false);
      })
      .catch((err) => {
        console.log("Error API Clima", err);
        setClimaDescripcion("No disponible por el momento");
        setCargandoClima(false);
      });
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card} className="shadow-lg">
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

        {comuna && (
          <div
            className="mt-4 p-3 rounded"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              border: "1px solid #333",
            }}
          >
            <h5
              className="mb-2 text-muted"
              style={{ fontSize: "0.9rem", textTransform: "uppercase" }}
            >
              Estado del destino: {comuna}
            </h5>

            {cargandoClima ? (
              <p className="mb-0 text-white">
                📡 Consultando satélite meteorológico...
              </p>
            ) : temperatura ? (
              <div className="d-flex align-items-center justify-content-center gap-3">
                <div style={{ fontSize: "2.5rem" }}>🌡️</div>
                <div className="text-start">
                  <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                    {temperatura}°C
                  </div>
                  <div style={{ color: "#ccc", textTransform: "capitalize" }}>
                    {climaDescripcion}
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-muted mb-0">
                Información del clima no disponible.
              </p>
            )}

            <small className="d-block mt-2 text-muted fst-italic">
              &quot;Ideal para esperar tus vinilos escuchando música&quot;
            </small>
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

const styles: Record<string, CSSProperties> = {
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
