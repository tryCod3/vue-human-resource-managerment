<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'App',
    data () {
      return {
        authenticated: false,
      };
    },
    mounted () {
      if (!this.authenticated) 
this.$router.replace({ name: 'Login' });
    },
  });
</script>

<template>
  <div>Home</div>
  <router-view />
</template>

<style scoped lang="scss">
  @use '@/styles' as *;
</style>
