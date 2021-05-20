import axios from '@/axios'

function get(url, params) {
  return axios.get(url, { params })
  .then(result => {
    return result
  })
  .catch(err => {
    throw err
  })
}

function post(url, params) {
  if(!this.XGetToken()) {
    this.$notify.danger('未登陆或登陆过期, 请重新登陆...')
    setTimeout(() => { this.$router.push('/login') }, 600)
    return new Promise((resolve, reject) => reject())
  }
  return axios.post(url, params)
  .then(result => {
    return result
  })
  .catch(err => {
    throw err
  })
}

const install = function(Vue, ops) {
  Vue.prototype.get = get
  Vue.prototype.post = post
}

export default install