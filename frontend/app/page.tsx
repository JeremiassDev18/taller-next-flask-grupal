import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f0f4ff 0%, #e5e7eb 100%)",
        fontFamily: "system-ui, -apple-system, sans-serif",
        padding: "20px",
      }}
    >
      <section
        style={{
          maxWidth: "650px",
          width: "100%",
          background: "white",
          padding: "56px 40px",
          borderRadius: "24px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Elemento decorativo sutil en el fondo de la tarjeta */}
        <div
          style={{
            position: "absolute",
            top: "-50px",
            right: "-50px",
            width: "150px",
            height: "150px",
            background: "#3b82f6",
            opacity: "0.05",
            borderRadius: "50%",
          }}
        ></div>

        {/* Etiqueta / Badge superior */}
        <span
          style={{
            display: "inline-block",
            background: "#eff6ff",
            color: "#1d4ed8",
            padding: "8px 20px",
            borderRadius: "9999px",
            fontSize: "14px",
            fontWeight: "700",
            marginBottom: "24px",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}
        >
           Universidad de Guayaquil
        </span>

        {/* Título principal con jerarquía visual */}
        <h1
          style={{
            color: "#111827",
            fontSize: "46px",
            fontWeight: "800",
            margin: "0 0 16px",
            lineHeight: "1.1",
            letterSpacing: "-1px",
          }}
        >
          Gestión de Tareas <br />
          <span style={{ color: "#2563eb" }}>Académicas</span>
        </h1>

        {/* Subtítulo descriptivo */}
        <p
          style={{
            color: "#4b5563",
            fontSize: "18px",
            lineHeight: "1.6",
            marginBottom: "40px",
            padding: "0 20px",
          }}
        >
          Plataforma centralizada para organizar, registrar y dar seguimiento al
          estado de los requerimientos y equipos de laboratorio.
        </p>

        {/* Botón de llamada a la acción (CTA) */}
        <Link
          href="/tasks"
          style={{
            display: "inline-block",
            background: "#2563eb",
            color: "white",
            padding: "16px 40px",
            borderRadius: "14px",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "18px",
            boxShadow: "0 8px 20px rgba(37, 99, 235, 0.25)",
            transition: "transform 0.2s, boxShadow 0.2s",
          }}
        >
          Comenzar ahora 
        </Link>
      </section>

      {/* Footer del desarrollador */}
      <footer
        style={{
          marginTop: "48px",
          color: "#6b7280",
          fontSize: "14px",
          textAlign: "center",
          fontWeight: "500",
        }}
      >
        <p>Proyecto desarrollado por Grupo 4</p>
      </footer>
    </main>
  );
}