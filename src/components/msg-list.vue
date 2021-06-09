<template>
  <div class="msg-box">
    <ul class="msg-list">
      <li class="msg-item" v-for="item in datas" :key="item.friendId" @click="toChat(item.friendId)">
        <div class="head-picture">
          <img src="@/public/img/active-lianxiren.png" alt="">
        </div>
        <div class="content">
          <div class="top">
            <span> {{ item.name }} </span>
            <span class="time"> {{ item.time }} </span>
          </div>
          <div class="msg-value">
            <span> {{ item.msg }} </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'msg-list',
    data() {
      return {
        data: {},
      }
    },
    created() {
      this.sockets.subscribe("pushList:" + this.userId, (data) => {
        this.data = data
      })
      this.$socket.emit("initMsgList", {
        userId: this.userId,
      })
    },
    destroyed() {
      this.sockets.unsubscribe("pushList:" + this.userId)
    },
    computed: {
      userId() {
        return this.XGetUserId()
      },
      datas() {
        return Object.keys(this.data).map(key => {
          let userId = this.userId.toString()
          let last = this.data[key][ this.data[key].length - 1 ]
          let ids = key.split(":")
          let index = ids.indexOf(userId)
          ids.splice(index, 1)
          let friendId = ids[0]
          let name = this.getFriendName(friendId)
          let msg = last.msg
          let time = new Date(last.createTime).getTime()
          time = this.timehms(time)
          return { friendId, name, msg, time }
        })
      }
    },
    methods: {
      toChat(id) {
        this.$router.push("/chat/" + id)
      }
    },
  }
</script>

<style lang="scss" scoped>
.msg-box {
  .msg-list {
    .msg-item {
      display: flex;
      height: 1.2rem;
      align-items: center;
      .head-picture {
        width: 1.2rem;
        display: flex;
        align-items: center;
        img {
          width: .8rem;
          height: .8rem;
          border-radius: 50%;
        }
      }

      .content {
        height: 0.75rem;
        padding-right: .2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex: 1;

        .top {
          display: flex;
          justify-content: space-between;
          flex: 1;

          .time {
            color: #888;
            font-size: .1rem;
          }
        }
        .msg-value {
          color: #999;
          font-size: .06rem;
          overflow: hidden;
        }
      }
    }
  }
}
</style>