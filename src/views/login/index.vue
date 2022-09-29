<script lang="ts" set>
  import { defineComponent } from 'vue';
  import store from '@/store';
  import CONSTANT_STORE from '@/constants/store';
  import axios from 'axios';
  import { IProfileState } from '@/store/modules/user';
  import { ElNotification } from 'element-plus';
  import LoadingSlot from '@/slots/loading/index.vue';

  export default defineComponent({
    name: 'Login',
    components: {
      LoadingSlot,
    },
    data () {
      return {
        input: {
          email: 'test@example.com',
          password: '12345678',
        },
      };
    },
    methods: {
      login () {
        const data = this.input;

        store.dispatch(CONSTANT_STORE.API.FECTH.START.SET_WITH_NAMESPACED, {
          hasFetch: true,
          success: false,
          messageError: '',
        });

        axios({
          method: 'post',
          url: 'https://082b-203-205-53-11.ap.ngrok.io/users/sign_in',
          data: { user: data },
        })
          .then(res => {
            return res.data;
          })
          .then(data => {
            if (data.data.current_user) {
              const convertData: IProfileState = {
                accessToken: data.token,
                user: {
                  id: data.data.current_user.id,
                  email: data.data.current_user.email,
                  roles: ['employee'],
                },
              };
              store.dispatch(CONSTANT_STORE.USER.PROFILE.SET_WITH_NAMESPACED, convertData);
              store.dispatch(CONSTANT_STORE.USER.LOGIN.SET_WITH_NAMESPACED, true);
              ElNotification({
                title: 'Success',
                message: data.message,
                type: 'success',
              });
              this.$router.push('/');
            } else {
              alert(data.message);
            }
          })
          .catch(error => {
            alert('The server is currently not working, ' + error.message);
          })
          .finally(() => {
            setTimeout(() => {
              const fecthState = {
                hasFetch: false,
                success: true,
                message: 'Fetch Data success!',
              };
              store.dispatch(CONSTANT_STORE.API.FECTH.DONE.SET_WITH_NAMESPACED, fecthState);
            }, 2000);
          });
      },
    },
  });
</script>

<template>
  <div class="login-box">
    <h2>Login</h2>
    <form>
      <div class="user-box">
        <input v-model="input.email" type="text" required="true" />
        <label>Email</label>
      </div>
      <div class="user-box">
        <input v-model="input.password" type="password" required="true" />
        <label>Password</label>
      </div>
      <div class="user-action">
        <button type="button" @click="login()">Login</button>
        <LoadingSlot />
      </div>
    </form>
  </div>
</template>

<style lang="scss">
  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
  }

  .login-box h2 {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
  }

  .login-box .user-box {
    position: relative;
  }

  .login-box .user-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
  }
  .login-box .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: 0.5s;
  }

  .login-box .user-box input:focus ~ label,
  .login-box .user-box input:valid ~ label {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
  }

  .login-box form button {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #03e9f4;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    letter-spacing: 4px;
    outline: none;
    border: none;
    background: transparent;
  }

  .login-box button:hover {
    background: #03e9f4;
    color: #fff;

    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4;
  }

  .login-box .user-action {
    display: flex;
    align-items: e;
  }
</style>
