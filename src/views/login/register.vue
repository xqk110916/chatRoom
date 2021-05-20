<template>
  <div>
    <nut-navbar class="title" @on-click-back="back" :rightShow="false"> 注册 </nut-navbar>
    <div class="login">
      <div class="user">
        <span> 名称: </span>
        <nut-textinput v-model="params.name" placeholder="请输入你的用户名称" :clearBtn="false"></nut-textinput>
      </div>
      <div class="user">
        <span> 账号: </span>
        <nut-textinput v-model="params.userName" placeholder="请输入你的账号" :clearBtn="false"></nut-textinput>
      </div>
      <div class="phone">
        <span> 电话: </span>
        <nut-textinput v-model="params.phoneNumber" placeholder="请输入你的手机号" :clearBtn="false"></nut-textinput>
      </div>
      <div class="pas">
        <span> 密码: </span>
        <nut-textinput v-model="params.password" type="password" placeholder="请输入你的密码" :clearBtn="false"></nut-textinput>
      </div>
      <div class="btn">
        <nut-button type="primary" block shape="circle" @click="enter"> 注册 </nut-button>
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
          name: '',
          userName: '',
          password: '',
          phoneNumber: '',
        }
      }
    },
    methods: {
      enter() {
        this.SRegister(this.params).then(result => {
          if(result.success) {
            this.$notify.success('注册成功, 将跳转至登录界面...')
            this.handlerClear()
            setTimeout(() => {
              this.$router.push('/login')
            }, 800)
          }
        })
      },
      handlerClear() {
        this.params = this.emptyObject(this.params)
      },
      back() {
        this.handlerClear()
        this.$router.push('/login')
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