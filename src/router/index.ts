import { createRouter, createWebHistory } from 'vue-router';
import publicRouters from './public';

const router = createRouter({
  history: createWebHistory('/'),
  routes: publicRouters,
});

export default router;
