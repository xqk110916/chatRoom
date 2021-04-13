<template>
  <div class="group-box">
    <ul class="group-list">
      <li class="group-item" v-for="n in 10" :key="n" @click="clickList(n)">
        <div class="group-tag">
          <i :class="['iconfont', checkId === n ? 'icon-down' : 'icon-right']"></i>
          <span class="pl"> {{ name }} </span>
          <span class="pl"> {{ allNum }}/{{ onLineNum }} </span>
        </div>
        

        <ul class="info-list" v-show="checkId === n">
          <li class="info-item" v-for="i in 5" :key="i">
            <img src="@/public/img/active-lianxiren.png" alt="">
            <span> {{ name }} </span>
            <span> {{ personalizedSignature }} </span>
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
        name: 'list name',
        personalizedSignature: '这是签名这是签名这是签名这是签名这是签名这是签名这是签名',
        allNum: 10,
        onLineNum: 5,

        checkId: null,
      }
    },
    methods: {
      clickList(id) {
        if(id === this.checkId) {      // 重复点击, 收拢
          this.checkId = null
        } else {
          this.checkId = id
        }
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