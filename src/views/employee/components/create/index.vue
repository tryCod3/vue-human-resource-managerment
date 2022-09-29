<template>
  <FormEmployee type-action="create">
    <template #btn-action="scope">
      <el-button type="primary" @click="scope.handleCreate">Create Employee</el-button>
    </template>
  </FormEmployee>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import FormEmployee from '@/slots/form/FormEmployee.vue';

  export default defineComponent({
    components: {
      FormEmployee,
    },
  });
</script>

<style lang="scss" scoped></style>
