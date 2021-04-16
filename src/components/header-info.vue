<template>
  <div class="info-header">
    <div class="img">
      <img src="@/public/img/active-lianxiren.png" alt="">
    </div>
    <div class="info">
      <div class="name">
        <p> name </p>
      </div>
      <div class="des">
        <p>  这是签名这是签名这是签名这是签名这是签名这是签名这是签名这是签名这是签名这是签名这是签名这是签名这是签名这是签名  </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header-info'
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