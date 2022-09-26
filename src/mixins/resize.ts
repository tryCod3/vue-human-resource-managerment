import store from '@/store';
import CONSTANT_STORE from '@/constants/store';
import { isMobie } from '@/utils/app';
import { defineComponent } from 'vue';
import { LAPTOP, MOBILE } from '@/store/modules/app';

export default defineComponent({
  beforeMount () {
    window.addEventListener('resize', this.handleResize);
  },

  mounted () {
    this.handleResize();
  },

  beforeUnmount () {
    window.removeEventListener('resize', this.handleResize);
  },

  methods: {
    handleResize () {
      if (isMobie()) {
        if (store.getters[CONSTANT_STORE.APP.DEVICE.GET_WITH_NAMESPACED] !== MOBILE) {
          store.dispatch(CONSTANT_STORE.APP.DEVICE.SET_WITH_NAMESPACED, MOBILE);
          store.dispatch(CONSTANT_STORE.APP.TOGGLE_SIDEBAR.SET_WITH_NAMESPACED, false);
        }
      } else {
        if (store.getters[CONSTANT_STORE.APP.DEVICE.GET_WITH_NAMESPACED] !== LAPTOP) {
          store.dispatch(CONSTANT_STORE.APP.DEVICE.SET_WITH_NAMESPACED, LAPTOP);
          store.dispatch(CONSTANT_STORE.APP.TOGGLE_SIDEBAR.SET_WITH_NAMESPACED, true);
        }
      }
    },
  },
});
