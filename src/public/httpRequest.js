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