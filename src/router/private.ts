import { RouteRecordRaw } from 'vue-router';
import { ACCOUNT_ROLE } from './../constants/role';
import Layout from '@/components/layout/index.vue';

const routers: RouteRecordRaw[] = [
  {
    path: '/company',
    component: Layout,
    redirect: '/company/list',
    name: 'Company',
    meta: {
      title: 'Company',
      roles: [ACCOUNT_ROLE.ADMIN],
    },
    children: [
      {
        path: 'create',
        name: 'CreateCompany',
        component: import('@/views/company/components/create/index.vue'),
        meta: {
          title: 'Create',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN],
        },
        children: [],
      },
      {
        path: 'list',
        component: () => import('@/views/company/components/list/index.vue'),
        name: 'ListCompany',
        meta: {
          title: 'List',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN],
        },
        children: [
          {
            path: 'edit/:id',
            name: 'Edit-List-Company',
            component: null,
            meta: {
              hidden: true,
              roles: [ACCOUNT_ROLE.ADMIN],
            },
            children: [],
          },
          {
            path: 'profile/:id',
            name: 'Company-List-Profile',
            component: null,
            meta: {
              hidden: true,
              roles: [ACCOUNT_ROLE.ADMIN],
            },
            children: [],
          },
        ],
      },
    ],
  },
  {
    path: '/employee',
    component: Layout,
    redirect: '/employee/index',
    name: 'Employee',
    meta: {
      title: 'Employee',
      roles: [ACCOUNT_ROLE.ADMIN, ACCOUNT_ROLE.EMPLOYEE],
      isRoot: true,
    },
    children: [
      {
        path: 'index',
        name: 'ProfileEmployee',
        component: () => import('@/views/employee/components/profile/index.vue'),
        meta: {
          title: 'Profile',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN, ACCOUNT_ROLE.EMPLOYEE],
        },
        children: [],
      },
      {
        path: 'create',
        name: 'CreateEmployee',
        component: () => import('@/views/employee/components/create/index.vue'),
        meta: {
          title: 'Create',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN],
        },
        children: [],
      },
      {
        path: 'list',
        name: 'ListEmployee',
        component: () => import('@/views/employee/components/list/index.vue'),
        meta: {
          title: 'List',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN],
        },
        children: [
          {
            path: 'edit/:id',
            name: 'Edit-List-Employee',
            component: null,
            meta: {
              hidden: true,
              roles: [ACCOUNT_ROLE.ADMIN],
            },
            children: [],
          },
          {
            path: 'profile/:id',
            name: 'Profile-List-Employee',
            component: null,
            meta: {
              hidden: true,
              roles: [ACCOUNT_ROLE.ADMIN],
            },
            children: [],
          },
        ],
      },
    ],
  },
  {
    path: '/department',
    component: Layout,
    redirect: '/department/list',
    name: 'Department',
    meta: {
      title: 'Department',
      roles: [ACCOUNT_ROLE.ADMIN],
    },
    children: [
      {
        path: 'create',
        name: 'CreateDepartment',
        component: () => import('@/views/department/components/create/index.vue'),
        meta: {
          title: 'Create',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN],
        },
        children: [],
      },
      {
        path: 'list',
        name: 'ListDepartment',
        component: () => import('@/views/department/components/list/index.vue'),
        meta: {
          title: 'List',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN],
        },
        children: [
          {
            path: 'edit/:id',
            name: 'Edit-List-Department',
            component: null,
            meta: {
              hidden: true,
              roles: [ACCOUNT_ROLE.ADMIN],
            },
            children: [],
          },
          {
            path: 'profile/:id',
            name: 'Profile-List-Department',
            component: null,
            meta: {
              hidden: true,
              roles: [ACCOUNT_ROLE.ADMIN],
            },
            children: [],
          },
        ],
      },
    ],
  },
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    name: 'Permission',
    meta: {
      roles: [ACCOUNT_ROLE.ADMIN],
    },
    children: [
      {
        path: 'index',
        name: 'PermissionIndex',
        component: () => import('@/views/permission/index.vue'),
        meta: {
          title: 'Permission',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN],
        },
        children: [],
      },
    ],
  },
];

export default routers;
