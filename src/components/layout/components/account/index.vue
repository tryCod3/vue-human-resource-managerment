<template>
  <el-dropdown class="avatar" size="default">
    <router-link to="/employee">
      <el-icon><Message /></el-icon>
      {{ user_name }}
    </router-link>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>i18n</el-dropdown-item>
        <el-dropdown-item @click="handleLogout">logout</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
  import store from '@/store';
  import CONSTANT_STORE from '@/constants/store';
  import { defineComponent } from 'vue';

  export default defineComponent({
    data () {
      return {
        user_name: store.getters[CONSTANT_STORE.USER.PROFILE.GET_WITH_NAMESPACED].user.email,
      };
    },
    methods: {
      handleLogout () {
        store.dispatch(CONSTANT_STORE.USER.LOGOUT.SET_WITH_NAMESPACED);
        this.$router.replace({ path: '/login' });
      },
    },
  });
</script>

<style lang="scss" scoped>
  @use '@/styles/breakpoint' as *;

  .avatar {
    display: flex;
    align-items: center;
    &:hover > a {
      cursor: pointer;
      opacity: 0.7;
    }
    a {
      color: blue;
      display: flex;
      align-items: center;
      font-size: 18px;
      margin-top: 11px;
      i {
        margin-right: 11px;
      }
    }
    .avatar-img {
      height: 51px;
      width: 44px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
</style>
