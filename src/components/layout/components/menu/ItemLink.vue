<template>
  <router-link :to="path ?? '/404'">
    {{ content }}
  </router-link>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    props: {
      path: {
        type: String,
        require: true,
      },
      content: {
        type: String,
        require: true,
      },
    },
  });
</script>

<style lang="scss" scoped></style>
