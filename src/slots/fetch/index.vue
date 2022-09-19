<template>
  <section class="fetch-container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot :datas="fetch.datas" :state="fetch.state"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </section>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import axios from 'axios';
  import { IFecthPropsState, BaseFecthData, typeModule, IFecthState } from './module';

  export default defineComponent({
    props: {
      fetchInfo: Object as PropType<IFecthPropsState>,
    },

    data (): BaseFecthData<typeModule> {
      return {
        fetch: {
          datas: [] as typeModule[],
          state: {
            hasFetch: false,
            success: false,
            messageError: '',
          },
        },
      };
    },

    created () {
      this.fecthData(this.fetchInfo?.url ?? '');
    },

    methods: {
      async fecthData (url: string) {
        try {
          this.fetchStart();
          const result = await axios.get(url);
          this.fetch.datas = result.data;
          this.fecthDone({
            hasFetch: false,
            success: true,
            messageError: 'Fetch Data success!',
          });
        } catch (err: unknown) {
          if (err instanceof Error)
            this.fecthDone({
              hasFetch: false,
              success: false,
              messageError: err.message,
            });
          else throw err;
        }
      },
      fetchStart () {
        this.fetch.state.hasFetch = false;
        this.fetch.state.success = false;
        this.fetch.state.messageError = '';
      },
      fecthDone (fecthState: IFecthState) {
        this.fetch.state = { ...fecthState };
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
