// 搜索好友列表
<template>
  <div class="info-list">
    <div class="info-item" v-for="item in datas" :key="item.userName">
      <div class="item-left">
        <img src="@/public/img/active-lianxiren.png" alt="">
      </div>
      <div class="item-content">
        <p class="info-top">
          {{ item.name }}( {{ item.userName }} )
        </p>
        <p class="info-bottom">
          <span class="tag"> 标签 </span>
        </p>
      </div>
      <div class="info-button">
        <span class="addBtn" @click="addField(item)"> 添加 </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'info-list',
    data() {
      return {
        
      }
    },
    methods: {
      addField(item) {
        this.submit(item)
      },
      submit(item) {
        this.post("/api/friendInfo/add", {
          userId: this.userId,
          friendId: item.id,
          remarkName: item.name,
          groupTagId: 0,
        }).then(result => {
          
        })
      }
    },
    props: {
      datas: {
        type: Array,
        default: [],
      }
    }
  }
</script>

<style lang="scss" scoped>
.info-list {
  .info-item {
    height: 1.4rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: .2rem;
    img {
      width: 1rem;
      height: 1rem;
      display: inline-block;
      border-radius: 50%;
    }

    .item-content {
      margin-left: 0.2rem;
      width: 1rem;
      flex: 1;

      .info-top {
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }

      .info-bottom {
        margin-top: 0.1rem;
        font-size: .2rem;

        .tag {
          background: #ccc;
          color: #ffff;
          padding: .05rem .1rem;
          border-radius: 20%;
        }
      }
    }

    .info-button {
      line-height: 1rem;
      padding-left: .2rem;
      .addBtn {
        font-size: .1rem;
        padding: .12rem .21rem;
        background: #ccc;
        color: #333;
        border-radius: .5rem;
      }
    }
  }
}
</style>