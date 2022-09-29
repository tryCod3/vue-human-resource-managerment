<template>
  <section v-loading="api" element-loading-background="rgba(0, 0, 0, 0.5)" class="loading_container">
    <slot></slot>
  </section>
</template>

<script lang="ts">
  import store from '@/store';
  import { defineComponent } from 'vue';
  import CONSTANT_STORE from '@/constants/store';
  export default defineComponent({
    computed: {
      api () {
        return store.getters[CONSTANT_STORE.API.FECTH.HAS_FETCH.GET_WITH_NAMESPACED];
      },
    },
  });
</script>

<style lang="scss" scoped></style>
