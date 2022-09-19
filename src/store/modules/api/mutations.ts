import CONSTANT_STORE from '@/constants/store';
import { IFecthState } from './index';

const mutations = {
  [CONSTANT_STORE.API.FECTH.START.SET] (state: IFecthState, stateChange: IFecthState) {
    state = { ...stateChange };
  },
  [CONSTANT_STORE.API.FECTH.DONE.SET] (state: IFecthState, stateChange: IFecthState) {
    state = { ...stateChange };
  },
};

export default mutations;
