import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import * as echarts from 'echarts'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.prototype.$echarts = echarts;
axios.defaults.baseURL = 'https://9601fded-b996-4bf4-9c39-e1b5b91d1f2c.mock.pstmn.io/';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
