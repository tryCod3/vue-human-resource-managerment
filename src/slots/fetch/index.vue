<template>
  <section class="fetch-container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot :datas="fetch.datas" :state="fetch.state" :update="updateData" :delete="deleteData"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </section>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import axios from 'axios';
  import { IFecthPropsState, BaseFecthData, typeModule } from './module';
  import { IFecthState } from '@/store/modules/api';
  import CONSTANT_STORE from '@/constants/store';
  import store from '@/store';
  import { ElNotification, ElLoading } from 'element-plus';

  export default defineComponent({
    props: {
      fetchInfo: Object as PropType<IFecthPropsState>,
      resetField: {
        type: Function,
        default () {
          'custom reset field here';
        },
      },
    },

    data (): BaseFecthData<typeModule> {
      return {
        fetch: {
          datas: [] as typeModule[],
          state: {
            hasFetch: false,
            success: false,
            message: '',
          },
        },
      };
    },

    created () {
      this.fecthData(this.fetchInfo?.url ?? '');
    },

    methods: {
      async fecthData (url: string, method = 'get') {
        try {
          this.fetchStart();

          const result = await axios({ method, url });
          this.fetch.datas = result.data;

          this.fecthDone({
            hasFetch: false,
            success: true,
            message: 'Fetch Data success!',
          });
        } catch (err: unknown) {
          if (err instanceof Error)
            this.fecthDone({
              hasFetch: false,
              success: false,
              message: err.message,
            });
          else throw err;
        }
      },

      async updateData (target: typeModule) {
        try {
          this.fetchStart();
          await axios({
            method: 'put',
            url: `${this.fetchInfo?.url}/${target.id}`,
            data: {
              ...target,
            },
          });
          const modelUpdateInList = this.fetch.datas.findIndex(data => data.id === target.id);

          if (modelUpdateInList >= 0) {
            this.fetch.datas[modelUpdateInList] = target;
            this.resetField();
            this.fecthDone({
              hasFetch: false,
              success: true,
              message: 'Update Data success!',
            });
          } else {
            throw 'target not property id same in datas';
          }
        } catch (err: unknown) {
          if (err instanceof Error)
            this.fecthDone({
              hasFetch: false,
              success: false,
              message: err.message,
            });
          else throw err;
        }
        const loading = ElLoading.service({
          lock: true,
          text: 'Loading',
          background: 'rgba(0, 0, 0, 0.7)',
        });
        setTimeout(() => {
          loading.close();
          ElNotification({
            title: 'Success',
            message: 'Update Success!',
            type: 'success',
          });
        }, 1000);
      },

      async deleteData (id: number) {
        await axios.delete(`${this.fetchInfo?.url}/${id}`);
        this.fetch.datas = this.fetch.datas.filter(data => data.id !== id);
        const loading = ElLoading.service({
          lock: true,
          text: 'Loading',
          background: 'rgba(0, 0, 0, 0.7)',
        });
        setTimeout(() => {
          loading.close();
          ElNotification({
            title: 'Success',
            message: 'You deleted successfully',
            type: 'success',
          });
        }, 1000);
      },

      fetchStart () {
        store.dispatch(CONSTANT_STORE.API.FECTH.START.SET_WITH_NAMESPACED, {
          hasFetch: true,
          success: false,
          messageError: '',
        });
      },
      fecthDone (
        fecthState: IFecthState = {
          hasFetch: false,
          success: true,
          message: 'Fetch Data success!',
        }
      ) {
        store.dispatch(CONSTANT_STORE.API.FECTH.DONE.SET_WITH_NAMESPACED, fecthState);
      },
    },
  });
</script>

<style lang="scss" scoped>
  header {
    text-align: center;
    font-size: 2rem;
  }
  footer {
    text-align: right;
    font-size: 20px;
    margin-top: 10px;
  }
</style>
