<template>
  <FetchApi :fetch-info="fetchInfo" :reset-field="resetField">
    <template #header> List Company </template>

    <template #default="_scope">
      <el-dialog v-model="dialogVisibleCreate" title="Update Company" width="30%" draggable>
        <CompanyCreate :id="idHandel" @handleUpdate="_scope.update" />
      </el-dialog>

      <el-dialog v-model="dialogVisibleDetail" title="Profile Company" width="30%" draggable>
        <CompanyDetail :id="idHandel" @handleUpdate="_scope.update" />
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
            <el-button size="small" type="primary" @click="handleProfileCompany(scope.$index, scope.row)"
              >Detail</el-button
            >
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
  import FetchApi from '@/slots/fetch/index.vue';
  import CompanyCreate from '../create/index.vue';
  import CompanyDetail from '../detail/index.vue';
  import { ICompanyState } from '../../module';

  export default defineComponent({
    components: {
      CompanyCreate,
      FetchApi,
      CompanyDetail,
    },
    data () {
      return {
        list: [] as ICompanyState[],
        fetchInfo: {
          url: 'http://localhost:3000/company',
        },
        dialogVisibleCreate: false,
        dialogVisibleDetail: false,
        idHandel: -1,
      };
    },

    methods: {
      handleEditCompany (index: number, model: ICompanyState) {
        this.dialogVisibleCreate = true;
        this.$router.replace(`/company/list/edit/${model.id}`);
        this.idHandel = model?.id ?? -1;
      },
      handleProfileCompany (index: number, model: ICompanyState) {
        this.dialogVisibleDetail = true;
        this.$router.replace(`/company/list/profile/${model.id}`);
        this.idHandel = model?.id ?? -1;
      },
      resetField () {
        this.dialogVisibleCreate = false;
        this.$router.replace(`/company/list/`);
        this.idHandel = -1;
      },
    },
  });
</script>
