import { createRouter, createWebHistory } from 'vue-router';
import publicRouters from './public';

export default createRouter({
  history: createWebHistory('/'),
  routes: publicRouters,
});
