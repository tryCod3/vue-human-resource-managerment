import store from '@/store';
import router from '@/router';
import CONSTANT_STORE from '@/constants/store';
import { RouteRecordRaw, RouteLocation } from 'vue-router';

router.beforeEach(async (to: RouteLocation) => {
  const isLogin = store.getters[CONSTANT_STORE.USER.LOGIN.GET_WITH_NAMESPACED];

  if (!isLogin && to.name !== 'Login') {
    return { name: 'Login' };
  } else {
    const menus = store.getters[CONSTANT_STORE.APP.NAVBAR_DYNAMIC.GET_WITH_NAMESPACED];

    if (menus.length === 0) {
      store.dispatch(CONSTANT_STORE.APP.NAVBAR_DYNAMIC.SET_WITH_NAMESPACED, ['employee']);
      const dymamicRouter = store.getters[CONSTANT_STORE.APP.NAVBAR_DYNAMIC.GET_WITH_NAMESPACED];
      dymamicRouter.forEach((route: RouteRecordRaw) => {
        router.addRoute(route);
      });
    }
    return true;
  }
});
