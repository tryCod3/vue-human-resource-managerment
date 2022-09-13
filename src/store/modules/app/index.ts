import CONSTANT_STORE from '@/constants/store';
import { RouteRecordRaw } from 'vue-router';
import actions from './actions';
import mutations from './mutations';

export interface IAppState {
  dynamicNavbar: RouteRecordRaw[];
}

const state: IAppState = {
  dynamicNavbar: [],
};

const getters = {
  [CONSTANT_STORE.APP.NAVBAR_DYNAMIC.GET] (state: IAppState) {
    return state.dynamicNavbar;
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
