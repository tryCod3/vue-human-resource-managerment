<template>
  <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
    <div class="el-menu-demo__header">
      <el-icon v-if="isOpenSidebar" color="blue" @click="handleToggle(false)"><Fold /></el-icon>
      <el-icon v-else color="blue" @click="handleToggle(true)"><Expand /></el-icon>
      <el-menu-item index="0" class="logo">
        <a href="/" class="logo-a"> HRM Project </a>
      </el-menu-item>
    </div>
    <template v-if="!isDeviceMobile">
      <AccountDropdown />
    </template>
  </el-menu>
</template>

<script lang="ts">
  import store from '@/store';
  import CONSTANT_STORE from '@/constants/store';
  import { defineComponent } from 'vue';
  import AccountDropdown from './components/account/index.vue';
  import { MOBILE } from '@/store/modules/app';

  export default defineComponent({
    components: {
      AccountDropdown,
    },
    data () {
      return {
        user_name: store.getters[CONSTANT_STORE.USER.PROFILE.GET_WITH_NAMESPACED].user.email,
      };
    },
    computed: {
      isOpenSidebar () {
        return store.getters[CONSTANT_STORE.APP.TOGGLE_SIDEBAR.GET_WITH_NAMESPACED];
      },
      isDeviceMobile (): boolean {
        return store.getters[CONSTANT_STORE.APP.DEVICE.GET_WITH_NAMESPACED] === MOBILE;
      },
    },
    methods: {
      handleLogout () {
        store.dispatch(CONSTANT_STORE.USER.LOGOUT.SET_WITH_NAMESPACED);
        this.$router.replace({ path: '/login' });
      },
      handleToggle (value: boolean) {
        store.dispatch(CONSTANT_STORE.APP.TOGGLE_SIDEBAR.SET_WITH_NAMESPACED, value);
      },
    },
  });
</script>

<style lang="scss" scoped>
  .el-menu-demo {
    height: 80px;
    display: flex;
    justify-content: space-between;
    .el-menu-demo__header {
      display: flex;
      align-items: center;

      i {
        font-size: 20px;
        &:hover {
          cursor: pointer;
        }
        svg {
          font-size: 20px;
        }
      }
      .logo {
        justify-content: flex-start;
        margin-top: 2px;
        a {
          color: blue;
          font-size: 24px;
        }
      }
    }
  }
</style>
