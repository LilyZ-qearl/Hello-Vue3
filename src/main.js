/*
 * @Description: main.js
 * @Version: 2.0
 * @Autor: zhangyi
 * @Date: 2020-11-06 16:28:51
 * @LastEditors: zhangyi
 * @LastEditTime: 2020-11-10 13:59:24
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import store from './store/store';

createApp(App).use(router).use(store).mount('#app')
