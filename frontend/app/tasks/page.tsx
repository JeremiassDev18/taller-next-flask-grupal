import TaskForm from "../../components/TaskForm";
import TaskActions from "../../components/TaskActions";

type Task = {
  id: number;
  title: string;
  description: string;
  status: string;
};

export default async function TasksPage() {
  let tasks: Task[] = [];

  try {
    const res = await fetch("http://backend:5000/tasks", { cache: "no-store" });
    tasks = await res.json();
  } catch (error) {
    console.error("Error al obtener tareas:", error);
  }

  const total = tasks.length;
  const pendientes = tasks.filter((t) => t.status === "PENDIENTE").length;
  const enProceso = tasks.filter((t) => t.status === "EN PROCESO").length;

  return (
    <main style={{ minHeight: "100vh", background: "#f4f6fb", fontFamily: "Arial, sans-serif", padding: "40px" }}>
      <section style={{ maxWidth: "1100px", margin: "0 auto", background: "white", padding: "35px", borderRadius: "18px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
        <a href="/" style={{ color: "#2563eb", textDecoration: "none", fontWeight: "bold" }}>
          ← Volver al inicio
        </a>

        <div style={{ marginTop: "25px", marginBottom: "20px" }}>
          <p style={{ color: "#2563eb", fontWeight: "bold", marginBottom: "5px" }}>Universidad de Guayaquil</p>
          <p style={{ color: "#6b7280", marginBottom: "15px" }}>Facultad de Ciencias Matemáticas y Físicas</p>
          <h1 style={{ color: "#1f2937", fontSize: "34px", margin: 0 }}>Listado de tareas académicas</h1>
        </div>

        <p style={{ color: "#6b7280", marginBottom: "25px" }}>
          Estas tareas son obtenidas desde el Web Service desarrollado en Flask.
        </p>

        <TaskForm />

        <div style={{ display: "flex", gap: "15px", marginBottom: "25px", flexWrap: "wrap" }}>
          <div style={{ background: "#dbeafe", padding: "15px", borderRadius: "12px", minWidth: "180px" }}>
            <h3>Total tareas</h3>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>{total}</p>
          </div>
          <div style={{ background: "#fef3c7", padding: "15px", borderRadius: "12px", minWidth: "180px" }}>
            <h3>Pendientes</h3>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>{pendientes}</p>
          </div>
          <div style={{ background: "#dcfce7", padding: "15px", borderRadius: "12px", minWidth: "180px" }}>
            <h3>En proceso</h3>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>{enProceso}</p>
          </div>
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse", borderRadius: "12px" }}>
          <thead>
            <tr style={{ background: "#2563eb", color: "white" }}>
              <th style={{ padding: "14px", textAlign: "left" }}>ID</th>
              <th style={{ padding: "14px", textAlign: "left" }}>Título</th>
              <th style={{ padding: "14px", textAlign: "left" }}>Descripción</th>
              <th style={{ padding: "14px", textAlign: "left" }}>Estado</th>
              <th style={{ padding: "14px", textAlign: "left" }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} style={{ borderBottom: "1px solid #e5e7eb" }}>
                <td style={{ padding: "14px" }}>{task.id}</td>
                <td style={{ padding: "14px", fontWeight: "bold" }}>{task.title}</td>
                <td style={{ padding: "14px" }}>{task.description}</td>
                <td style={{ padding: "14px" }}>
                  <span style={{
                    padding: "6px 12px",
                    borderRadius: "20px",
                    background: task.status === "EN PROCESO" ? "#dcfce7" : "#fef3c7",
                    color: task.status === "EN PROCESO" ? "#166534" : "#92400e",
                    fontWeight: "bold",
                    fontSize: "13px",
                  }}>
                    {task.status}
                  </span>
                </td>
                <td style={{ padding: "14px" }}>
                  <TaskActions id={task.id} currentStatus={task.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
