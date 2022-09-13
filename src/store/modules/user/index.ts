import actions from './actions';
import mutations from './mutations';
import CONSTANT_STORE from '@/constants/store';

export interface IProfileState {
  name: string;
  token: string;
  roles: string[];
}

export interface IUserState {
  isLogin: boolean;
  profile: IProfileState;
}

const accountInLocal = localStorage.getItem('author');
let account: IProfileState = {
  name: '',
  token: '',
  roles: [],
};

if (accountInLocal) account = JSON.parse(accountInLocal);

const state: IUserState = {
  isLogin: accountInLocal ? true : false,
  profile: account,
};

const getters = {
  [CONSTANT_STORE.USER.LOGIN.GET] (state: IUserState) {
    return state.isLogin;
  },
  [CONSTANT_STORE.USER.PROFILE.GET] (state: IUserState) {
    return state.profile;
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
