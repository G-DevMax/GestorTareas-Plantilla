<template>
    <div>
        <div class="container text-center">
        <h1>Lista de Tareas</h1>
        <button @click="fetchTasks" class="botonCargar">Cargar Tareas</button>
        <div v-if="tasks.length > 0">
            <div v-for="task in tasks" :key="task.id">
                <div class="add-task-container">
                    <h5 :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">{{ task.todo }}</h5>
                    <span style="font-weight: bold;">{{ task.completed ? 'Completada' : 'Pendiente' }}</span><br>
                    <button @click="toggleTaskCompletion(task)" class="btn btn-success">
                        {{ task.completed ? 'Desmarcar' : 'Completar' }}
                    </button>
                    <button @click="deleteTask(task)" class="btn btn-danger">Eliminar</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: "TaskList",
    data() {
        return {
            tasks: [], // Almacenamiento local de las tareas traídas de la API
        };
    },
    methods: {
        // Llamada para obtener las tareas desde la API externa
        fetchTasks() {
            // Aquí deberían realizar la solicitud a la API usando axios o fetch.
            // La URL que usaremos es: https://dummyjson.com/todos

            // Sugerencia: Intentar implementarlo con axios o fetch
            axios.get("https:dummyjson.com/todos")
            .then(response => {
                this.tasks = response.data.todos;
                })
            .catch(error => {
                console.error(error);
            });
        },

        // Cambiar el estado de una tarea (completada/no completada)
        toggleTaskCompletion(task) {
            task.completed = !task.completed;
        },

        // Eliminar la tarea seleccionada
        deleteTask(task) {
            this.tasks = this.tasks.filter((t) => t.id !== task.id);
        },
    },
};
</script>

<style scoped>
h1 {
    color: #60ff00;
    text-shadow: 0px 5px 4px black;
}

h5 {
    font-weight: 700;
    overflow-wrap: break-word;
    max-height: 3em;
    overflow: hidden;
}

.botonCargar {
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    font-weight: bold;
    transition: 0.3s;
}

.botonCargar:hover {
    background-color: #60ff00;
    color: #000;
}

.btn {
    margin: 5px;
}

.completed {
    text-decoration: line-through;
    color: gray;
}

.input-group {
    display: flex;
    margin-bottom: 10px;
}

.task-list {
    margin-top: 20px;
}

.task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
}
</style>