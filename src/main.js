// eslint-disable-next-line
/* eslint-disable */
const { createApp } = require('vue');
import App from './App.vue';
import router from './router';
import 'tailwindcss/tailwind.css';

// add this
import './index.css';
import 'flowbite';

const app = createApp(App);
app.use(router);
app.mount('#app');
