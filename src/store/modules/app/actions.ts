import privateRouters from '@/router/private';
import CONSTANT_STORE from '@/constants/store';
import { ACCOUNT_ROLE } from '@/constants/role';
import { RouteRecordRaw } from 'vue-router';

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

    if (roles.includes(ACCOUNT_ROLE.ADMIN)) routerForRoles = [...privateRouters];
    else routerForRoles = createRouterForRoles(privateRouters, roles);

    commit(CONSTANT_STORE.APP.NAVBAR_DYNAMIC.SET, routerForRoles);
  },
  [CONSTANT_STORE.APP.RESET.SET] (data: any) {
    const { commit } = data;
    commit(CONSTANT_STORE.APP.RESET.SET);
  },
};

export default actions;
