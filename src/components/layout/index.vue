<template>
  <div class="common-layout">
    <el-container>
      <el-header style="background: lightgray"><header_layout /></el-header>
      <el-container>
        <el-aside width="200px"><menu_layout /></el-aside>
        <el-container>
          <el-main style="background: lightgray">Main</el-main>
          <el-footer style="background: lightgray">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
  import menu_layout from './menu.vue';
  import header_layout from './header.vue';

  export default {
    components: {
      menu_layout,
      header_layout,
    },
  };
</script>

<style lang="scss" scoped></style>
