<template>
  <el-dialog v-model="dialogDetailDepartment" :title="getNameHandel" width="30%" draggable @close="resetField">
    <DepartmentProfile :id="idHandel" />
  </el-dialog>
  <el-table :data="listDepartment" style="width: 100%">
    <el-table-column prop="name" label="Department Name" width="350" />
    <el-table-column prop="activeD" label="Active" width="250" />
    <el-table-column label="Operations" width="">
      <template #default="scope">
        <el-button type="primary" size="small" @click="handleDetailDepartment(scope.$index, scope.row)"
          >Detail</el-button
        >
        <el-button type="warning" size="small">Edit</el-button>
        <el-popconfirm title="Are you sure to delete this?" @confirm="deleteDepartment(scope)" @cancel="cancelEvent">
          <template #reference>
            <el-button size="small" type="danger">Delete</el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { IDepartmentState } from '../../module';
  import { getAPI, deleteAPI } from '@/custom/fetchApi/index';
  import DepartmentProfile from '../detail/index.vue';
  import { ElNotification, ElLoading } from 'element-plus';

  export default defineComponent({
    components: {
      DepartmentProfile,
    },
    data () {
      return {
        listDepartment: [] as IDepartmentState[],
        dialogDetailDepartment: false,
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
      deleteDepartment (e: any) {
        const id = e.row.id;
        const url = `http://localhost:3000/departments/${id}`;
        deleteAPI(url);
        this.listDepartment = this.listDepartment.filter(item => item.id !== id);
        const loading = ElLoading.service({
          lock: true,
          text: 'Loading',
          background: 'rgba(0, 0, 0, 0.7)',
        });
        setTimeout(() => {
          loading.close();
          ElNotification({
            title: 'Success',
            message: 'You deleted successfully',
            type: 'success',
          });
        }, 1000);
      },
      cancelEvent () {
        ElNotification({
          title: 'Success',
          message: 'You refused to delete',
          type: 'success',
        });
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
