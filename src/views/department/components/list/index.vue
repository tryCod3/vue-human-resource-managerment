<template>
  <el-dialog v-model="dialogDetailDepartment" :title="getNameHandel" width="30%" draggable @close="resetField">
    <DepartmentProfile :id="idHandel" />
  </el-dialog>
  <el-dialog v-model="dialogCreateDepartment" title="TIPS" width="30%" draggable @close="resetField">
    <DepartmentCreate :id="idHandel" />
  </el-dialog>
  <el-table :data="listDepartment" style="width: 100%">
    <el-table-column prop="name" label="Department Name" width="350" />
    <el-table-column prop="activeD" label="Active" width="250" />
    <el-table-column label="Operations" width="">
      <template #default="scope">
        <el-button type="primary" size="small" @click="handleDetailDepartment(scope.$index, scope.row)"
          >Detail</el-button
        >
        <el-button type="warning" size="small" @click="handleEditDepartment(scope.$index, scope.row)">Edit</el-button>
        <el-button size="small" type="danger" @click="deleteDepartment(scope)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { IDepartmentState } from '../../module';
  import { getAPI, deleteAPI } from '@/custom/fetchApi/index';
  import DepartmentProfile from '../detail/index.vue';
  import DepartmentCreate from '../create/index.vue';

  export default defineComponent({
    components: {
      DepartmentProfile,
      DepartmentCreate,
    },
    data () {
      return {
        listDepartment: [] as IDepartmentState[],
        dialogDetailDepartment: false,
        dialogCreateDepartment: false,
        idHandel: -1,
        nameHandel: '',
      };
    },
    computed: {
      getNameHandel () {
        return this.nameHandel !== '' ? `Profile Department : ${this.nameHandel}` : 'Profile Department';
      },
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
      handleDetailDepartment (index: number, model: IDepartmentState) {
        this.dialogDetailDepartment = true;
        this.$router.replace(`/department/list/profile/${model.id}`);
        this.idHandel = model?.id ?? -1;
        this.nameHandel = model.name;
      },
      handleEditDepartment (index: number, model: IDepartmentState) {
        this.dialogCreateDepartment = true;
        this.$router.replace(`/department/list/edit/${model.id}`);
        this.idHandel = model?.id ?? -1;
        this.nameHandel = model.name;
      },

      deleteDepartment (e: any) {
        const id = e.row.id;
        const url = `http://localhost:3000/departments/${id}`;
        deleteAPI(url);
        this.listDepartment = this.listDepartment.filter(item => item.id !== id);
      },
      resetField () {
        this.dialogDetailDepartment = false;
        this.$router.replace(`/department/list`);
        this.idHandel = -1;
        this.nameHandel = '';
      },
    },
  });
</script>

<style lang="scss">
  .el-dialog.is-draggable .el-dialog__header {
    text-align: center;
  }
</style>
