<template>
  <div class="container">
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <el-menu-item index="1">
        <span>Edit Profile</span>
      </el-menu-item>
      <el-menu-item index="2">
        <span>Change Password</span>
      </el-menu-item>
    </el-menu>
    <el-form :model="formInline" class="form-profile-user" label-width="150px">
      <el-form-item>
        <div class="avatar">
          <el-avatar
            src="https://cdn.tgdd.vn/Files/2014/03/10/536997/ImageAttach/HTC-One-M8-stock-wallpapers-12-2014310195742.jpg"
            class="avatar-img"
          />
        </div>
      </el-form-item>
      <el-form-item label="Full Name">
        <el-input v-model="formInline.full_name" disabled />
      </el-form-item>
      <el-form-item label="Phone Number">
        <el-input v-model="formInline.phone_number" disabled />
      </el-form-item>
      <el-form-item label="Birthday">
        <el-input v-model="formInline.birthday" disabled />
      </el-form-item>
      <el-form-item label="Address">
        <el-input v-model="formInline.address" disabled />
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="formInline.email" disabled />
      </el-form-item>
      <el-form-item label="Department Name">
        <el-input v-model="formInline.department.name" disabled />
      </el-form-item>
      <el-form-item label="Level Name">
        <el-input v-model="formInline.level.name" disabled />
      </el-form-item>
      <el-form-item label="Degree">
        <el-input v-model="formInline.degree" disabled />
      </el-form-item>
      <el-form-item label="Skill">
        <el-input v-model="formInline.skill" disabled />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import axios from 'axios';
  import { IEmployeeState, IModelIdAndName } from '../../module';
  import { IDepartmentState } from '@/views/department/module';

  const formInline = ref<IEmployeeState>({
    full_name: '',
    phone_number: '',
    birthday: '',
    address: '',
    email: '',
    department: {} as IDepartmentState,
    level: {} as IModelIdAndName,
    degree: '',
    skill: '',
  });

  onMounted(async () => {
    const url = 'http://localhost:3000/user_detail';
    const res = await axios.get(url);
    formInline.value = res.data;
  });
</script>

<style lang="scss">
  .container {
    display: flex;

    .form-profile-user {
      padding: 0 112px;
      width: 100%;

      .avatar {
        width: 100%;
        height: 80px;
      }
      text-align: center;

      .avatar-img {
        height: 80px;
        width: 80px;
      }
    }
  }
</style>
