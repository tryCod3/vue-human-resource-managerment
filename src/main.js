import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import { VueSvgIconPlugin } from '@yzfe/vue3-svgicon';
import App from './App.vue';
import router from '@/router';

import '@yzfe/svgicon/lib/svgicon.css';
import 'element-plus/dist/index.css';
import './index.scss';

const app = createApp(App);

app.use(ElementPlus, {
  size: 'medium',
});

app.use(VueSvgIconPlugin, {
  tagName: 'icon',
});

app.use(router);

app.mount('#app');
