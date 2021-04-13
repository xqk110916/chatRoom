<template>
  <div class="dynamic-box">
    <ul class="dynamic-list">
      <li class="dynamic-item" v-for="n in 5" :key="n">
        <div class="head">
          <div class="picture">
            <img src="@/public/img/active-lianxiren.png" alt="">
          </div>
          <div class="info ml">
            <p class="name"> nama </p>
            <p class="time"> 4月12日 13:51 </p>
          </div>
        </div>
        <div class="dynamic-value">
          <p> 这是发表的动态消息 </p>
        </div>
        <div class="operation">
          <i class="iconfont icon-dianzan"></i>
          <i class="iconfont icon-pinglun"></i>
          <i class="iconfont icon-zhuanfa"></i>
        </div>
        <div class="ipt mt">
          <nut-textinput v-model="value" placeholder="请输入内容" :clear-btn="false" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "dynamic-list",
    data() {
      return {
        value: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
.dynamic-box {
  .dynamic-list {
    .dynamic-item {
      padding: .15rem 0;
      .head {
        height: 1rem;
        display: flex;
        align-items: center;

        .picture {
          width: 1rem;
          height: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 50%;
          }
        }
        
        .info {
          height: 0.8rem;
          display: flex;
          flex-direction: column;
          justify-content: space-around;

          .time {
            font-size: .08rem;
            color: #999;
          }
        }
      }

      .dynamic-value {
        font-size: .14rem;
        margin-top: .1rem;
        margin-left: 0.2rem;
      }

      .operation {
        color: #999;
        display: flex;
        justify-content: flex-end;
        margin-top: .1rem;
        .iconfont {
          font-size: .36rem;
          margin-left: .3rem;
        }
      }
    }
  }
}
</style>