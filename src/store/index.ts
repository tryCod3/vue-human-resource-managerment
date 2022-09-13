import { createStore } from 'vuex';
import appStore from './modules/app';
import userStore from './modules/user';
import CONSTANT_STORE from '@/constants/store';

const store = createStore({
  modules: {
    [CONSTANT_STORE.APP.CONFIG.MODULE]: appStore,
    [CONSTANT_STORE.USER.CONFIG.MODULE]: userStore,
  },
});

export default store;
