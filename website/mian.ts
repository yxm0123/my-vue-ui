import { createApp } from "vue";
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// import myUI from '../dist/button'
createApp(App).use(ElementPlus).mount('#app')