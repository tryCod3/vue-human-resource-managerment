<script lang="ts">
  export default {};
</script>

<template>
  <el-form :model="form" label-width="150px" label-position="left" :rules="rules">
    <el-form-item label="User MSNV" prop="user_msnv">
      <el-input v-model="form.user_msnv" />
    </el-form-item>

    <el-form-item label="Department ID" prop="department_id">
      <el-input v-model="form.department_id" />
    </el-form-item>

    <el-form-item label="Company Name" prop="company_name">
      <el-input v-model="form.company_name" />
    </el-form-item>

    <el-form-item label="Address" prop="address">
      <el-input v-model="form.address" />
    </el-form-item>

    <el-form-item label="PhoneNumber" prop="phone_number">
      <el-input v-model="form.phone_number" />
    </el-form-item>

    <el-form-item label="TaxCode" prop="tax_code">
      <el-input v-model="form.tax_code" />
    </el-form-item>

    <el-form-item label="Type" prop="type">
      <el-input v-model="form.type" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import type { FormRules } from 'element-plus';

  const form = ref({
    user_msnv: '',
    department_id: 0,
    company_name: '',
    address: '',
    phone_number: '',
    tax_code: '',
    type: '',
    active: false,
  });

  const rules = reactive<FormRules>({
    user_msnv: [{ required: true, message: 'Please input User MSNV', trigger: 'blur' }],
    department_id: [{ required: true, message: 'Please input User MSNV', trigger: 'blur' }],
    company_name: [{ required: true, message: 'Please input User MSNV', trigger: 'blur' }],
    address: [{ required: true, message: 'Please input User MSNV', trigger: 'blur' }],
    phone_number: [{ required: true, message: 'Please input User MSNV', trigger: 'blur' }],
    tax_code: [{ required: true, message: 'Please input User MSNV', trigger: 'blur' }],
    type: [{ required: true, message: 'Please input User MSNV', trigger: 'blur' }],
  });

  const onSubmit = () => {
    const data = {
      ...form.value,
      active: true,
    };

    fetch('http://localhost:3000/company', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        form.value = {
          user_msnv: '',
          department_id: 0,
          company_name: '',
          address: '',
          phone_number: '',
          tax_code: '',
          type: '',
          active: false,
        };
      })
      .catch(error => {
        alert('Error: ' + error);
      });
  };
</script>

<style lang="scss" scoped></style>
