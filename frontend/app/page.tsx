export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f6fb",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <section
        style={{
          background: "white",
          padding: "45px",
          borderRadius: "18px",
          maxWidth: "720px",
          width: "100%",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#3b82f6",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Desarrollo de Aplicaciones Web Avanzadas
        </p>

        <h1
          style={{
            fontSize: "42px",
            marginBottom: "18px",
            color: "#1f2937",
          }}
        >
          App Académica de Tareas
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#4b5563",
            lineHeight: "1.6",
            marginBottom: "30px",
          }}
        >
          Plataforma académica para registrar, consultar y dar seguimiento a
          tareas usando Next.js, Flask, PostgreSQL y Docker.
        </p>

        <a
          href="/tasks"
          style={{
            display: "inline-block",
            background: "#2563eb",
            color: "white",
            padding: "14px 24px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Ver tareas académicas
        </a>
      </section>
    </main>
  );
}