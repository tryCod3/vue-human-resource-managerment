<template>
  <el-form ref="formInstace" :model="department" :rules="rules" label-width="150px" class="demo-department" status-icon>
    <el-form-item label="Full name" prop="full_name">
      <el-input v-model="department.full_name" />
    </el-form-item>
    <el-form-item label="Email" prop="email">
      <el-input v-model="department.email" />
    </el-form-item>
    <el-form-item label="Code" prop="code">
      <el-input v-model="department.code" />
    </el-form-item>
    <el-form-item label="Password" prop="encrypted_password">
      <el-input v-model="department.encrypted_password" type="password" show-password />
    </el-form-item>
    <el-form-item label="Gender" prop="gender">
      <el-radio-group v-model="department.gender">
        <el-radio :label="true">Male</el-radio>
        <el-radio :label="false">Female</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Birtday" required>
      <el-col :span="11">
        <el-form-item prop="birtday">
          <el-date-picker
            v-model="department.birtday"
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
      <el-input v-model="department.adress" />
    </el-form-item>
    <el-form-item label="Hometown" prop="hometown">
      <el-input v-model="department.hometown" />
    </el-form-item>
    <el-form-item label="Phone number" prop="phone_number">
      <el-input v-model="department.phone_number" type="number" />
    </el-form-item>
    <el-form-item label="Onboard date" required>
      <el-col :span="11">
        <el-form-item prop="onboard_date">
          <el-date-picker
            v-model="department.onboard_date"
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
            v-model="department.end_date"
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
      <el-radio-group v-model="department.marital_status">
        <el-radio :label="true">Single</el-radio>
        <el-radio :label="false">Married</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Company" prop="companys">
      <el-select v-model="department.companys" placeholder="Company">
        <el-option
          v-for="itemCompany in listCompany"
          :key="itemCompany.id"
          :label="itemCompany.name"
          :value="itemCompany.id"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="Department" prop="department">
      <el-select v-model="department.department" placeholder="Department">
        <el-option
          v-for="listCompany in listDepartment"
          :key="listCompany.id"
          :label="listCompany.name"
          :value="listCompany.id"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="Position" prop="position">
      <el-select v-model="department.position" placeholder="Position">
        <el-option
          v-for="itemPosition in listPosition"
          :key="itemPosition.id"
          :label="itemPosition.name"
          :value="itemPosition.id"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="Level" prop="level">
      <el-select v-model="department.level" placeholder="level">
        <el-option v-for="itemLevel in listLevel" :key="itemLevel.id" :label="itemLevel.name" :value="itemLevel.id" />
      </el-select>
    </el-form-item>
    <el-form-item label="Contract" prop="contract">
      <el-select v-model="department.contract" placeholder="contract">
        <el-option
          v-for="itemContract in listContract"
          :key="itemContract.id"
          :label="itemContract.name"
          :value="itemContract.id"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="Role" prop="role">
      <el-select v-model="department.role" placeholder="role">
        <el-option v-for="itemRole in ListRole" :key="itemRole.id" :label="itemRole.name" :value="itemRole.id" />
      </el-select>
    </el-form-item>
    <el-form-item label="Degree" prop="degree">
      <el-input v-model="department.degree" />
    </el-form-item>
    <el-form-item label="Skill" prop="skill">
      <el-input v-model="department.skill" />
    </el-form-item>
    <el-form-item label="Citizen ID" prop="citizen_identification">
      <el-input v-model="department.citizen_identification" type="number" />
    </el-form-item>
    <el-form-item label="Active" prop="active">
      <el-switch v-model="department.active" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleCreateEmployee()">Create</el-button>
      <el-button @click="handleResetEmployee()">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import type { FormInstance } from 'element-plus';
  import { IModelIdAndName } from '../../module';
  import { IDepartmentState } from '../../../department/module';
  import axios from 'axios';
  import { IProfileState } from '@/store/modules/user';
  import store from '@/store';
  import CONSTANT_STORE from '@/constants/store';
  import { ElNotification, ElLoading } from 'element-plus';

  const ruleForm = {
    full_name: 'Full Name',
    email: 'fullname@gmail.com',
    code: 'NVSTT',
    encrypted_password: '123456',
    gender: true,
    birtday: '',
    adress: 'Da Nang',
    hometown: 'Viet Nam',
    phone_number: '1234567890',
    onboard_date: '',
    end_date: '',
    marital_status: false,
    companys: '',
    department: '',
    position: '',
    level: '',
    contract: '',
    role: '',
    degree: 'Hop Dong Lao Dong',
    skill: 'Vue, Js, React, Java, Nodejs',
    avatar: 'https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg',
    citizen_identification: '123456123456',
    active: false,
  };
  export default defineComponent({
    data () {
      return {
        listDepartment: [] as IDepartmentState[],
        listCompany: [] as IModelIdAndName[],
        listPosition: [] as IModelIdAndName[],
        listLevel: [] as IModelIdAndName[],
        listContract: [] as IModelIdAndName[],
        ListRole: [] as IModelIdAndName[],
        companySelected: '',
        tokens: '',
        department: {
          ...ruleForm,
        },
        rules: {
          full_name: [{ required: true, message: 'Please input full name', trigger: 'blur' }],
          encrypted_password: [
            { required: true, message: 'Please input password', trigger: 'blur' },
            { min: 6, max: 16, message: 'Password minimum 6 characters and maximum 16 characters', trigger: 'blur' },
          ],
          email: [
            { required: true, message: 'Please input email address', trigger: 'blur' },
            { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] },
          ],
          birtday: [{ required: true, message: 'Please input birtday', trigger: 'blur' }],
          adress: [{ required: true, message: 'Please input adress', trigger: 'blur' }],
          hometown: [{ required: true, message: 'Please input hometown', trigger: 'blur' }],
          department: [{ required: true, message: 'Please select Department', trigger: 'change' }],
          phone_number: [
            { required: true, message: 'Please input phone number', trigger: 'blur' },
            { min: 10, max: 10, message: 'Phone number must be 10 digits', trigger: 'blur' },
          ],
          onboard_date: [{ type: 'date', required: true, message: 'Please pick a date', trigger: 'blur' }],
          end_date: [{ type: 'date', required: true, message: 'Please pick a date', trigger: 'blur' }],
          position: [{ required: true, message: 'Please select position', trigger: 'change' }],
          companys: [{ required: true, message: 'Please select companys', trigger: 'change' }],
          level: [{ required: true, message: 'Please select level', trigger: 'change' }],
          contract: [{ required: true, message: 'Please select contract', trigger: 'change' }],
          role: [{ required: true, message: 'Please select role', trigger: 'change' }],
          degree: [{ required: true, message: 'Please input degree', trigger: 'change' }],
          skill: [{ required: true, message: 'Please input skill', trigger: 'blur' }],
          citizen_identification: [
            { required: true, message: 'Please input citizen id', trigger: 'blur' },
            { min: 12, max: 12, message: 'Phone number must be 12 digits', trigger: 'blur' },
          ],
        },
      };
    },
    computed: {
      company () {
        return this.department.companys;
      },
    },
    watch: {
      company: {
        async handler (newValue: number) {
          if (!newValue) return;
          const dataDepartment_company = await axios.get(`http://localhost:3000/company_departments/${newValue}`);
          this.listDepartment = dataDepartment_company.data.department_infos;
        },
        immediate: true,
      },
    },
    async created () {
      const account: IProfileState = store.getters[CONSTANT_STORE.USER.PROFILE.GET_WITH_NAMESPACED];
      // List user-companys
      const dataUser_company = await axios.get(`http://localhost:3000/user_companys/${account.user.id}`);
      this.listCompany = dataUser_company.data.company_infos;
      // List positions
      const dataPosition = await axios.get('http://localhost:3000/position');
      this.listPosition = dataPosition.data;
      // List levels
      const dataLevel = await axios.get('http://localhost:3000/level');
      this.listLevel = dataLevel.data;
      // List contracts
      const dataContract = await axios.get('http://localhost:3000/contract');
      this.listContract = dataContract.data;
      // List roles
      const dataRole = await axios.get('http://localhost:3000/role');
      this.ListRole = dataRole.data;
    },
    methods: {
      async handleCreateEmployee () {
        if (!this.$refs.formInstace) return;
        await (this.$refs.formInstace as FormInstance).validate(async valid => {
          if (valid) {
            const data = {
              ...this.department,
            };
            await axios('http://localhost:3000/employee', { method: 'POST', data });

            (this.$refs.formInstace as FormInstance).resetFields();
          }
        });
        const loading = ElLoading.service({
          lock: true,
          text: 'Loading',
          background: 'rgba(0, 0, 0, 0.7)',
        });
        setTimeout(() => {
          loading.close();
          ElNotification({
            title: 'Success',
            message: 'You created successfully',
            type: 'success',
          });
        }, 2000);
      },
      handleResetEmployee () {
        if (!this.$refs.formInstace) return;
        (this.$refs.formInstace as FormInstance).resetFields();
        this.department = { ...ruleForm };
      },
      generate (entry: any) {
        entry.token = Math.random().toString(36).slice(2);
      },
    },
  });
</script>

<style lang="scss" scoped>
  .demo-department {
    max-width: 800px;
    margin: auto;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    padding: 16px;
  }
</style>
