<template>
  <FetchApi :fetch-info="fetchInfo" :reset-field="resetField">
    <template #header> List Company </template>

    <template #default="_scope">
      <el-dialog v-model="dialogVisible" title="Tips" width="30%" draggable>
        <CompanyCreate :id="idHandel" @handleUpdate="_scope.update" />
      </el-dialog>

      <el-table :data="_scope.datas" style="width: 100%">
        <el-table-column prop="user_msnv" label="User msnv" width="110" />
        <el-table-column prop="company_name" label="Company name" width="200" />
        <el-table-column prop="phone_number" label="Phone number" width="150" />
        <el-table-column prop="type" label="Type" width="120" />
        <el-table-column prop="address" label="Address" width="600" />
        <el-table-column prop="tax_code" label="Tax code" width="150" />
        <el-table-column>
          <template #header>
            <el-input size="small" placeholder="Type to search" />
          </template>
          <template #default="scope">
            <el-button size="small" type="primary">Detail</el-button>
            <el-button size="small" type="warning" @click="handleEditCompany(scope.$index, scope.row)">Edit</el-button>
            <el-button size="small" type="danger" @click="_scope.delete(scope.row.id)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>

    <template #footer> phân trang hay làm 1 cái gì đó </template>
  </FetchApi>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { getAPI, deleteAPI } from '@/custom/fetchApi/index';
  import FetchApi from '@/slots/fetch/index.vue';
  import CompanyCreate from '../create/index.vue';
  import { ICompanyState } from '../../module';

  export default defineComponent({
    components: {
      CompanyCreate,
      FetchApi,
    },
    data () {
      return {
        list: [] as ICompanyState[],
        fetchInfo: {
          url: 'http://localhost:3000/company',
        },
        dialogVisible: false,
        idHandel: -1,
      };
    },

    methods: {
      getAPICompany () {
        const url = 'http://localhost:3000/company';
        getAPI(url).then(res => (this.list = res.data));
      },
      deleteCompany (e: any) {
        const i = e.row.id;
        const url = `http://localhost:3000/company/${i}`;
        deleteAPI(url);
        this.list = this.list.filter(item => item.id !== i);
      },
      handleEditCompany (index: number, model: ICompanyState) {
        this.dialogVisible = true;
        this.$router.replace(`/company/list/edit/${model.id}`);
        this.idHandel = model?.id ?? -1;
      },
      resetField () {
        this.dialogVisible = false;
        this.$router.replace(`/company/list/`);
        this.idHandel = -1;
      },
    },
  });
</script>
