import { ACCOUNT_ROLE } from '@/constants/role';
import { RouteRecordRaw } from 'vue-router';
import Layout from '@/components/layout/index.vue';

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
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: {
      roles: [ACCOUNT_ROLE.ADMIN, ACCOUNT_ROLE.EMPLOYEE],
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: import('@/views/dashboard/index.vue'),
        meta: {
          title: 'dashboard',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN, ACCOUNT_ROLE.EMPLOYEE],
        },
        children: [],
      },
    ],
  },
];

export default routers;
