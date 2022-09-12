<template>
  <el-form ref="ruleFormRef" :model="dataFrom" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
    <el-form-item label="Password" prop="pass">
      <el-input v-model="dataFrom.pass" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item label="Confirm" prop="checkPass">
      <el-input v-model="dataFrom.checkPass" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item label="Age" prop="age">
      <el-input v-model.number="dataFrom.age" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
  import { ref, reactive } from 'vue';
  import { submitForm, resetForm } from './module/method';

  const ruleFormRef = ref();

  const dataFrom = reactive({
    pass: '',
    checkPass: '',
    age: '',
  });

  const validatePass = (rule, value, callback) => {
    if (value === '') 
callback(new Error('Please input not empty'));
    else 
callback();
  };

  const validateCheckPass = (rule, value, callback) => {
    if (value !== dataFrom.pass) 
callback(new Error('Re-Password not same Password'));
    else 
callback();
  };

  const rules = reactive({
    pass: [{ validator: validatePass, trigger: 'blur' }],
    checkPass: [{ validator: validateCheckPass, trigger: 'blur' }],
  });
</script>
