<template>
  <div class="chat">
    <nut-row class="header">
      <nut-col :span="2" class="back">
        <p @click="clickBackRouter"> <i class="iconfont icon-left"></i> </p>
      </nut-col>
      <nut-col :span="22">
        <p class="name"> {{ friendName }} </p>
      </nut-col>
    </nut-row>
    <div class="content">
      <ul>
        <li v-for="(item, index) in datas" :class="['ask-info-list', { 'right-box': item.noMy } ]" :key="index">
          <img src="@/public/img/active-lianxiren.png" alt="" v-show="!item.noMy">
          <div :class="['message', item.noMy ? 'right' : 'left']">
            {{ item.msg }}
          </div>
          <img src="@/public/img/active-lianxiren.png" alt="" v-show="item.noMy">
        </li>
      </ul>
    </div>
    <div class="ask">
      <nut-searchbar v-model="value" :hasTextButton="true" textInfo="发送" @submit="sendInfo" @keyup.enter="sendInfo"></nut-searchbar>
    </div>
  </div>
</template>

<script>
  export default {
    name: "chat",
    data() {
      return {
        id: this.$route.params.id,
        value: '',
        data: [
          {
            userId: 1,
            oppositeSideId: 10,
            spokesmanId: 1,
            msg: '这是自己发的消息'
          },
          {
            userId: 1,
            oppositeSideId: 10,
            spokesmanId: 1,
            msg: '这是自己发的消息222'
          },
          {
            userId: 1,
            oppositeSideId: 10,
            spokesmanId: 10,
            msg: '这是对面发的消息'
          },
        ],
      }
    },
    computed: {
      userId() {
        return this.XGetUserId()
      },
      name() {
        return this.XGetName()
      },
      friendName() {
        return this.getFriendName(this.id)
      },
      datas() {
        return this.data.map(item => {
          item.noMy = item.spokesmanId != this.userId
          return item
        })
      }
    },
    methods: {
      clickBackRouter() {
        this.$router.go(-1)
      },
      sendInfo() {
        let payload = {
          userId: this.userId,
          oppositeSideId: this.id,
          spokesmanId: this.userId,
          msg: this.value
        }
        this.datas.push(payload)

        this.$socket.emit("info", payload)
        this.sockets.subscribe("push", (data) => {
          console.log(data)
        })

        this.value = ''
      },
    },
  }
</script>

<style lang="scss">
.chat {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .header {
    height: .8rem;
    display: flex;
    align-items: center;
    background: #f9f9f9;

    .back {
      height: 0.8rem;
      font-weight: 800;
      line-height: .8rem;
      .icon-left {
        font-size: .4rem;
      }
    }

    .name {
      text-align: center;
    }
  }

  .content {
    flex: 1;
    overflow: scroll;

    .right-box {
      display: flex;
      justify-content: flex-end;
    }
    li {
      padding-top: .1rem;
      padding-bottom: .2rem;
      display: flex;
      img {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
      }

      .message {
        box-sizing: border-box;
        margin: 0 .4rem;
        width: 5.2rem;
        padding: .15rem;
        background: #f9f9f9;
        position: relative;
      }
      .left:before {
        content: "";
        position: absolute;
        left: -.4rem;
        top: .24rem;
        width: 0;
        height: 0;
        border-top: .2rem solid transparent;
        border-left: .2rem solid transparent;
        border-right: .2rem solid #f9f9f9;
        border-bottom: .2rem solid transparent;
      }
      .right:after {
        content: "";
        position: absolute;
        right: -.4rem;
        top: .24rem;
        width: 0;
        height: 0;
        border-top: .2rem solid transparent;
        border-left: .2rem solid #f9f9f9;
        border-right: .2rem solid transparent;
        border-bottom: .2rem solid transparent;
      }
    }
  }

  .ask {
    padding: .15rem;
    height: 1rem;
  }
}
</style>