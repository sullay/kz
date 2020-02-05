import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import GlobalConfig from './config'
import './plugins/element.js'
import './assets/css/main.css'
import filters from './plugins/filters'

Vue.use(GlobalConfig)
Vue.use(filters)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
