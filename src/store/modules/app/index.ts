import CONSTANT_STORE from '@/constants/store';
import { isMobie } from '@/utils/app';
import { RouteRecordRaw } from 'vue-router';
import actions from './actions';
import mutations from './mutations';

export const LAPTOP = 'laptop';
export const MOBILE = 'mobile';

export type typeDevice = 'laptop' | 'mobile';

export interface IAppState {
  dynamicNavbar: RouteRecordRaw[];
  toggleSidebar: boolean;
  device: typeDevice;
}

const state: IAppState = {
  dynamicNavbar: [],
  toggleSidebar: !isMobie(),
  device: isMobie() ? MOBILE : LAPTOP,
};

const getters = {
  [CONSTANT_STORE.APP.NAVBAR_DYNAMIC.GET] (state: IAppState) {
    return state.dynamicNavbar;
  },
  [CONSTANT_STORE.APP.TOGGLE_SIDEBAR.GET] (state: IAppState) {
    return state.toggleSidebar;
  },
  [CONSTANT_STORE.APP.DEVICE.GET] (state: IAppState) {
    return state.device;
  },
};

const store = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default store;
