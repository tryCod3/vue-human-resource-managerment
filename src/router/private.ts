import { ACCOUNT_ROLE } from './../constants/role';

const routers = [
  {
    path: '/',
    component: '',
    redirect: '/dashboard',
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: '',
        meta: {
          title: 'dashboard',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN, ACCOUNT_ROLE.EMPLOYEE],
        },
      },
    ],
  },
  {
    path: '/company',
    component: '',
    redirect: '/company/list',
    meta: {
      roles: [ACCOUNT_ROLE.ADMIN],
      requiresAuth: true,
    },
    children: [
      {
        path: 'create',
        name: 'Company-Create',
        component: '',
        meta: {
          title: 'create',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN],
        },
      },
      {
        path: 'list',
        name: 'Company-List',
        component: '',
        meta: {
          title: 'list',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN],
        },
        children: [
          {
            path: 'edit/:id',
            name: 'Company-List-Edit',
            component: '',
            meta: {
              hidden: true,
            },
          },
          {
            path: 'profile/:id',
            name: 'Company-List-Profile',
            component: '',
            meta: {
              hidden: true,
              requiresAuth: true,
            },
          },
        ],
      },
    ],
  },
  {
    path: '/employee',
    component: '',
    redirect: '/employee/list',
    meta: {
      roles: [ACCOUNT_ROLE.ADMIN, ACCOUNT_ROLE.EMPLOYEE],
      requiresAuth: true,
    },
    children: [
      {
        path: 'index',
        name: 'Employee-MySeft',
        component: '',
        meta: {
          title: 'employee',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN, ACCOUNT_ROLE.EMPLOYEE],
        },
      },
      {
        path: 'create',
        name: 'Employee-Create',
        component: '',
        meta: {
          title: 'create',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN],
        },
      },
      {
        path: 'list',
        name: 'Employee-List',
        component: '',
        meta: {
          title: 'list',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN],
        },
        children: [
          {
            path: 'edit/:id',
            name: 'Employee-List-Edit',
            component: '',
            meta: {
              hidden: true,
            },
          },
          {
            path: 'profile/:id',
            name: 'Employee-List-Profile',
            component: '',
            meta: {
              hidden: true,
            },
          },
        ],
      },
    ],
  },
  {
    path: '/department',
    component: '',
    redirect: '/department/list',
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: 'create',
        name: 'Department-Create',
        component: '',
        meta: {
          title: 'create',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN],
        },
      },
      {
        path: 'list',
        name: 'Department-List',
        component: '',
        meta: {
          title: 'list',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN],
        },
        children: [
          {
            path: 'edit/:id',
            name: 'Department-List-Edit',
            component: '',
            meta: {
              hidden: true,
            },
          },
          {
            path: 'profile/:id',
            name: 'Department-List-Profile',
            component: '',
            meta: {
              hidden: true,
            },
          },
        ],
      },
    ],
  },
  {
    path: '/permission',
    component: '',
    redirect: '/permission/index',
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: 'index',
        name: 'Permission',
        component: '',
        meta: {
          title: 'permission',
          icon: '',
          roles: [ACCOUNT_ROLE.ADMIN],
        },
      },
    ],
  },
];

export default routers;
