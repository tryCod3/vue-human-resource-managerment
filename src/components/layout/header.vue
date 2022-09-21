<template>
  <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
    <el-menu-item index="0" class="logo">
      <a href="/" class="logo-a"> HRM Project </a>
    </el-menu-item>
    <div class="flex-grow"></div>

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
  </el-menu>
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
  .flex-grow {
    flex-grow: 1;
  }

  .el-menu-demo {
    height: 60px;

    .logo {
      justify-content: flex-start;
      color: blue;

      margin-top: 2px;
    }

    .avatar {
      margin-top: 20px;
      &:hover > a {
        cursor: pointer;
        color: blue;
      }
      a {
        display: flex;
        i {
          margin-right: 5px;
        }
      }
      .avatar-img {
        height: 51px;
        width: 44px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
</style>
