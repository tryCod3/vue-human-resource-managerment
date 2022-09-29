<template>
  <section class="employee_container">
    <FetchApi :fetch-info="fetchInfo">
      <template #header> List Employee </template>

      <template #default="_scope">
        <el-dialog v-model="dialogVisibleUpdate" title="Update Employee" width="30%" draggable @close="resetField">
          <employeeUpdate :id="idHandel" @updateApi="_scope.updateApi" @updateList="_scope.updateList" />
        </el-dialog>
        <el-table :data="_scope.datas" border style="width: 100%">
          <el-table-column type="expand">
            <template #default="props">
              <div class="informarion">
                <div class="profile-company">
                  <header class="title">
                    <el-icon><Grid /></el-icon>
                    <span> Working Company </span>
                  </header>
                  <el-table :data="props.row.companies" border>
                    <el-table-column label="Company Name" prop="company_name" />
                    <el-table-column label="Company Type" prop="type_company" />
                    <el-table-column label="Tax Code" prop="tax_code" />
                    <el-table-column label="Active" prop="active" />
                  </el-table>
                </div>

                <div>
                  <header class="title">
                    <el-icon><Grid /></el-icon>
                    <span> Employee Infirmation </span>
                  </header>

                  <div class="profile_employee">
                    <div>
                      <header>
                        <el-icon><UserFilled /></el-icon>
                      </header>
                      <ul>
                        <li m="t-0 b-2">
                          <span>Id Employee : </span>
                          <p>
                            {{ props.row.id }}
                          </p>
                        </li>
                        <li m="t-0 b-2">
                          <span>Full Name : </span>
                          <p>
                            {{ props.row.full_name }}
                          </p>
                        </li>
                        <li m="t-0 b-2">
                          <span>Birday : </span>
                          <p>
                            {{ props.row.birthday }}
                          </p>
                        </li>
                        <li m="t-0 b-2">
                          <span>Marital : </span>
                          <p>
                            {{ props.row.marital_status ? 'Đã kết hôn' : 'Chưa kết hôn' }}
                          </p>
                        </li>
                        <li m="t-0 b-2">
                          <span>Phone : </span>
                          <p>
                            {{ props.row.phone_number }}
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <header>
                        <el-icon><HomeFilled /></el-icon>
                      </header>
                      <ul>
                        <li m="t-0 b-2">
                          <span>Address : </span>
                          <p>
                            {{ props.row.address }}
                          </p>
                        </li>

                        <li m="t-0 b-2">
                          <span>HomeTown : </span>
                          <p>
                            {{ props.row.hometown }}
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <header>
                        <el-icon><Briefcase /></el-icon>
                      </header>
                      <ul>
                        <li m="t-0 b-2">
                          <span>Position : </span>
                          <p>
                            <Tags :tags="props.row.position.name" />
                          </p>
                        </li>

                        <li m="t-0 b-2">
                          <span>Level : </span>
                          <Tags :tags="props.row.level.name" />
                        </li>

                        <li m="t-0 b-2">
                          <span>Role : </span>
                          <Tags :tags="props.row.role.name" />
                        </li>

                        <li m="t-0 b-2">
                          <span>Skill : </span>
                          <Tags :tags="props.row.skill" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </el-table-column>

          <el-table-column label="Onboard Date" prop="onboard_date" />
          <el-table-column label="Email" prop="email" />
          <el-table-column label="Gender" prop="gender" />
          <el-table-column label="Code" prop="code" />

          <el-table-column align="right">
            <template #header>
              <el-input size="small" placeholder="Type to search" />
            </template>
            <template #default="scope">
              <el-button size="small" @click="handleEditEmployee(scope.$index, scope.row)">Edit</el-button>
              <el-button size="small" type="danger">Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <template #footer> phân trang hay làm 1 cái gì đó </template>
    </FetchApi>
  </section>
</template>

<script lang="ts">
  import { IEmployeeState } from '@/views/employee/module';
  import { defineComponent } from 'vue';
  import FetchApi from '@/slots/fetch/index.vue';
  import employeeUpdate from '../update/index.vue';
  import Tags from '@/components/tag/index.vue';

  export default defineComponent({
    components: {
      employeeUpdate,
      FetchApi,
      Tags,
    },
    data () {
      return {
        list_employee: [] as IEmployeeState[],
        fetchInfo: {
          url: 'http://localhost:3000/employee_querys',
        },
        dialogVisibleUpdate: false,
        idHandel: -1,
      };
    },
    methods: {
      handleEditEmployee (index: number, model: IEmployeeState) {
        this.dialogVisibleUpdate = true;
        this.$router.replace(`/employee/list/edit/${model.id}`);
        this.idHandel = model?.id ?? -1;
      },
      resetField () {
        this.dialogVisibleUpdate = false;
        this.$router.replace(`/employee/list`);
        this.idHandel = -1;
      },
    },
  });
</script>

<style lang="scss" scoped>
  .informarion {
    margin: 50px;
    margin-top: 10px;
    padding-left: 20px;
    border-left: 2px dotted blue;
    margin-bottom: 40px;

    .profile-company {
      margin-bottom: 40px;
    }
    .profile_employee {
      display: flex;
      width: 60%;
      justify-content: space-around;
      margin: auto;

      ul {
        list-style: none;
        li {
          padding: 5px;
          display: flex;
          align-items: center;
          span {
            font-size: 18px;
            font-weight: 500 !important;
            margin-right: 5px;
            min-width: 120px;
            max-width: 120px;
          }
        }
      }
    }

    .title {
      span {
        font-size: 20px;
        color: blue;
      }
    }
  }
</style>
