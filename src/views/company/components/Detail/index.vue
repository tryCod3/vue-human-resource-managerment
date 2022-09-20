<template>
  <el-form :model="form" label-width="150px" label-position="left">
    <el-form-item label="User msnv">
      <el-input v-model="form.user_msnv" disabled />
    </el-form-item>
    <el-form-item label="Department name">
      <el-input v-model="form.department_name" disabled />
    </el-form-item>
    <el-form-item label="Company name">
      <el-input v-model="form.company_name" disabled />
    </el-form-item>
    <el-form-item label="Address">
      <el-input v-model="form.address" disabled />
    </el-form-item>
    <el-form-item label="Phone number">
      <el-input v-model="form.phone_number" disabled />
    </el-form-item>
    <el-form-item label="Type">
      <el-input v-model="form.type" disabled />
    </el-form-item>
    <el-form-item label="Tax code">
      <el-input v-model="form.tax_code" disabled />
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
  import { ref, watchEffect } from 'vue';
  import { ICompanyState } from '../../module';

  const props = defineProps(['id']);

  const form = ref<ICompanyState>({
    user_msnv: '',
    department_name: '',
    company_name: '',
    address: '',
    phone_number: '',
    tax_code: '',
    type: '',
    active: false,
  });
  const fetchData = async (url: string) => {
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(error => {
        alert('Error: ' + error);
        return false;
      });
  };

  watchEffect(async () => {
    if (props.id && props.id > 0) {
      const url = `http://localhost:3000/company/${props.id}`;
      const res = await fetchData(url);
      if (res) form.value = res;
    }
  });
</script>

<style lang="scss" scoped></style>
