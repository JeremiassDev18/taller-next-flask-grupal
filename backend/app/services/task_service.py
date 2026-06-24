from app.db import get_connection


def get_all_tasks():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT id, title, description, status FROM tasks ORDER BY id")
    rows = cursor.fetchall()
    cursor.close()
    conn.close()

    return [
        {"id": row[0], "title": row[1], "description": row[2], "status": row[3]}
        for row in rows
    ]

def get_task_by_id(id):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT id, title, description, status FROM tasks WHERE id = ?", (id,))
    row = cursor.fetchone()
    cursor.close()
    conn.close()
    if row:
        return {"id": row[0], "title": row[1], "description": row[2], "status": row[3]}

    return None

def create_task(data):
    title = data.get("title")
    description = data.get("description")
    status = data.get("status","PENDIENTE")
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO tasks (title, description, status) VALUES (%s, %s, %s) RETURNING id",
        (title, description, status)
    )
    task_id = cursor.fetchone()[0]
    coon.commit()
    cursor.close()
    conn.close()

    return {"id": task_id, "message": "Tarea registrada correctamente"}
