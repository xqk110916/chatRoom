function login(params) {      // 登录
  return this.post("/api/userInfo/login", params)
  .then(result => {
    let { userId, token } = result
    this.XActions("login", { userId, token })
    this.SQueryUserBaseInfo({ userId })
    return result
  })
  .catch(error => { throw error })
}
function logout() {         //  登出
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      this.XActions("logout")
      reslove()
    }, 500)
  })
}
function register(params) {     // 注册
  return this.post("/api/userInfo/register", params)
  .then(result => result)
  .catch(error => { throw error })
}
function resetPassword(params) {    // 重置密码
  return this.post("/api/userInfo/resetPassword", params)
  .then(result => result)
  .catch(error => { throw error })
}

//  ==================    基础信息部分 start  =================
function QueryUserBaseInfo(params) {    // 获取用户基本信息
  this.SQueryUserInfo(params)
  this.SQueryFriendList(params)
  this.SQueryGroupInfoList(params)
}
function QueryUserInfo(params) {      // 获取用户信息
  return this.get("/api/userInfo/queryInfo", params)
  .then(result => {
    if(result.success) this.XActions("setUserInfo", result.data)
    return result
  })
  .catch(error => { throw error })
}
function QueryFriendList(params) {      // 获取好友列表
  return this.get("/api/friendInfo/queryAll", params)
  .then(result => {
    if(result.success) this.XActions("setFriendList", result.data)
    return result
  })
  .catch(error => { throw error })
}
function QueryGroupInfoList(params) {    //  获取分组信息
  return this.get("/api/groupInfo/query", params)
  .then(result => {
    if(result.success) this.XActions("setGroupInfoList", result.data)
    return result
  })
  .catch(error => { throw error })
}
//  ==================    基础信息部分 end  =================

//   查询
function QueryDetailsByUserName(params) {      // 根据用户名查找详情信息
  return this.get("/api/friendInfo/queryDetailsByUserName", params)
  .then(result => result)
  .catch(error => { throw error })
}
function QueryDetailsById(params) {           // 根据UserId查找详情信息
  return this.get("/api/friendInfo/queryDetailsById", params)
  .then(result => result)
  .catch(error => { throw error })
}
function QueryAddRequest(params = {userId: this.XGetUserId()}) {            // 查询要处理的好友申请
  return this.get("/api/friendInfo/queryAddRequest", params)
  .then(result => {
    if(result.success) this.XActions("setVerifyInfoList", result.data)
    return result
  })
  .catch(error => { throw error })
}

// 操作
function OperationName(params) {      // 更改名称
  return this.post("/api/userInfo/changeName", params)
  .then(result => result)
  .catch(error => { throw error })
}
function OperationProfile(params) {     // 更改头像地址
  return this.post("/api/userInfo/changeProfile", params)
  .then(result => result)
  .catch(error => { throw error })
}
function OperationSignature(params) {   // 更改个性签名
  return this.post("/api/userInfo/changeSignature", params)
  .then(result => result)
  .catch(error => { throw error })
}
function OperationAddFriend(params) {   // 发送添加好友请求(需对方确认)
  return this.post("/api/friendInfo/add", params)
  .then(result => result)
  .catch(error => { throw error })
}
function OperationAddRequest(params) {  // 处理好友新增请求
  return this.post("/api/friendInfo/handlerAddRequest", params)
  .then(result => result)
  .catch(error => { throw error })
}
function OperationDeleteFriend(params) {    // 发送删除好友请求
  return this.post("/api/friendInfo/delete", params)
  .then(result => result)
  .catch(error => { throw error })
}
function OperationUpdateBlacklist(params) {   // 添加到黑名单
  return this.post("/api/friendInfo/updateBlacklist", params)
  .then(result => result)
  .catch(error => { throw error })
}
function OperationUpdateParticular(params) {    // 设为特别关心
  return this.post("/api/friendInfo/updateParticular", params)
  .then(result => result)
  .catch(error => { throw error })
}
function OperationRemarkName(params) {      // 修改备注名册
  return this.post("/api/friendInfo/updateRemarkName", params)
  .then(result => result)
  .catch(error => { throw error })
}
function OperationGrouping(params) {        // 修改好友分组
  return this.post("/api/friendInfo/changeGrouping", params)
  .then(result => result)
  .catch(error => { throw error })
}
function OperationAddGroup(params) {      // 新增分组
  return this.post("/api/groupInfo/add", params)
  .then(result => result)
  .catch(error => { throw error })
}
function OperationUpdateGroup(params) {     // 修改分组名称
  return this.post("/api/groupInfo/update", params)
  .then(result => result)
  .catch(error => { throw error })
}
function OperationDeleteGroup(params) {     // 删除分组
  return this.post("/api/groupInfo/delete", params)
  .then(result => result)
  .catch(error => { throw error })
}


const install = function(Vue, ops) {
  Vue.prototype.SLogin = login
  Vue.prototype.SLogout = logout
  Vue.prototype.SRegister = register
  Vue.prototype.SResetPassword = resetPassword

  Vue.prototype.SQueryUserBaseInfo = QueryUserBaseInfo
  Vue.prototype.SQueryUserInfo = QueryUserInfo
  Vue.prototype.SQueryFriendList = QueryFriendList
  Vue.prototype.SQueryGroupInfoList = QueryGroupInfoList

  Vue.prototype.SQueryDetailsByUserName = QueryDetailsByUserName
  Vue.prototype.SQueryDetailsById = QueryDetailsById
  Vue.prototype.SQueryAddRequest = QueryAddRequest
  Vue.prototype.SOperationName = OperationName
  Vue.prototype.SOperationProfile = OperationProfile
  Vue.prototype.SOperationSignature = OperationSignature
  Vue.prototype.SOperationAddFriend = OperationAddFriend
  Vue.prototype.SOperationDeleteFriend = OperationDeleteFriend
  Vue.prototype.SOperationUpdateBlacklist = OperationUpdateBlacklist
  Vue.prototype.SOperationUpdateParticular = OperationUpdateParticular
  Vue.prototype.SOperationRemarkName = OperationRemarkName
  Vue.prototype.SOperationGrouping = OperationGrouping
  Vue.prototype.SOperationAddRequest = OperationAddRequest
  Vue.prototype.SOperationAddGroup = OperationAddGroup
  Vue.prototype.SOperationUpdateGroup = OperationUpdateGroup
  Vue.prototype.SOperationDeleteGroup = OperationDeleteGroup
}

export default install