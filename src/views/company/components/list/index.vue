<template>
  <el-dialog v-model="dialogVisible" title="Tips" width="30%" draggable>
    <CompanyCreate :id="idHandel" @handleUpdate="handleUpdate" />
  </el-dialog>
  <el-table :data="list" style="width: 100%">
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
        <el-button size="small" type="danger" @click="deleteCompany(scope)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
  // eslint-disable-next-line
  import axios from 'axios';
  import CompanyCreate from '../create/index.vue';
  import { ICompanyState } from '../../module';

  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      CompanyCreate,
    },
    data () {
      return {
        list: [] as ICompanyState[],
        dialogVisible: false,
        idHandel: -1,
      };
    },
    async mounted () {
      this.getAPICompany();
    },
    methods: {
      async getAPICompany () {
        const result = await axios.get('http://localhost:3000/company');
        this.list = result.data;
      },
      async deleteCompany (e: any) {
        const i = e.row.id;
        await axios.delete(`http://localhost:3000/company/${i}`);

        this.getAPICompany();
      },
      handleEditCompany (index: number, model: ICompanyState) {
        this.dialogVisible = true;
        this.$router.replace(`/company/list/edit/${model.id}`);
        this.idHandel = model?.id ?? -1;
      },
      handleUpdate (companyUpdate: ICompanyState) {
        const modelUpdateInList = this.list.findIndex(company => company.id === companyUpdate.id);
        if (modelUpdateInList) {
          this.list[modelUpdateInList] = companyUpdate;
          this.resetField();
        }
      },
      resetField () {
        this.dialogVisible = false;
        this.$router.replace(`/company/list/`);
        this.idHandel = -1;
      },
    },
  });
</script>
