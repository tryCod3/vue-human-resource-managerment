import { createStore } from 'vuex';
import appStore from './modules/app';
import userStore from './modules/user';
import apiStore from './modules/api';
import CONSTANT_STORE from '@/constants/store';

const store = createStore({
  modules: {
    [CONSTANT_STORE.APP.CONFIG.MODULE]: appStore,
    [CONSTANT_STORE.USER.CONFIG.MODULE]: userStore,
    [CONSTANT_STORE.API.CONFIG.MODULE]: apiStore,
  },
});

export default store;
