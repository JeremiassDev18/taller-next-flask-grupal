# Proyecto Grupal
# 🚀 Gestión de Tareas Universitarias - Laboratorio

Este es un sistema web modular y estructurado diseñado para la gestión y seguimiento de tareas académicas y de laboratorio. El proyecto está empaquetado e interconectado mediante **Docker Contenedores**, lo que garantiza que todo el ecosistema (Frontend, Backend y Base de Datos) pueda ejecutarse en cualquier computadora con un solo comando, sin configuraciones locales complejas.

## 🛠️ Tecnologías Utilizadas

* **Frontend:** Next.js (React) con TypeScript y App Router.
* **Backend:** Python con Flask, estructurado mediante Factorías y Blueprints nativos.
* **Base de Datos:** PostgreSQL (Base de datos relacional).
* **Orquestación:** Docker y Docker Compose.

---

## 📐 Arquitectura por Contenedores

El proyecto está completamente aislado en tres contenedores independientes que se comunican dentro de una red interna privada de Docker. No necesitas tener instalado Python, Node.js ni PostgreSQL en tu sistema operativo principal.

* **`db` (PostgreSQL):** Almacena de forma persistente las tareas. Carga automáticamente el script `database/init.sql` para crear las tablas e insertar los datos iniciales.
* **`backend` (Flask):** Expone la API REST que procesa las peticiones. Se conecta a la base de datos usando el nombre de servicio interno `db`.
* **`frontend` (Next.js):** Interfaz de usuario interactiva que consume los servicios de Flask.

---

## 🚀 Instalación y Ejecución Rápida

Sigue estos pasos para clonar el repositorio y levantar todo el entorno:

### 1. Clonar el repositorio
Asegúrate de traer la última versión de la rama principal:
```bash
git clone [https://github.com/TU_USUARIO/taller-next-flask-grupal.git](https://github.com/TU_USUARIO/taller-next-flask-grupal.git)
cd taller-next-flask-grupal
