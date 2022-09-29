<template>
  <FormEmployee type-action="update">
    <template #btn-action="scope">
      <el-button @click="handleUpdate(scope.target, scope.targetApi, scope.idTarget, scope.validate)"
        >Update Employee</el-button
      >
    </template>
  </FormEmployee>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import FormEmployee from '@/slots/form/FormEmployee.vue';
  import { IEmployeeForm, IEmployeeState } from '../../module';

  export default defineComponent({
    components: {
      FormEmployee,
    },

    emits: ['updateApi', 'updateList'],

    methods: {
      async handleUpdate (
        target: IEmployeeState,
        targetApi: IEmployeeForm,
        idUpdate: number,
        isValidate: () => Promise<boolean>
      ) {
        isValidate().then((validate: boolean) => {
          if (!validate) return;

          try {
            this.$emit('updateApi', targetApi, `http://localhost:3000/employee/${idUpdate}`);
            this.$emit('updateList', target, idUpdate);
          } catch (e: unknown) {
            if (e instanceof Error) alert(e.message);
          }
        });
      },
    },
  });
</script>

<style lang="scss" scoped>
  .demo-department {
    max-width: 800px;
    margin: auto;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    padding: 16px;
  }
</style>
