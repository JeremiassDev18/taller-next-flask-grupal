from flask import Blueprint, jsonify, request
from app.services.task_service import get_all_tasks, create_task, get_task_by_id

task_bp = Blueprint("task_bp", __name__)


@task_bp.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Backend Flask funcionando correctamente"})


@task_bp.route("/tasks", methods=["GET"])
def list_tasks():
    tasks = get_all_tasks()
    return jsonify(tasks)

@task_bp.route("/tasks/<int:id>", methods=["GET"])
def get_task(id):
    task = get_task_by_id(id)
    if task:
        return jsonify(task)
    return jsonify({"error": "Tarea no encontrada"}), 404


@task_bp.route("/tasks", methods=["POST"])
def register_task():
    data = request.get_json()
    if not data or not data.get("title"):
        return jsonify({"error": "El campo title es obligatorio"}), 400

    result = create_task(data)
    return jsonify(result), 201