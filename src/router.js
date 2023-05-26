import { createRouter, createWebHistory } from 'vue-router';
import ListSocio from './components/socios/ListSocio.vue';
import Home from './components/Home.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/list-socio',
    component: ListSocio,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
