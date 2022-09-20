import CONSTANT_STORE from '@/constants/store';
import { IFecthState } from './index';

const actions = {
  [CONSTANT_STORE.API.FECTH.START.SET] (data: any, state: IFecthState) {
    const { commit } = data;
    commit(CONSTANT_STORE.API.FECTH.START.SET, state);
  },
  [CONSTANT_STORE.API.FECTH.DONE.SET] (data: any, state: IFecthState) {
    const { commit } = data;
    commit(CONSTANT_STORE.API.FECTH.DONE.SET, state);
  },
};

export default actions;
