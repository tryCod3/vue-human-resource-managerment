import CONSTANT_STORE from '@/constants/store';
import { IProfileState } from './index';

const actions = {
  [CONSTANT_STORE.USER.LOGIN.SET] (data: any, payload: boolean) {
    data.commit(CONSTANT_STORE.USER.LOGIN.SET, payload);
  },
  [CONSTANT_STORE.USER.LOGOUT.SET] (data: any) {
    data.commit(CONSTANT_STORE.USER.LOGOUT.SET);
  },
  [CONSTANT_STORE.USER.PROFILE.SET] (data: any, account: IProfileState) {
    data.commit(CONSTANT_STORE.USER.PROFILE.SET, account);
  },
};

export default actions;
