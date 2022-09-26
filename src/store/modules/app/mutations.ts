import { IAppState, typeDevice } from './index';
import CONSTANT_STORE from '@/constants/store';
import { RouteRecordRaw } from 'vue-router';

const mutations = {
  [CONSTANT_STORE.APP.NAVBAR_DYNAMIC.SET] (state: IAppState, routers: RouteRecordRaw[]) {
    state.dynamicNavbar = routers;
  },
  [CONSTANT_STORE.APP.RESET.SET] (state: IAppState) {
    state.dynamicNavbar = [];
  },
  [CONSTANT_STORE.APP.TOGGLE_SIDEBAR.SET] (state: IAppState, toggleSidebar: boolean) {
    state.toggleSidebar = toggleSidebar;
  },
  [CONSTANT_STORE.APP.DEVICE.SET] (state: IAppState, device: typeDevice) {
    state.device = device;
  },
};

export default mutations;
