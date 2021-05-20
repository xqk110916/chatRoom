import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';

import base from './public/base'
import vuexMsg from './public/vuex-msg'
import httpRequest from './public/httpRequest'
import sendRequest from './public/sendRequest'
import axios from './axios'

Vue.use(base)
Vue.use(vuexMsg)
Vue.use(httpRequest)
Vue.use(sendRequest)
Vue.prototype.axios = axios

Vue.config.productionTip = false
NutUI.install(Vue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
