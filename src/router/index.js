import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CombinedView from '@/views/CombinedView';
import AddTask from '@/components/AddTask.vue';
import TaskList from '@/components/TaskList.vue';
// Importa los otros componentes en esta sección

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addtask',
    name: 'AddTask', // Ruta para añadir tareas
    component: AddTask // Aquí se debe cargar el componente AddTask
    // Implementa la lógica para añadir nuevas tareas.
  },
  { // Las demás rutas deben ir aquí también
  path: '/CombinedView',
    name: 'CombinedView',
    component: CombinedView
  },
  {
    path: '/TaskList',
    name: 'TaskList',
    component: TaskList
  }, 
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
