import { RouteRecordRaw } from 'vue-router';

const routers: RouteRecordRaw[] = [
  {
    path: '/404',
    name: 'Error',
    component: () => import(/* webpackChunkName: "404-router*/ '@/views/404/index.vue'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login-router*/ '@/views/login/index.vue'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register-router*/ '@/views/register/index.vue'),
    meta: {
      hidden: true,
    },
  },
];

export default routers;
