<template>
  <el-form :model="form" label-width="220px" label-position="left">
    <el-form-item label="Active:">
      <p>{{ form.active ? 'Active' : 'Inactive' }}</p>
    </el-form-item>

    <el-table :data="form.company" stripe style="width: 100%">
      <el-table-column label="Date Creare Department" prop="created_at" width="300" />

      <el-table-column label="Company Name" prop="name" />
    </el-table>
  </el-form>
</template>

<script lang="ts" setup>
  import { ref, watchEffect } from 'vue';
  import { useRoute } from 'vue-router';
  import { IDepartmentState } from '../../module';
  const route = useRoute();

  const form = ref<IDepartmentState>({
    name: '',
    active: false,
    company: [],
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
    if (route.params.id && +route.params.id > 0) {
      const url = `http://localhost:3000/department_list/${route.params.id}`;
      const res = await fetchData(url);
      if (res) form.value = res;
    }
  });
</script>

<style lang="scss">
  .el-form--label-left .el-form-item__label {
    justify-content: flex-end;
    font-size: 18px;
    font-weight: 500;
  }
  .el-form-item__content {
    margin-left: 24px;
  }
</style>
