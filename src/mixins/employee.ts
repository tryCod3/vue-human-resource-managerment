import { defineComponent } from 'vue';
import { IModelIdAndName } from '@/views/employee/module';
import { IDepartmentState } from '@/views/department/module';
import { IEmployeeForm } from '@/views/employee/module';
import { IProfileState } from '@/store/modules/user';
import CONSTANT_STORE from '@/constants/store';
import store from '@/store';
import axios from 'axios';
import { FormInstance } from 'element-plus';

export const formEmployeeDefault = {
  full_name: '',
  email: '',
  code: '',
  gender: false,
  birthday: '',
  address: '',
  hometown: '',
  phone_number: '',
  onboard_date: '',
  end_date: '',
  marital_status: false,
  company: {
    id: -1,
    name: '',
  },
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
  degree: '',
  skill: '',
  avatar: 'https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg',
  citizen_identification: '',
  active: false,
  password: '',
};

const employeeMixins = () => {
  const ruleForm: IEmployeeForm = JSON.parse(JSON.stringify(formEmployeeDefault));

  return defineComponent({
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
        formState: {
          ...ruleForm,
        },
        rules: {
          full_name: [{ required: true, message: 'Please input full name', trigger: 'blur' }],
          email: [
            { required: true, message: 'Please input email address', trigger: 'blur' },
            { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] },
          ],
          password: [
            { required: true, message: 'Please input password', trigger: 'blur' },
            { min: 6, max: 16, message: 'Password minimum 6 characters and maximum 16 characters', trigger: 'blur' },
          ],
          birthday: [{ required: true, message: 'Please input birthday', trigger: 'blur' }],
          address: [{ required: true, message: 'Please input address', trigger: 'blur' }],
          hometown: [{ required: true, message: 'Please input hometown', trigger: 'blur' }],
          department: [{ required: true, message: 'Please select Department', trigger: 'change' }],
          phone_number: [
            { required: true, message: 'Please input phone number', trigger: 'blur' },
            { min: 10, max: 10, message: 'Phone number must be 10 digits', trigger: 'blur' },
          ],
          onboard_date: [{ type: 'date', required: true, message: 'Please pick a date', trigger: 'blur' }],
          end_date: [{ type: 'date', required: true, message: 'Please pick a date', trigger: 'blur' }],
          position: [{ required: true, message: 'Please select position', trigger: 'change' }],
          company: [{ required: true, message: 'Please select company', trigger: 'change' }],
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
        return this.formState.company;
      },
      idUser () {
        return this.$route.params.id;
      },
    },

    watch: {
      company: {
        async handler (newValue: IModelIdAndName) {
          if (!newValue || !newValue.id || typeof newValue.id !== 'number' || newValue.id < 0) return;
          this.fetchDepartmentForCompany(newValue.id);
        },
      },

      idUser: {
        async handler (value: string) {
          if (!value) return;

          const res = await axios.get(`http://localhost:3000/employee_querys/${value}`);

          if (res.status === 200) {
            const employee = res.data;

            this.formState.full_name = employee.full_name;
            this.formState.email = employee.email;
            this.formState.code = employee.code;
            this.formState.birthday = employee.birthday;
            this.formState.address = employee.address;
            this.formState.hometown = employee.hometown;
            this.formState.phone_number = employee.phone_number;
            this.formState.onboard_date = employee.onboard_date;
            this.formState.end_date = employee.end_date;
            this.formState.marital_status = employee.marital_status;
            this.formState.degree = employee.degree;
            this.formState.skill = employee.skill;

            this.formState.citizen_identification = '123456123456';
            this.formState.active = employee.id % 2 === 0;
            this.formState.gender = employee.gender === 'Male';

            (this.formState.position = {
              id: employee.position.id,
              name: employee.position.name,
            }),
              (this.formState.level = {
                id: employee.level.id,
                name: employee.level.name,
              }),
              (this.formState.contract = {
                id: employee.contract.id,
                name: employee.contract.name,
              }),
              (this.formState.role = {
                id: employee.role.id,
                name: employee.role.name,
              }),
              (this.formState.department = {
                id: employee.department.id,
                name: employee.department.name,
              }),
              (this.formState.company = {
                id: employee.companies[0].id,
                name: employee.companies[0].company_name,
              });
          } else {
            alert('ERROR call api name "employee_querys" not working, check it!');
          }
        },
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
      async fetchDepartmentForCompany (idCompany: number | undefined) {
        if (idCompany === undefined || idCompany < 0) return;

        const res = await axios.get(`http://localhost:3000/company_departments/${idCompany}`);

        if (res.status === 200) this.listDepartment = res.data.department_infos;
        else alert('ERROR call api name "company_departments" not working, check it!');
      },

      handleResetEmployee () {
        if (!this.$refs.formInstace) return;
        (this.$refs.formInstace as FormInstance).resetFields();
        this.formState = { ...ruleForm };
      },
    },
  });
};

export default employeeMixins;
