import CONSTANT_STORE from '@/constants/store';
import { IFecthState } from './index';

const mutations = {
  [CONSTANT_STORE.API.FECTH.START.SET] (state: IFecthState, stateChange: IFecthState) {
    state.hasFetch = stateChange.hasFetch;
    state.message = stateChange.message;
    state.success = stateChange.success;
  },
  [CONSTANT_STORE.API.FECTH.DONE.SET] (state: IFecthState, stateChange: IFecthState) {
    state.hasFetch = stateChange.hasFetch;
    state.message = stateChange.message;
    state.success = stateChange.success;
  },
};

export default mutations;
