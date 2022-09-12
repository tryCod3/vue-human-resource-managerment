<script lang="ts">
  export default {};
</script>

<template>
  <h1>Hello i'm config app</h1>
  <el-alert title="success alert" type="success" />
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
</template>

<style scoped>
  h1 {
    padding: 5px;
  }
</style>
