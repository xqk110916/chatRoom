<template>
  <div>
    <nut-navbar class="title" @on-click-back="back" :rightShow="false"> 重置密码 </nut-navbar>
    <div class="login">
      <div class="user">
        <span> 账号: </span>
        <nut-textinput v-model="params.userName" placeholder="请输入你的用户名" :clearBtn="false"></nut-textinput>
      </div>
      <div class="phone">
        <span> 电话: </span>
        <nut-textinput v-model="params.phoneNumber" placeholder="请输入你的注册时输入的手机号" :clearBtn="false"></nut-textinput>
      </div>
      <div class="pas">
        <span> 密码: </span>
        <nut-textinput v-model="params.password" type="password" placeholder="请输入你新的密码" :clearBtn="false"></nut-textinput>
      </div>
      <div class="btn">
        <nut-button type="primary" block shape="circle" @click="enter"> 确定 </nut-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        params: {
          userName: '',
          password: '',
          phoneNumber: '',
        }
      }
    },
    methods: {
      enter() {
        this.axios.post("/api/userInfo/resetPassword", this.params).then(result => {
          if(result.success) {
            this.$notify.success("重置成功, 将跳转到登录界面...")
            this.handlerClear()
            setTimeout(() => {
              this.$router.push('/login')
            }, 800)
          }
        })
      },
      back() {
        this.$router.push('/login')
      },
      handlerClear() {
        this.params = this.emptyObject(this.params)
      }
    }
  }
</script>

<style lang="scss" scoped>
.login {
  width: 80vw;
  margin: 0 auto;
  margin-top: 3rem;

  div {
    margin-top: 0.2rem;
    display: flex;
    align-items: center;

    span {
      margin-right: 0.5em;
    }

    .nut-textinput {
      width: 5rem;
    }
  }
}
</style>