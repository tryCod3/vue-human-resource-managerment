<template>
  <el-form :model="form" label-width="200px" label-position="left" :rules="rules">
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

    <el-form-item label="Type" prop="type_company">
      <el-input v-model="form.type_company" />
    </el-form-item>

    <el-form-item v-if="props.id === undefined">
      <el-button type="primary" @click="onSubmit">Create</el-button>
    </el-form-item>
    <el-form-item v-else>
      <el-button type="primary" class="btn-update" @click="onUpdate">Update</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
  import { reactive, ref, watchEffect } from 'vue';
  import type { FormRules } from 'element-plus';
  import { ICompanyState } from '../../module';
  import axios from 'axios';

  const props = defineProps(['id']);
  const emit = defineEmits(['handleUpdate']);

  const form = ref<ICompanyState>({
    company_name: '',
    address: '',
    phone_number: '',
    tax_code: '',
    type_company: '',
    active: false,
    // id?: number;
    // company_name: string;
    // address: string;
    // phone_number: string;
    // tax_code: string;
    // type_company: string;
    // active: boolean;
  });

  const rules = reactive<FormRules>({
    company_name: [{ required: true, message: 'Please input User MSNV', trigger: 'blur' }],
    address: [{ required: true, message: 'Please input User MSNV', trigger: 'blur' }],
    phone_number: [{ required: true, message: 'Please input User MSNV', trigger: 'blur' }],
    tax_code: [{ required: true, message: 'Please input User MSNV', trigger: 'blur' }],
    type_company: [{ required: true, message: 'Please input User MSNV', trigger: 'blur' }],
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

  const onSubmit = async () => {
    const data = {
      ...form.value,
      active: true,
    };

    await axios('http://localhost:3000/company', {
      method: 'POST',
      data,
    })
      .then(response => response)
      .then(() => {
        form.value = {
          company_name: '',
          address: '',
          phone_number: '',
          tax_code: '',
          type_company: '',
          active: false,
        };
      })
      .catch(error => {
        alert('Error: ' + error);
      });
  };

  const onUpdate = () => {
    emit('handleUpdate', form.value);
  };
</script>

<style lang="scss" scoped>
  .btn-update {
    justify-content: end;
    margin-top: 16px;
  }
</style>
