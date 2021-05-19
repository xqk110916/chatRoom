function clone(params) {
  const data = Array.isArray(params) ? [] : {}
  for(let key in params) {
    data[key] = params[key]
  } 
  return data
}

function emptyObject(params) { // params: 需要清空的对象;
  for(let key in params) {
    let type = typeof params[key]
    switch(type) {
      case 'string':
        params[key] = ''
        break;
      case 'number':
        params[key] = 0
        break;
      case 'object':
        if(params[key] instanceof Array) {
          params[key] = []
        } else if(params[key] instanceof Date) {
          params[key] = ''
        } else {
          params[key] = emptyObject(params[key])
        }
    }
  }
  return params
}

function test() {
  console.log(this.post)
}

const install = function(Vue, ops) {
  Vue.prototype.clone = clone
  Vue.prototype.emptyObject = emptyObject
  Vue.prototype.test = test
}

export default install