import CONSTANT_STORE from '@/constants/store';
import store from '@/store';
import { IUserState, IProfileState } from './index';

const mutations = {
  [CONSTANT_STORE.USER.LOGIN.SET] (state: IUserState, payload: boolean) {
    state.isLogin = payload;
  },
  [CONSTANT_STORE.USER.LOGOUT.SET] (state: IUserState) {
    state.isLogin = false;
    state.profile = {
      accessToken: '',
      user: {
        email: '',
        roles: [],
        id: -1,
      },
    };
    localStorage.removeItem('author');
    store.dispatch(CONSTANT_STORE.APP.RESET.SET_WITH_NAMESPACED);
  },
  [CONSTANT_STORE.USER.PROFILE.SET] (state: IUserState, account: IProfileState) {
    state.profile = { ...account };
    localStorage.setItem('author', JSON.stringify(account));
  },
};

export default mutations;
