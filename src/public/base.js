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
// 将格林威治时间格式转化为20190307格式的字符串
function timeFormat(time = new Date(), format = '') {
  let flag = examineTimeFormat(time)      //对时间格式进行校验传入格式如果不为格林威治时间直接 return
  if(!flag) return time 

  let y = time.getFullYear().toString();
  let m = time.getMonth() + 1;
  let d = time.getDate();
  m = m.toString().padStart(2, "0")
  d = d.toString().padStart(2, "0")
  let result = y + format + m + format + d; //返回格式  "20191027" 字符串
  return result
}
// 将时间戳转化为20190307格式的字符串
function dateFormat(date) {
  return timeFormat(new Date(Number(date)))
}
// 将yyyyMMdd格式的时间转换成格林威治格式的时间
function timeyy(res) {
  var r = res.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")
  return new Date(r)
}
//将时间戳转化为 时间格式(带时分秒)
function timestampToTime(timestamp) {
  var date = new Date(Number(timestamp)); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
  return Y + M + D + h + m + s;
}
// 将时间戳转化为时分秒  09:00:00
function timehms(time) {
  let date = new Date(time)
  let h = date.getHours().toString().padStart(2, 0)
  let m = date.getMinutes().toString().padStart(2, 0)
  let s = date.getSeconds().toString().padStart(2, 0)
  return h + ":" + m + ":" + s
}

function getFriendInfo(id) {
  let list = this.XGetFriendList()
  let current = list.filter(item => item.friendId == id)
  let info = current.length ? current[0] : {}
  return info
}
function getFriendName(id) {
  let info = this.getFriendInfo(id)
  let name = info.remarkName ? info.remarkName : '未获取到'
  return name
}

function test() {
  console.log(post)
}

const install = function(Vue, ops) {
  Vue.prototype.clone = clone
  Vue.prototype.emptyObject = emptyObject
  Vue.prototype.timeFormat = timeFormat
  Vue.prototype.dateFormat = dateFormat
  Vue.prototype.timestampToTime = timestampToTime
  Vue.prototype.timehms = timehms
  Vue.prototype.getFriendName = getFriendName
  Vue.prototype.getFriendInfo = getFriendInfo
  Vue.prototype.test = test
}

export default install