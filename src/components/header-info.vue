<template>
  <div class="info-header">
    <div class="img">
      <img src="@/public/img/active-lianxiren.png" alt="">
    </div>
    <div class="info">
      <div class="name">
        <p> name </p>
        <div class="add" @click="addFriend">
          <i class="iconfont icon-add"></i>
        </div>
      </div>
      <div class="des">
        <p>  这是签名这是签名这是签名这是签名这是签名这是签名这是签名这是签名这是签名这是签名这是签名这是签名这是签名这是签名  </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header-info',
    data() {
      return {

      }
    },
    methods: {
      addFriend() {
        this.$router.push("/add")
      }
    },
  }
</script>

<style lang="scss" scoped>
.info-header {
  height: 1.2rem;
  display: flex;
  align-items: center;
  background: #E7DADA;
  .img {
    img {
      width: 1rem;
      height: 1rem;
      display: inline-block;
      border-radius: 50%;
    }
  }

  .info {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: sapce-between;
    overflow: hidden;
    padding: 0 .2rem;

    .name {
      font-size: .4rem;
      height: 0.5rem;
      line-height:.5rem;
      position: relative;

      .add {
        font-size: .4rem;
        z-index: 9;
        position: absolute;
        top: 0;
        right: 0;
        
        .iconfont {
          color: #fff;
          border: 1px solid #fff;
          border-radius: 50%;
        }
      }
    }
    
    .des {
      p {
        font-size: .3rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>