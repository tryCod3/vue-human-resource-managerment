<template>
  <div class="common-layout">
    <el-container>
      <el-header style="background: lightgray">
        <HeaderLayout />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <MenuLayout />
        </el-aside>
        <el-container>
          <el-main style="background: lightgray">
            <section class="app-main">
              <transition name="fade-transform" mode="out-in">
                <router-view />
              </transition>
            </section>
          </el-main>
          <el-footer style="background: lightgray; border-top: 1px solid black; text-align: center"
            >Create by team Rikai</el-footer
          >
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
  import MenuLayout from './menu.vue';
  import HeaderLayout from './header.vue';

  export default {
    components: {
      MenuLayout,
      HeaderLayout,
    },
  };
</script>

<style lang="scss" scoped>
  .app-main {
    min-height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
</style>
