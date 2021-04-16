import axios from 'axios'
import router from '@/router/index'
import Vue from 'vue'
import NutUI from '@nutui/nutui'
NutUI.install(Vue)
const vm = new Vue()

axios.defaults.baseURL = "http://172.29.32.122:3000"
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  if (!response.data.success) {
    vm.$notify.danger(response.data.errorInfo)
  }
  return response.data
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
export default axios