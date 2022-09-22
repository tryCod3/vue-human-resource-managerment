<template>
  <div v-show="getToggle">
    <el-drawer
      v-if="isDeviceMobile()"
      v-model="isDeviceMobile"
      direction="ltr"
      size="300px"
      :before-close="handleClose"
    >
      <template #header="{ titleId, titleClass }">
        <h4 :id="titleId" :class="titleClass">
          <AccountDropdown />
        </h4>
      </template>
      <el-menu class="el-menu-vertical-demo">
        <MenuItem v-for="menu in getMenuBar" :key="menu.name" :item="menu" :path="menu.path" />
      </el-menu>
    </el-drawer>

    <el-menu v-else :collapse="!getToggle" class="el-menu-vertical-demo">
      <MenuItem v-for="menu in getMenuBar" :key="menu.name" :item="menu" :path="menu.path" />
    </el-menu>
  </div>
</template>

<script lang="ts">
  import MenuItem from './MenuItem.vue';
  import store from '@/store';
  import CONSTANT_STORE from '@/constants/store';
  import { MOBILE } from '@/store/modules/app';
  import { defineComponent } from 'vue';
  import AccountDropdown from '../account/index.vue';

  export default defineComponent({
    components: {
      MenuItem,
      AccountDropdown,
    },
    computed: {
      getMenuBar () {
        return store.getters[CONSTANT_STORE.APP.NAVBAR_DYNAMIC.GET_WITH_NAMESPACED];
      },
      getToggle (): boolean {
        return store.getters[CONSTANT_STORE.APP.TOGGLE_SIDEBAR.GET_WITH_NAMESPACED];
      },
    },
    methods: {
      isDeviceMobile (): boolean {
        return store.getters[CONSTANT_STORE.APP.DEVICE.GET_WITH_NAMESPACED] === MOBILE;
      },
      handleClose () {
        store.dispatch(CONSTANT_STORE.APP.TOGGLE_SIDEBAR.SET_WITH_NAMESPACED, false);
      },
    },
  });
</script>

<style lang="scss">
  .el-menu-vertical-demo {
    min-width: 250px;
    min-height: 100vh;
  }
</style>
