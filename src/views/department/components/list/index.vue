<template>
  <el-table :data="listDepartment" style="width: 100%">
    <el-table-column prop="company_name" label="Company Name" width="350" />
    <el-table-column prop="name" label="Department Name" width="350" />
    <el-table-column prop="activeD" label="Active" width="250" />
    <el-table-column label="Operations" width="">
      <template #default="scope">
        <el-button type="primary" size="small">Detail</el-button>
        <el-button type="warning" size="small">Edit</el-button>
        <el-button size="small" type="danger" @click="deleteDepartment(scope)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { IDepartmentState } from './module';
  import { getAPI, deleteAPI } from '@/custom/fetchApi/index';

  export default defineComponent({
    data () {
      return {
        listDepartment: [] as IDepartmentState[],
      };
    },
    async mounted () {
      this.getAPIDepartment();
    },
    methods: {
      getAPIDepartment () {
        const url = 'http://localhost:3000/departments';
        getAPI(url).then(
          res =>
            (this.listDepartment = res.data.reduce((arr: IDepartmentState[], model: IDepartmentState) => {
              const modelChange = {
                ...model,
                activeD: model.active ? 'Active' : 'Inactive',
              };
              arr.push(modelChange);
              return arr;
            }, []))
        );
      },
      deleteDepartment (e: any) {
        const id = e.row.id;
        const url = `http://localhost:3000/departments/${id}`;
        deleteAPI(url);
        this.listDepartment = this.listDepartment.filter(item => item.id !== id);
      },
    },
  });
</script>

<style lang="scss"></style>
