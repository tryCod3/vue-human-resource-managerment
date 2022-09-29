<template>
  <section class="tags-container">
    <el-tag v-for="(tag, index) in listTags" :key="tag + index">
      {{ tag }}
    </el-tag>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      tags: {
        type: String,
        default: '',
      },
    },

    data () {
      return {
        listTags: [] as string[],
      };
    },

    created () {
      const arrSplit = this.tags.split(',').map(tag => tag.trim());
      if (arrSplit.length === 0) arrSplit.push(this.tags.trim());
      this.listTags = arrSplit;
    },
  });
</script>

<style lang="scss" scoped>
  .tags-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    min-width: 100px;
    max-width: 300px;
    max-height: 300px;
    overflow: auto;
    span + span {
      margin: 3px;
    }
  }
</style>
