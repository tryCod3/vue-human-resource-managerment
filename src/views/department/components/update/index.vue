<template>
  <section class="department-conatiner">
    <section class="department-wrapper">
      <div class="department-wrapper__form">
        <el-form ref="formInstace" :model="formDepartment" :rules="rules" class="demo-form-inline">
          <el-form-item label="Department Name" label-width="160px" prop="name">
            <el-input v-model="formDepartment.name" placeholder="input here..." />
          </el-form-item>
          <el-form-item label="Company names" label-width="160px" prop="company">
            <el-select
              v-model="formDepartment.company.name"
              placeholder="select company name"
              @change="handleChangeOption"
            >
              <el-option v-for="company in listCompany" :key="company.id" :label="company.name" :value="company" />
            </el-select>
          </el-form-item>
          <div class="department-item__select">
            <el-form-item label="Active" class="active" label-width="160px">
              <el-switch v-model="formDepartment.active" />
            </el-form-item>
          </div>
        </el-form>
        <div class="action">
          <el-button type="primary" @click="handleUpdataDepartment">Submit</el-button>
          <el-button @click="handleResetDepartment">Reset</el-button>
        </div>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';
  import store from '@/store';
  import CONSTANT_STORE from '@/constants/store';
  import type { FormInstance } from 'element-plus';
  import { ICompanyLabelState } from '@/views/department/module';
  import { IProfileState } from '@/store/modules/user';
  import { IModelIdAndName } from '@/views/employee/module';

  interface IDefaultState {
    name: string;
    company: IModelIdAndName;
    active: boolean;
  }

  const defaultData: IDefaultState = {
    name: '',
    company: {
      id: -1,
      name: '',
    },
    active: false,
  };

  export default defineComponent({
    data () {
      return {
        listCompany: [] as ICompanyLabelState[],
        formDepartment: {
          ...defaultData,
        },
        rules: {
          company: [{ required: true, message: 'Please select companys', trigger: 'change' }],
          name: [{ required: true, message: 'Please input Department name', trigger: 'blur' }],
        },
      };
    },
    computed: {
      idDepartment () {
        return this.$route.params.id;
      },
    },
    watch: {
      idDepartment: {
        async handler (value: string) {
          if (!value) return;
          const res = await axios.get(`http://localhost:3000/department_list/${value}`);
          if (res.status === 200) {
            const data = res.data;
            this.formDepartment.name = data.name;
            this.formDepartment.company = {
              id: data.company[0].id,
              name: data.company[0].name,
            };
            this.formDepartment.active = data.active;
          }
        },
      },
    },
    async created () {
      const account: IProfileState = store.getters[CONSTANT_STORE.USER.PROFILE.GET_WITH_NAMESPACED];
      const dataUser_company = await axios.get(`http://localhost:3000/user_companys/${account.user.id}`);
      this.listCompany = dataUser_company.data.company_infos;
    },
    methods: {
      async handleUpdataDepartment () {
        if (!this.$refs.formInstace) return;
        await (this.$refs.formInstace as FormInstance).validate(async valid => {
          const paramId = this.$route.params.id;
          if (valid) {
            const data = {
              name: this.formDepartment.name,
              active: this.formDepartment.active,
              company_id: this.formDepartment.company.id,
            };

            await axios.put(`http://localhost:3000/departments/${paramId}`, data);
            (this.$refs.formInstace as FormInstance).resetFields();
          }
        });
      },
      handleResetDepartment () {
        if (!this.$refs.formInstace) return;
        (this.$refs.formInstace as FormInstance).resetFields();
        this.formDepartment = { ...defaultData };
      },
      handleChangeOption (e: IModelIdAndName) {
        this.formDepartment.company = { ...e };
      },
    },
  });
</script>

<style lang="scss" scoped>
  .action {
    display: flex;
    justify-content: center;
  }
</style>
