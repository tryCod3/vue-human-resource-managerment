<template>
  <section class="fetch-container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot
        :datas="fetch.datas"
        :state="fetch.state"
        :update-api="updateDataApi"
        :update-list="updateDataWithID"
        :delete="deleteData"
      ></slot>
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
  import { ElNotification } from 'element-plus';
  import { h } from 'vue';

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

      updateDataWithID (target: typeModule, idTarget?: number) {
        const id = idTarget ?? target.id;

        const modelUpdateInList = this.fetch.datas.findIndex(data => data.id === id);
        if (modelUpdateInList >= 0) this.fetch.datas[modelUpdateInList] = target;
        else
          ElNotification({
            title: 'updateDataWithID Employee',
            message: h('i', { style: 'color: teal' }, 'Update List not working!'),
          });
      },

      async updateDataApi (target: typeModule, url: string) {
        try {
          this.fetchStart();

          await axios({
            method: 'put',
            url,
            data: {
              ...target,
            },
          });

          this.fecthDone({
            hasFetch: false,
            success: true,
            message: 'Update Data success!',
          });

          ElNotification({
            title: 'Update Employee',
            message: h('i', { style: 'color: teal' }, 'Update Data Success!'),
          });
        } catch (err: unknown) {
          if (err instanceof Error) {
            this.fecthDone({
              hasFetch: false,
              success: false,
              message: err.message,
            });

            ElNotification({
              title: 'Update Employee',
              message: h('i', { style: 'color: teal' }, 'Update Data Api not working!' + err.message),
            });
          } else {
            throw err;
          }
        }
      },

      async deleteData (id: number) {
        await axios.delete(`${this.fetchInfo?.url}/${id}`);
        this.fetch.datas = this.fetch.datas.filter(data => data.id !== id);
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
