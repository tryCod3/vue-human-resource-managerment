<script lang="ts">
  export default {};
</script>

<template>
  <div>Home</div>
  <router-view />
</template>

<style scoped lang="scss">
  @use '@/styles' as *;

  div {
    background-color: $primary-color;
  }
  #nav {
    background-color: white;
  }
</style>
