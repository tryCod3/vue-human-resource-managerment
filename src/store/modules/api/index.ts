import CONSTANT_STORE from '@/constants/store';
import actions from './actions';
import mutations from './mutations';

export interface IFecthState {
  hasFetch: boolean;
  success: boolean;
  message?: string;
}

const state: IFecthState = {
  hasFetch: false,
  success: false,
  message: '',
};

const getters = {
  [CONSTANT_STORE.API.FECTH.STATE.GET] (state: IFecthState) {
    return state;
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
