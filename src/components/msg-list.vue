<template>
  <div class="msg-box">
    <ul class="msg-list">
      <li class="msg-item" v-for="n in 5" :key="n">
        <div class="head-picture">
          <img src="@/public/img/active-lianxiren.png" alt="">
        </div>
        <div class="content">
          <div class="top">
            <span> 名称 </span>
            <span class="time"> 时间 </span>
          </div>
          <div class="msg-value">
            <span> 这是收到的信息这是收到的信息这是收到的信息这是收到的信息这是收到的信息 </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    
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