<template>
  <div>
    <nut-navbar class="title" @on-click-back="back" :rightShow="false"> 登录 </nut-navbar>
    <div class="login">
      <div class="user">
        <span> 账号: </span>
        <nut-textinput v-model="params.userName" placeholder="请输入你的用户名" :clearBtn="false"></nut-textinput>
      </div>
      <div class="pas">
        <span> 密码: </span>
        <nut-textinput v-model="params.password" type="password" placeholder="请输入你的密码" :clearBtn="false"></nut-textinput>
        <div class="forget" @click="reset"> 忘记密码 </div>
      </div>
      <div class="btn">
        <nut-button type="primary" block shape="circle" @click="enter"> 登录 </nut-button>
      </div>
      <router-link to="/register" class="register"> 还没账号?去注册 </router-link>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'login',
    data() {
      return {
        params: {
          userName: '',
          password: '',
        }
      }
    },
    methods: {
      enter() {
        this.SLogin(this.params).then(result => {
          if(result.success) {
            this.$notify.success("登录成功")
            this.handlerClear()
            setTimeout(() => {
              this.$router.push('/')
            }, 500)
          }
        })
      },
      back() {
        this.$router.push('/register')  
      },
      reset() {
        this.$router.push('/resetPassword')
      },
      handlerClear() {
        this.params = this.emptyObject(this.params)
      }
    }
  }
</script>

<style lang="scss">
.title {
  .nav-center {
    height: 0.8rem;
    h3 {
      height: 0.8rem;
      line-height: 0.8rem;
    }
  }
}
.login {
  width: 80vw;
  margin: 0 auto;
  margin-top: 3rem;

  .pas {
    position: relative;

    .forget {
      height: 0.6rem;
      padding: 0 .15rem;
      font-size: .2rem;
      color: #999;
      position: absolute;
      right: .11rem;
      top: 0;
      margin-top: 0;
      background: #eee;
    }
  }

  .register {
    display: block;
    font-size: .28rem;
    color: #409EFF;
    margin-top: 0.4em;
    text-align: center;
  }

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