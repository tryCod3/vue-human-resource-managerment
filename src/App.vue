<script lang="ts">
  export default {};
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
  </div>
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
