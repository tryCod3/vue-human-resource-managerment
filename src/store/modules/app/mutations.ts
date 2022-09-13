import { IAppState } from './index';
import CONSTANT_STORE from '@/constants/store';
import { RouteRecordRaw } from 'vue-router';

const mutations = {
  [CONSTANT_STORE.APP.NAVBAR_DYNAMIC.SET] (state: IAppState, routers: RouteRecordRaw[]) {
    state.dynamicNavbar = routers;
  },
  [CONSTANT_STORE.APP.RESET.SET] (state: IAppState) {
    state.dynamicNavbar = [];
  },
};

export default mutations;
