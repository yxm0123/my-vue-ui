import { createApp } from "vue";
import App from './App.vue';
import myUI from 'my-ui';
// import myUI from '../dist/index.esm.js'
createApp(App).use(myUI).mount('#app')