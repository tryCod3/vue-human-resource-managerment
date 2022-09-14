import store from '@/store';
import router from '@/router';
import CONSTANT_STORE from '@/constants/store';
import { RouteRecordRaw, RouteLocation } from 'vue-router';
import { IProfileState } from '@/store/modules/user';

router.beforeEach(async (to: RouteLocation) => {
  const isLogin = store.getters[CONSTANT_STORE.USER.LOGIN.GET_WITH_NAMESPACED];

  if (!isLogin && to.name !== 'Login') {
    return { name: 'Login' };
  } else if (isLogin) {
    // if has login . show dashboard view
    if (to.name === 'Login') return { path: '/' };

    const menus = store.getters[CONSTANT_STORE.APP.NAVBAR_DYNAMIC.GET_WITH_NAMESPACED];
    if (menus.length === 0) {
      // get account
      const account: IProfileState = store.getters[CONSTANT_STORE.USER.PROFILE.GET_WITH_NAMESPACED];
      // get dynamic navbar
      store.dispatch(CONSTANT_STORE.APP.NAVBAR_DYNAMIC.SET_WITH_NAMESPACED, account.roles.concat(['admin']));
      const dymamicRouter = store.getters[CONSTANT_STORE.APP.NAVBAR_DYNAMIC.GET_WITH_NAMESPACED];
      // add router
      dymamicRouter.forEach((route: RouteRecordRaw) => {
        router.addRoute(route);
      });
    }
  }
});
