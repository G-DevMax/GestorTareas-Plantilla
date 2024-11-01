<template>
    <div class="add-task-container">
        <h1>Lista de Tareas</h1>
        <!-- Esta seccion es una combinación de las dos vistas anteriores -->
        <div class="input-group">
            <input 
                v-model="newTask" 
                @keyup.enter="addTask" 
                placeholder="Añadir nueva tarea" 
                class="task-input"
            />
            <button @click="addTask" class="add-button">Añadir</button>
        </div>
        
        <div v-on:load="fetchTasks" v-if="tasks.length > 0" class="task-list">
            <div v-for="task in tasks" :key="task.id" class="task-item">
                <span :class="{ completed: task.completed }">{{ task.todo }}</span>
                <div>
                    <button @click="toggleTaskCompletion(task)" class="btn btn-success">
                        {{ task.completed ? 'Desmarcar' : 'Completar' }}
                    </button>
                    <button @click="deleteTask(task)" class="btn btn-danger">Eliminar</button>
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
            tasks: [],
            newTask: ""
        };
    },
    mounted() { // "montar" sirve para poder llamar a una función, en este caso se llama a la función de la carga de las tareas que dispone la API
        this.fetchTasks();
    },
    methods: {
        fetchTasks() {
            axios.get("https:dummyjson.com/todos")
            .then(response => {
                this.tasks = response.data.todos;
                })
            .catch(error => {
                console.error(error);
            });
        },

        toggleTaskCompletion(task) {
            task.completed = !task.completed;
        },

        deleteTask(task) {
            this.tasks = this.tasks.filter((t) => t.id !== task.id);
        },
        addTask() {
            if (this.newTask.trim() === "") return;

            const newTask = {
                todo: this.newTask,
                completed: false,
                id: Date.now(), 
            };

            this.tasks.unshift(newTask);
            this.newTask = "";
        },
    },
};
</script>

<style scoped>
h1 {
    color: #60ff00;
    text-shadow: 0px 5px 4px black;
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