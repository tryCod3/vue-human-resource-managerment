import privateRouters from '@/router/private';
import publicRouters from '@/router/public';
import CONSTANT_STORE from '@/constants/store';
import { ACCOUNT_ROLE } from '@/constants/role';
import { RouteRecordRaw } from 'vue-router';
import { typeDevice } from './index';

const createRouterForRoles = (routers: RouteRecordRaw[], roles: string[]) => {
  const routersChildren = [];

  for (const router of routers)
    if (router.meta?.roles && roles.some(role => router.meta?.roles?.includes(role))) {
      const cloneRouter = { ...router };
      if (cloneRouter.children) cloneRouter.children = createRouterForRoles(cloneRouter.children, roles);

      routersChildren.push(cloneRouter);
    }

  return routersChildren;
};

const actions = {
  [CONSTANT_STORE.APP.NAVBAR_DYNAMIC.SET] (data: any, roles: string[]) {
    const { commit } = data;
    let routerForRoles = [];

    if (roles.includes(ACCOUNT_ROLE.ADMIN)) routerForRoles = privateRouters;
    else routerForRoles = createRouterForRoles(privateRouters, roles);

    commit(CONSTANT_STORE.APP.NAVBAR_DYNAMIC.SET, publicRouters.concat(routerForRoles));
  },
  [CONSTANT_STORE.APP.RESET.SET] (data: any) {
    const { commit } = data;
    commit(CONSTANT_STORE.APP.RESET.SET);
  },
  [CONSTANT_STORE.APP.TOGGLE_SIDEBAR.SET] (data: any, toggleSidebar: boolean) {
    const { commit } = data;
    commit(CONSTANT_STORE.APP.TOGGLE_SIDEBAR.SET, toggleSidebar);
  },
  [CONSTANT_STORE.APP.DEVICE.SET] (data: any, device: typeDevice) {
    const { commit } = data;
    commit(CONSTANT_STORE.APP.DEVICE.SET, device);
  },
};

export default actions;
