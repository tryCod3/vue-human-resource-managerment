// vuex-shim.d.ts

import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';
import store from '@/store';

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    store: store;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
