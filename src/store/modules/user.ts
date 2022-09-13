import CONSTANT_STORE from '@/constants/store';

export interface IProfileState {
  name: string;
  token: string;
}

export interface IUserState {
  isLogin: boolean;
  profile: IProfileState;
}

const state: IUserState = {
  isLogin: false,
  profile: {
    name: '',
    token: '',
  },
};

const getters = {
  [CONSTANT_STORE.USER.LOGIN.GET] (state: IUserState) {
    return state.isLogin;
  },
  [CONSTANT_STORE.USER.PROFILE.GET] (state: IUserState) {
    return state.profile;
  },
};

const mutations = {
  [CONSTANT_STORE.USER.LOGIN.SET] (state: IUserState, payload: boolean) {
    state.isLogin = payload;
  },
  [CONSTANT_STORE.USER.PROFILE.SET] (state: IUserState, payload: IProfileState) {
    state.profile = { ...payload };
  },
};

const actions = {
  [CONSTANT_STORE.USER.LOGIN.SET] (data: any, payload: boolean) {
    data.commit(CONSTANT_STORE.USER.LOGIN.SET, payload);
  },
  [CONSTANT_STORE.USER.PROFILE.SET] (data: any, payload: IProfileState) {
    data.commit(CONSTANT_STORE.USER.PROFILE.SET, payload);
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
