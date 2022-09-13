import { RouteRecordRaw } from 'vue-router';
import { ACCOUNT_ROLE } from './../constants/role';

const routers: RouteRecordRaw[] = [
  {
    path: '/',
    component: null,
    redirect: '/dashboard',
    meta: {
      roles: [ACCOUNT_ROLE.ADMIN, ACCOUNT_ROLE.EMPLOYEE],
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: null,
        meta: {
          title: 'dashboard',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN, ACCOUNT_ROLE.EMPLOYEE],
        },
        children: [],
      },
    ],
  },
  {
    path: '/company',
    component: null,
    redirect: '/company/list',
    meta: {
      roles: [ACCOUNT_ROLE.ADMIN],
    },
    children: [
      {
        path: 'create',
        name: 'Company-Create',
        component: null,
        meta: {
          title: 'create',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN],
        },
        children: [],
      },
      {
        path: 'list',
        name: 'Company-List',
        component: null,
        meta: {
          title: 'list',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN],
        },
        children: [
          {
            path: 'edit/:id',
            name: 'Company-List-Edit',
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
    component: null,
    redirect: '/employee/index',
    meta: {
      roles: [ACCOUNT_ROLE.ADMIN, ACCOUNT_ROLE.EMPLOYEE],
    },
    children: [
      {
        path: 'index',
        name: 'Employee-MySeft',
        component: null,
        meta: {
          title: 'employee',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN, ACCOUNT_ROLE.EMPLOYEE],
        },
        children: [],
      },
      {
        path: 'create',
        name: 'Employee-Create',
        component: null,
        meta: {
          title: 'create',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN],
        },
        children: [],
      },
      {
        path: 'list',
        name: 'Employee-List',
        component: null,
        meta: {
          title: 'list',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN],
        },
        children: [
          {
            path: 'edit/:id',
            name: 'Employee-List-Edit',
            component: null,
            meta: {
              hidden: true,
              roles: [ACCOUNT_ROLE.ADMIN],
            },
            children: [],
          },
          {
            path: 'profile/:id',
            name: 'Employee-List-Profile',
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
    component: null,
    redirect: '/department/list',
    meta: {
      roles: [ACCOUNT_ROLE.ADMIN],
    },
    children: [
      {
        path: 'create',
        name: 'Department-Create',
        component: null,
        meta: {
          title: 'create',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN],
        },
        children: [],
      },
      {
        path: 'list',
        name: 'Department-List',
        component: null,
        meta: {
          title: 'list',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN],
        },
        children: [
          {
            path: 'edit/:id',
            name: 'Department-List-Edit',
            component: null,
            meta: {
              hidden: true,
              roles: [ACCOUNT_ROLE.ADMIN],
            },
            children: [],
          },
          {
            path: 'profile/:id',
            name: 'Department-List-Profile',
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
    component: null,
    redirect: '/permission/index',
    meta: {
      roles: [ACCOUNT_ROLE.ADMIN],
    },
    children: [
      {
        path: 'index',
        name: 'Permission',
        component: null,
        meta: {
          title: 'permission',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN],
        },
        children: [],
      },
    ],
  },
];

export default routers;
