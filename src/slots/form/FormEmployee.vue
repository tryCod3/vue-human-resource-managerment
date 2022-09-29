<template>
  <el-form
    ref="formInstace"
    :model="formState"
    :rules="rules"
    label-width="150px"
    class="demo-formState"
    status-icon
    size="default"
  >
    <el-form-item label="Full name" prop="full_name">
      <el-input v-model="formState.full_name" />
    </el-form-item>
    <el-form-item label="Email" prop="email">
      <el-input v-model="formState.email" />
    </el-form-item>
    <el-form-item label="Code" prop="code">
      <el-input v-model="formState.code" />
    </el-form-item>
    <el-form-item v-if="typeAction !== 'update'" label="Password" prop="password">
      <el-input v-model="formState.password" type="password" show-password />
    </el-form-item>
    <el-form-item label="Gender" prop="gender">
      <el-radio-group v-model="formState.gender">
        <el-radio :label="true">Male</el-radio>
        <el-radio :label="false">Female</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Birtday" required>
      <el-col :span="11">
        <el-form-item prop="birtday">
          <el-date-picker
            v-model="formState.birthday"
            type="date"
            placeholder="Pick a date"
            style="width: 100%"
            format="YYYY/MM/DD"
            value-format="YYYY-MM-DD"
          />
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="Adress" prop="adress">
      <el-input v-model="formState.address" />
    </el-form-item>
    <el-form-item label="Hometown" prop="hometown">
      <el-input v-model="formState.hometown" />
    </el-form-item>
    <el-form-item label="Phone number" prop="phone_number">
      <el-input v-model="formState.phone_number" type="number" />
    </el-form-item>
    <el-form-item label="Onboard date" required>
      <el-col :span="11">
        <el-form-item prop="onboard_date">
          <el-date-picker
            v-model="formState.onboard_date"
            type="date"
            placeholder="Pick a date"
            style="width: 100%"
            format="YYYY/MM/DD"
            value-format="YYYY-MM-DD"
          />
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="End date" required>
      <el-col :span="11">
        <el-form-item prop="end_date">
          <el-date-picker
            v-model="formState.end_date"
            type="date"
            placeholder="Pick a date"
            style="width: 100%"
            format="YYYY/MM/DD"
            value-format="YYYY-MM-DD"
          />
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="marital_status" prop="marital_status">
      <el-radio-group v-model="formState.marital_status">
        <el-radio :label="true">Single</el-radio>
        <el-radio :label="false">Married</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Company" prop="companys">
      <el-select
        v-model="formState.company.name"
        placeholder="Company"
        size="default"
        @change="(e: IModelIdAndName) => {formState.company = {...e}; return;}"
      >
        <el-option
          v-for="itemCompany in listCompany"
          :key="itemCompany.id"
          :label="itemCompany.name"
          :value="itemCompany"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="formState" prop="formState">
      <el-select
        v-model="formState.department.name"
        placeholder="formState"
        size="default"
        @change="(e: IModelIdAndName) => {formState.department = {...e}}"
      >
        <el-option
          v-for="list_Department in listDepartment"
          :key="list_Department.id"
          :label="list_Department.name"
          :value="list_Department"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="Position" prop="position">
      <el-select
        v-model="formState.position.name"
        placeholder="Position"
        @change="(e: IModelIdAndName) => {formState.position = {...e}}"
      >
        <el-option
          v-for="itemPosition in listPosition"
          :key="itemPosition.id"
          :label="itemPosition.name"
          :value="itemPosition"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="Level" prop="level">
      <el-select
        v-model="formState.level.name"
        placeholder="level"
        size="default"
        @change="(e: IModelIdAndName) => {formState.level = {...e}}"
      >
        <el-option v-for="itemLevel in listLevel" :key="itemLevel.id" :label="itemLevel.name" :value="itemLevel" />
      </el-select>
    </el-form-item>
    <el-form-item label="Contract" prop="contract">
      <el-select
        v-model="formState.contract.name"
        placeholder="contract"
        size="default"
        @change="(e: IModelIdAndName) => {formState.contract = {...e}}"
      >
        <el-option
          v-for="itemContract in listContract"
          :key="itemContract.id"
          :label="itemContract.name"
          :value="itemContract"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="Role" prop="role">
      <el-select
        v-model="formState.role.name"
        placeholder="role"
        size="default"
        @change="(e: IModelIdAndName) => {formState.role = {...e}}"
      >
        <el-option v-for="itemRole in ListRole" :key="itemRole.id" :label="itemRole.name" :value="itemRole" />
      </el-select>
    </el-form-item>
    <el-form-item label="Degree" prop="degree">
      <el-input v-model="formState.degree" />
    </el-form-item>
    <el-form-item label="Skill" prop="skill">
      <el-input v-model="formState.skill" />
    </el-form-item>
    <el-form-item label="Citizen ID" prop="citizen_identification">
      <el-input v-model="formState.citizen_identification" type="number" />
    </el-form-item>
    <el-form-item label="Active" prop="active">
      <el-switch v-model="formState.active" />
    </el-form-item>
    <el-form-item>
      <slot name="btn-action" :handle-create="createEmployee" :handle-update="updateEmployee"></slot>
      <el-button @click="resetFormEmployee">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import employeeMixins, { formEmployeeDefault } from '@/mixins/employee';
  import { FormInstance } from 'element-plus';
  import axios from 'axios';
  // eslint-disable-next-line no-unused-vars
  import { IModelIdAndName, IEmployeeApi } from '@/views/employee/module';

  type typeAction = 'update' | 'create';

  export default defineComponent({
    props: {
      typeAction: {
        type: Object as PropType<typeAction>,
      },
    },
    mixins: [employeeMixins()],
    methods: {
      async createEmployee () {
        if (!this.$refs.formInstace) return;
        await (this.$refs.formInstace as FormInstance).validate(async valid => {
          if (valid) {
            await axios('http://localhost:3000/employee', { method: 'POST', data: this.getDataEmployee() });
            this.resetFormEmployee();
            // handle message
          } else {
            // handle message error
          }
        });
      },

      async updateEmployee () {
        if (!this.$refs.formInstace) return;
        await (this.$refs.formInstace as FormInstance).validate(async valid => {
          if (valid) {
            await axios(`http://localhost:3000/employee/${this.idUser}`, {
              method: 'PUT',
              data: this.getDataEmployee(),
            });
            this.resetFormEmployee();
            //update list employee
            // toggle tuen off
            // custom reset when at create| update
          } else {
            // handle message error
          }
        });
      },

      resetFormEmployee () {
        // JSON.parse not is function ????
        this.formState = {
          ...formEmployeeDefault,
          company: { id: -1, name: '' },
          department: {
            id: -1,
            name: '',
          },
          position: {
            id: -1,
            name: '',
          },
          level: {
            id: -1,
            name: '',
          },
          contract: {
            id: -1,
            name: '',
          },
          role: {
            id: -1,
            name: '',
          },
        };
        (this.$refs.formInstace as FormInstance).resetFields();
      },

      getDataEmployee () {
        const model: IEmployeeApi = {
          full_name: this.formState.full_name,
          email: this.formState.email,
          code: this.formState.code,
          birthday: this.formState.birthday,
          address: this.formState.address,
          hometown: this.formState.hometown,
          phone_number: this.formState.phone_number,
          onboard_date: this.formState.onboard_date,
          end_date: this.formState.end_date,
          marital_status: this.formState.marital_status,
          degree: this.formState.degree,
          skill: this.formState.skill,
          citizen_identification: '123456123456',
          active: this.formState.active,
          gender: this.formState.gender,
          company_id: this.formState.company.id,
          department_id: this.formState.department.id,
          position_id: this.formState.position.id,
          contract_id: this.formState.contract.id,
          level_id: this.formState.level.id,
          role_id: this.formState.role.id,
        };

        return model;
      },
    },
  });
</script>

<style lang="scss">
  .demo-formState {
    max-width: 800px;
    margin: auto;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    padding: 16px;
  }
</style>
