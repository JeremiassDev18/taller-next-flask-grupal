"use client";

export default function TaskActions({ id, currentStatus }: { id: number; currentStatus: string }) {
  const nextStatus = currentStatus === "PENDIENTE" ? "EN PROCESO" : "COMPLETADO";

  const handleChangeStatus = async () => {
    await fetch(`http://localhost:5000/tasks/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: nextStatus }),
    });
    window.location.reload();
  };

  const handleDelete = async () => {
    if (!confirm("¿Seguro que deseas eliminar esta tarea?")) return;
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    window.location.reload();
  };

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      {currentStatus !== "COMPLETADO" && (
        <button
          onClick={handleChangeStatus}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "6px 12px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: "bold",
          }}
        >
          {nextStatus}
        </button>
      )}
      <button
        onClick={handleDelete}
        style={{
          background: "#ef4444",
          color: "white",
          border: "none",
          padding: "6px 12px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "13px",
          fontWeight: "bold",
        }}
      >
        Eliminar
      </button>
    </div>
  );
}