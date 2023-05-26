import { createRouter, createWebHistory } from 'vue-router';
import ListSocio from './components/socios/ListSocio.vue';
import ListRecibo from './components/recibos/ListRecibo.vue';
import FormSocio from './components/socios/FormSocio.vue';
import FormRecibo from './components/recibos/FormRecibo.vue';
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
  {
    path: '/form-recibo/:dni',
    component: FormRecibo,
  },
  {
    path: '/list-recibo',
    component: ListRecibo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
