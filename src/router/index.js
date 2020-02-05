import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
  routes: [{
    path: '/',
    name: 'tip',
    component: () => import('../views/index.vue')
  }, {
    path: '/info',
    name: 'info',
    component: () => import('../views/info.vue')
  }, {
    path: '*',
    redirect: '/'
  }]
})
export default router
