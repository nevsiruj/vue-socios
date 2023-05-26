// eslint-disable-next-line
/* eslint-disable */
const { createApp } = require('vue');
import App from './App.vue';
import router from './router';

// add this
import './index.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
