const { createApp } = require('vue');
import App from './App.vue';
import router from './router';
// import 'flowbite';
// import 'tailwindcss/tailwind.css';

// add this
// import './index.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
