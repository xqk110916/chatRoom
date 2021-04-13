function clone(params) {
  const data = Array.isArray(params) ? [] : {}
  for(let key in params) {
    data[key] = params[key]
  } 
  return data
}

const install = function(Vue, ops) {
  Vue.prototype.clone = clone
}

export default install