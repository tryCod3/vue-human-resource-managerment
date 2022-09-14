import { createApp } from 'vue';
import App from './App.vue';
import store from '@/store';
import router from '@/router';
import '@/router/permission';

import ElementPlus from 'element-plus';
import { VueSvgIconPlugin } from '@yzfe/vue3-svgicon';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

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
app.use(store);

for (const [name, comp] of Object.entries(ElementPlusIconsVue)) app.component(name, comp);

app.mount('#app');
