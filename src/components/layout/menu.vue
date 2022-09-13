<template>
  <el-row class="tac">
    <el-col>
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-menu-item index="1">
          <el-icon><Grid /></el-icon>
          <span>Dashboard</span>
        </el-menu-item>

        <el-sub-menu index="2">
          <template #title>
            <el-icon><HomeFilled /></el-icon>
            <span>Company</span>
          </template>
          <el-menu-item index="2-1">
            <el-icon><Plus /></el-icon>
            Create
          </el-menu-item>
          <el-menu-item index="2-2">
            <el-icon><List /></el-icon>
            List
          </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="3">
          <template #title>
            <el-icon><User /></el-icon>
            <span>Employee</span>
          </template>

          <el-menu-item index="3-1">
            <el-icon><Avatar /></el-icon>
            MySeft
          </el-menu-item>
          <el-menu-item index="3-2">
            <el-icon><Plus /></el-icon>
            create
          </el-menu-item>
          <el-menu-item index="3-3">
            <el-icon><List /></el-icon>
            List
          </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="4">
          <template #title>
            <el-icon><House /></el-icon>
            <span>Department</span>
          </template>

          <el-menu-item index="4-1">
            <el-icon><Plus /></el-icon>
            create
          </el-menu-item>
          <el-menu-item index="4-2">
            <el-icon><List /></el-icon>
            List
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts">
  import { Grid, Plus, User, House, HomeFilled, List, Avatar } from '@element-plus/icons-vue';
  export default {
    components: {
      Grid,
      Plus,
      User,
      House,
      HomeFilled,
      List,
      Avatar,
    },
  };
</script>

<style lang="scss" scoped></style>
