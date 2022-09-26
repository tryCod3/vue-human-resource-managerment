<template>
  <div v-if="!getHidden()" class="item-menu">
    <template v-if="canGetFirstChildren()">
      <ItemLink :path="path">
        <el-menu-item @click="handleToggleDrawer">
          <el-icon><document /></el-icon>
          <template #title>
            <span>{{ getNameChildren(canGetFirstChildren()) }}</span>
          </template>
        </el-menu-item>
      </ItemLink>
    </template>

    <el-sub-menu v-else :index="item?.name">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ item?.name }}</span>
      </template>

      <MenuItem v-for="children in getChildren()" :key="children.name" :item="children" :path="getPath(children)" />
    </el-sub-menu>
  </div>
</template>

<script lang="ts">
  import ItemLink from './ItemLink.vue';
  import { RouteRecordRaw } from 'vue-router';
  import { defineComponent, PropType } from 'vue';
  import store from '@/store';
  import CONSTANT_STORE from '@/constants/store';
  import { MOBILE } from '@/store/modules/app';

  export default defineComponent({
    components: {
      ItemLink,
    },
    props: {
      item: {
        type: Object as PropType<RouteRecordRaw>,
        require: true,
      },
      path: {
        type: String,
        default: '',
      },
    },
    methods: {
      getChildren () {
        return this.item?.children ?? [];
      },
      getLengthChildren () {
        return this.getChildren().filter(children => !children.meta?.hidden).length;
      },
      canGetFirstChildren () {
        let isRoot = this.item?.meta?.isRoot;
        if (isRoot === undefined) isRoot = false;
        return this.getLengthChildren() <= 1 && !isRoot;
      },
      getNameChildren (firstChildren: boolean) {
        if (firstChildren && this.getLengthChildren() > 0)
          return this.item?.children ? (this.item?.children[0]?.meta?.title as string) : 'default item';
        else return this.item?.meta?.title as string;
      },
      getHidden () {
        return this.item?.meta?.hidden;
      },
      getPath (child: RouteRecordRaw) {
        return `${this.item?.path}/${child?.path}`;
      },
      handleToggleDrawer () {
        const getToggle = store.getters[CONSTANT_STORE.APP.TOGGLE_SIDEBAR.GET_WITH_NAMESPACED];
        if (getToggle) {
          const getDevice = store.getters[CONSTANT_STORE.APP.DEVICE.GET_WITH_NAMESPACED];
          if (getDevice === MOBILE) store.dispatch(CONSTANT_STORE.APP.TOGGLE_SIDEBAR.SET_WITH_NAMESPACED, false);
        }
      },
    },
  });
</script>

<style lang="scss" scoped></style>
