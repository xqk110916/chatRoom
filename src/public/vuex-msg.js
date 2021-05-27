// 定义vuex中的数据方便使用时直接调用, 在函数名称前加X用以区分
// actions
function callActions(actionName, payload) {
  this.$store.dispatch(actionName, payload)
}

// getters
function getToken() {
  return this.$store.getters.getToken
}
function getUserInfo() {
  return this.$store.getters.getUserInfo
}
function getUserId() {
  return this.$store.getters.getUserId
}
function getName() {
  return this.$store.getters.getName
}
function getFriendList() {
  return this.$store.getters.getFriendList
}
function getFriendIds() {
  return this.$store.getters.getFriendIds
}
function getGroupInfoList() {
  return this.$store.getters.getGroupInfoList
}
function getVerifyInfoList() {
  return this.$store.getters.getVerifyInfoList
}

const install = function(Vue, ops) {
  Vue.prototype.XActions = callActions
  Vue.prototype.XGetToken = getToken
  Vue.prototype.XGetUserInfo = getUserInfo
  Vue.prototype.XGetUserId = getUserId
  Vue.prototype.XGetName = getName
  Vue.prototype.XGetFriendList = getFriendList
  Vue.prototype.XGetFriendIds = getFriendIds
  Vue.prototype.XGetGroupInfoList = getGroupInfoList
  Vue.prototype.XGetVerifyInfoList = getVerifyInfoList
}

export default install