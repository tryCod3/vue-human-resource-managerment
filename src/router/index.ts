import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login/index.vue';
import Home from '@/views/Home/index.vue';

const routes = [
  //   {
  //     path: '/',
  //     redirect: {
  //       name: "login"
  //     }
  // },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/',
    name: 'home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

router.beforeEach(to => {
  const t = localStorage.getItem('author');
  // if(t) t = JSON.parse(t)
  // console.log(t)
  if (t && to.fullPath === '/login') 
return { name: 'home' };
  else 
return true;
});

export default router;
