<template>
  <section class="department-conatiner">
    <section class="department-wrapper">
      <div class="department-wrapper__header">
        <h1>department create</h1>
      </div>
      <div class="department-wrapper__form">
        <el-form ref="formInstace" :model="department" :rules="rules" class="demo-form-inline">
          <el-form-item label="Company names" label-width="160px" :prop="isMultiCompany ? 'companys' : 'company'">
            <el-select
              v-if="isMultiCompany"
              v-model="department.companys"
              multiple
              clearable
              collapse-tags
              collapse-tags-tooltip
              placeholder="select list companys name"
            >
              <el-option
                v-for="company in listCompany"
                :key="company.company_id"
                :label="company.company_name"
                :value="company.company_id"
              />
            </el-select>
            <el-select v-else v-model="department.company" placeholder="select company name">
              <el-option
                v-for="company in listCompany"
                :key="company.company_id"
                :label="company.company_name"
                :value="company.company_id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="Department Name" label-width="160px" prop="name">
            <el-input v-model="department.name" placeholder="input here..." />
          </el-form-item>

          <div class="department-item__select">
            <el-form-item label="Department Active" class="active" label-width="160px">
              <el-switch v-model="department.active" />
            </el-form-item>

            <el-checkbox-group v-model="department.type">
              <el-checkbox label="Multi Select Companys" name="type" />
            </el-checkbox-group>
          </div>
        </el-form>
        <div class="action">
          <el-button type="primary" @click="handleCreateDepartment">Create</el-button>
          <el-button @click="handleResetDepartment">Reset</el-button>
        </div>
      </div>
      <div class="department-bubble"></div>
      <div class="department-bubble-2"></div>
      <div class="department-bubble-3"></div>
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

  const defaultData = {
    company: '',
    companys: [] as string[],
    name: '',
    active: true,
    type: [] as string[],
  };

  export default defineComponent({
    data () {
      return {
        listCompany: [] as ICompanyLabelState[],
        department: {
          ...defaultData,
        },
        rules: {
          company: [{ required: true, message: 'Please input Company name', trigger: 'blur' }],
          companys: [{ required: true, message: 'Please select List Companys name', trigger: 'blur' }],
          name: [{ required: true, message: 'Please input Department name', trigger: 'blur' }],
        },
      };
    },
    computed: {
      isMultiCompany () {
        return this.department.type.length > 0;
      },
    },
    async created () {
      const account: IProfileState = store.getters[CONSTANT_STORE.USER.PROFILE.GET_WITH_NAMESPACED];
      const url = `http://localhost:3000/company_user/${account.user.id}`;
      const datas = await axios.get(url);
      this.listCompany = datas.data.company_names;
    },
    methods: {
      async handleCreateDepartment () {
        if (!this.$refs.formInstace) return;
        await (this.$refs.formInstace as FormInstance).validate(async valid => {
          if (valid) {
            const account: IProfileState = store.getters[CONSTANT_STORE.USER.PROFILE.GET_WITH_NAMESPACED];
            let companys = this.department.companys;
            if (!this.isMultiCompany) companys = [this.department.company];
            const department_name = this.department.name;

            const modelApi = {
              companys,
              department_name,
              user_id: account.user.id,
              department_active: this.department.active,
            };

            await axios.post('url', { modelApi });

            (this.$refs.formInstace as FormInstance).resetFields();
          }
        });
      },
      handleResetDepartment () {
        if (!this.$refs.formInstace) return;
        (this.$refs.formInstace as FormInstance).resetFields();
        this.department = { ...defaultData };
      },
    },
  });
</script>

<style lang="scss" scoped>
  .department-conatiner {
    display: flex;
    height: 100vh;
    justify-content: center;

    .department-wrapper {
      min-width: 550px;
      max-width: 550px;
      padding: 5px;
      border-radius: 8px;
      min-height: 400px;
      max-height: 400px;
      display: flex;
      flex-direction: column;
      margin: auto;
      margin-top: 150px;
      box-shadow: -4px 10px 2px 3px rgba(0, 0, 0, 0.2);
      border-top: 1px solid black;
      border-right: 1px solid black;
      position: relative;
      z-index: 10;
      overflow: hidden;

      .el-form {
        .department-item__select {
          display: flex;

          .active {
            min-width: 200px;
          }
          .el-checkbox {
            margin-left: 12px;
            display: flex;
            flex-direction: row-reverse;
            margin-top: 5px;
            width: 100%;
            justify-content: space-between;
          }
        }
      }

      &__header {
        h1 {
          text-align: center;
          font-size: 2rem;
        }
      }
      &__form {
        margin: auto;
        margin-top: 50px;
        .el-form {
          &-item {
            min-width: 100%;
            padding: 5px;
            &__content {
              .el-select {
                min-width: 100%;
              }
            }
          }
        }
        .action {
          display: flex;
          justify-content: flex-end;
        }
      }

      .department-bubble {
        background: rgb(103, 103, 221);
        opacity: 0.5;
        height: 80px;
        width: 80px;
        border-radius: 50%;
        position: absolute;
        z-index: -10;
        top: -20px;
        left: -20px;
      }

      .department-bubble-2 {
        background: rgb(49, 133, 211, 0.5);
        height: 120px;
        width: 120px;
        border-radius: 50%;
        position: absolute;
        z-index: -10;
        bottom: -20px;
        left: -20px;
      }

      .department-bubble-3 {
        background: rgb(49, 133, 211, 0.5);
        height: 40px;
        width: 40px;
        border-radius: 50%;
        position: absolute;
        z-index: -10;
        bottom: -10px;
        right: -10px;
      }
    }
  }
</style>
