/*
 * @Description: 
 * @Version: 2.0
 * @Autor: zhangyi
 * @Date: 2020-11-10 13:54:54
 * @LastEditors: zhangyi
 * @LastEditTime: 2020-11-10 13:55:22
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/Home/HomeMain.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
   if(to.path === '/') {
     next({ path: '/home' })
   } else {
      next()
   }
})

export default router;