<template>
  <el-row class="tac">
    <el-col>
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <MenuItem v-for="menu in getMenuBar" :key="menu.name" :item="menu" :path="menu.path" />
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts">
  import MenuItem from './MenuItem.vue';
  import store from '@/store';
  import CONSTANST_STORE from '@/constants/store';
  export default {
    components: {
      MenuItem,
    },
    computed: {
      getMenuBar () {
        return store.getters[CONSTANST_STORE.APP.NAVBAR_DYNAMIC.GET_WITH_NAMESPACED];
      },
    },
  };
</script>

<style lang="scss" scoped></style>
