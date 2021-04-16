import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';

import base from './public/base'
import axios from './axios'

Vue.use(base)
Vue.prototype.axios = axios

Vue.config.productionTip = false
NutUI.install(Vue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
