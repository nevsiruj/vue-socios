import { createRouter, createWebHistory } from 'vue-router';
import ListSocio from './components/socios/ListSocio.vue';
import FormSocio from './components/socios/FormSocio.vue';
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
  {
    path: '/form-socio',
    component: FormSocio,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
