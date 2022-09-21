<template>
  <div class="common-layout">
    <el-container>
      <el-header style="padding: 0">
        <HeaderLayout />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <MenuLayout />
        </el-aside>
        <el-container>
          <el-main style="background: lightgray">
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

  export default defineComponent({
    components: {
      MenuLayout,
      HeaderLayout,
    },
    computed: {
      getPath (): string {
        return this.$route.path;
      },
    },
  });
</script>

<style lang="scss" scoped>
  .el-main {
    background: white !important;

    .app-main {
      min-height: 100vh;
      width: 100%;
      position: relative;
      overflow: hidden;
    }
  }
</style>
