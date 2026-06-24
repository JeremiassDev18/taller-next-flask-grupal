from flask import Blueprint, jsonify, request
from app.services.task_service import (
    get_all_tasks,
    create_task,
    get_task_by_id,
    update_task_status,
    delete_task,
)

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


@task_bp.route("/tasks/<int:id>/status", methods=["PATCH"])
def update_status(id):
    data = request.get_json()
    if not data or not data.get("status"):
        return jsonify({"error": "El campo status es obligatorio"}), 400
    
    result = update_task_status(id, data.get("status"))
    if result:
        return jsonify(result), 200
    return jsonify({"error": "Tarea no encontrada"}), 404


@task_bp.route("/tasks/<int:id>", methods=["DELETE"])
def remove_task(id):
    result = delete_task(id)
    if result:
        return jsonify(result), 200
    return jsonify({"error": "Tarea no encontrada"}), 404
