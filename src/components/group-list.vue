<template>
  <div class="group-box">
    <ul class="group-list">
      <li class="group-item" v-for="item in groupInfoList" :key="item.id">
        <div class="group-tag" @click="clickList(item.id)">
          <i :class="['iconfont', checkId === item.id ? 'icon-down' : 'icon-right']"></i>
          <span class="pl"> {{ item.groupTagName }} </span>
        </div>

        <ul class="info-list" v-show="checkId === item.id">
          <li class="info-item" v-for="info in friendInfo" :key="info.id" @click="chat(info.friendId)">
            <img src="@/public/img/active-lianxiren.png" alt="">
            <span> {{ info.remarkName }} </span>
            <!-- <span> {{ info.personalizedSignature }} </span> -->
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "group-list",
    data() {
      return {
        checkId: null,
      }
    },
    computed: {
      groupInfoList() {
        return this.XGetGroupInfoList()
      },
      friendInfo() {
        let data = this.XGetFriendList()
        let group = this.XGetGroupInfoList().map(item => item.id)
        let params = {}
        group.map(groupId => {
          let current = data.filter(item => item.groupTagId == groupId)
          params[groupId] = current
        })
        return params[this.checkId]
      }
    },
    methods: {
      clickList(id) {
        if(id === this.checkId) {      // 重复点击, 收拢
          this.checkId = null
        } else {
          this.checkId = id
        }
      },
      chat(id) {
        this.$router.push("/chat/" + id)
      }
    },
  }
</script>

<style lang="scss" scoped>
.group-list {
  .group-item {
    
    .group-tag {
      height: 1.8em;
      display: flex;
      align-items: center;
    }

    .info-list {
      margin-left: .4rem;

      .info-item {
        height: 0.8rem;
        line-height: .6rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        margin-top: .1rem;

        img {
          width: 0.5rem;
          height: 0.5rem;
          display: inline-block;
          border-radius: 50%;
        }

        span {
          padding: .1rem 0;
        }
      }
    }
  }
}
</style>