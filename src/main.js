import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// library
import { createPinia } from 'pinia';
import axios from 'axios';

// helpers
import MESSAGES_CONFIG from '@//helpers/message.config';

// scss
import './assets/stylesheet/font.scss';
import './assets/stylesheet/layout.scss';
import './assets/stylesheet/normalize.scss';

const pinia = createPinia();
const app = createApp(App);

// helpers
import api from '@/helpers/api';

// global defaults setting
// Common Messages
app.config.globalProperties.$MESSAGE = MESSAGES_CONFIG;
// Axios
app.config.globalProperties.$AXIOS = axios;
// API
app.config.globalProperties.$API = api;

app.use(pinia).use(router).mount('#app');
