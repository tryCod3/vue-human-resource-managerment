<script lang="ts">
  import layout from '../src/components/layout/index.vue';

  export default {
    components: {
      layout,
    },
  };
</script>

<template>
  <layout />
  <router-view />
</template>

<style scoped lang="scss">
  @use '@/styles' as *;
</style>
