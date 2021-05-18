// 底部导航栏
<template>
  <div class="header-bar">
    <router-link to="/msg" active-class="active">
      <div class="inner">
        <div :class="{ dot : dot.msg }"></div>
        <i class="iconfont icon-msg"></i>
        <span> 消息 </span>
      </div>
    </router-link>
    <router-link to="/" exact active-class="active">
      <div class="inner">
        <div :class="{ dot : dot.msg }"></div>
        <i class="iconfont icon-lianxiren"></i>
        <span> 联系人 </span>
      </div>
    </router-link>
    <router-link to="/dynamic" active-class="active">
      <div class="inner">
        <div :class="{ dot : dot.msg }"></div>
        <i class="iconfont icon-kongjian"></i>
        <span> 空间 </span>
      </div>
    </router-link>
  </div>
</template>

<script> 
  import cornerMark from '@/components/corner-mark'
  export default {
    name: 'navBar',
    data() {
      return {
        value: 10,
        dot: {
          msg: false,
          linkman: false,
          dynamic: false,
        },
      }
    },
    components: {
      cornerMark
    }
  }
</script>

<style lang="scss" scoped>
.header-bar {
  max-width: 750px;
  width: 100vw;
  height: 1.5rem;
  box-sizing: border-box;
  background: #fff;
  z-index: 99;
  display: flex;
  font-size: .2rem;
  justify-content: space-around;
  border-top: 1px solid #ccc;
  position: fixed;
  bottom: 0;
  padding-top: .3rem;

  .active {
    color: #409EFF;
  }

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .dot {
      position: absolute;
      top: -.1rem;
      right: -.1rem;
      width: .1rem;
      height: .1rem;
      border-radius: 50%;
      background-color: #f00;
    }

    .iconfont {
      font-size: .5rem;
    }

    span {
      margin-top: .1rem;
    }
  }
}
</style>