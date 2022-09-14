<template>
  <section v-if="!getHidden()" class="item-menu">
    <el-menu-item v-if="canGetFirstChildren()">
      <ItemLink :path="path" :content="getNameChildren(canGetFirstChildren())" />
    </el-menu-item>

    <el-sub-menu v-else :index="item?.name">
      <template #title>
        <span>{{ item?.name }}</span>
      </template>
      <MenuItem v-for="children in getChildren()" :key="children.name" :item="children" :path="getPath(children)" />
    </el-sub-menu>
  </section>
</template>

<script lang="ts">
  import ItemLink from './ItemLink.vue';
  import { RouteRecordRaw } from 'vue-router';
  import { defineComponent, PropType } from 'vue';

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
    },
  });
</script>

<style lang="scss" scoped></style>
