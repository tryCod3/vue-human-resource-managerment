<template>
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
        <el-button size="small" type="warning">Edit</el-button>
        <el-button size="small" type="danger" @click="deleteCompany(scope)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
  // eslint-disable-next-line
  import axios from 'axios';
  import { defineComponent } from 'vue';
  import { ICompanyState } from './module';
  import { getAPI } from '../../../../custom/fetchApi/index';

  export default defineComponent({
    data () {
      return {
        list: [] as ICompanyState[],
      };
    },
    async mounted () {
      this.getAPICompany();
    },
    methods: {
      async getAPICompany () {
        const url = 'http://localhost:3000/company';
        // this.list = getAPI(url);
        getAPI(url)
          .then(data => {
            this.list = data;
          })
          .catch(e => {
            alert('Erorr: ' + e);
          });

        // const result = await axios.get('http://localhost:3000/company');
        // this.list = result.data;
      },
      async deleteCompany (e: any) {
        const i = e.row.id;
        await axios.delete(`http://localhost:3000/company/${i}`);
        this.list = this.list.filter(item => item.id !== i);
      },
    },
  });
</script>
