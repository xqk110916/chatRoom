function login(params) {
  return this.post("/api/userInfo/login", params)
  .then(result => {
    this.XActions("login", result.token)
    return result
  })
  .catch(error => { throw error })
}
function logout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      this.XActions("logout")
      reslove()
    }, 500)
  })
}

function register(params) {
  this.post("/api/userInfo/register", params)
  .then(result => result)
  .catch(error => { throw error })
}

function resetPassword(params) {
  this.post("/api/userInfo/resetPassword", params)
  .then(result => result)
  .catch(error => { throw error })
}

const install = function(Vue, ops) {
  Vue.prototype.SLogin = login
  Vue.prototype.SLogout = logout
  Vue.prototype.SRegister = register
  Vue.prototype.SResetPassword = resetPassword
}

export default install