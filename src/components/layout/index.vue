<template>
  <div class="common-layout">
    <el-container>
      <el-header style="background: white">
        <HeaderLayout />
      </el-header>
      <el-container>
        <el-aside>
          <MenuLayout />
        </el-aside>

        <el-container>
          <el-main>
            <section class="app-main">
              <router-view />
            </section>
          </el-main>
          <el-footer style="border-top: 1px solid black; text-align: center">Create by team Rikai</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import MenuLayout from './components/menu/index.vue';
  import HeaderLayout from './header.vue';
  import mixinResize from '@/mixins/resize';

  export default defineComponent({
    components: {
      MenuLayout,
      HeaderLayout,
    },
    mixins: [mixinResize],
  });
</script>

<style lang="scss" scoped>
  @use '@/styles/breakpoint' as *;

  .el-main {
    background: white !important;

    .app-main {
      min-height: 100vh;
      width: 100%;
      position: relative;
      overflow: hidden;
    }
  }
  .el-container {
    margin-top: 20px;
    .el-aside {
      width: auto;
    }
  }
</style>
