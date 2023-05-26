import { createRouter, createWebHistory } from 'vue-router';
import ListSocio from './components/socios/ListSocio.vue';

const routes = [
  {
    path: '/list-socio',
    component: ListSocio
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
