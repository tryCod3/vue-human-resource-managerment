import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import LoginView from '@/views/Login/index.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/login', component: LoginView },
];

export default createRouter({
  history: createWebHistory('/'),
  routes,
});
