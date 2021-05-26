<template>
  <div class="info-header">
    <div class="img" @click="clickHeader">
      <img src="@/public/img/active-lianxiren.png" alt="">
    </div>
    <div class="info">
      <div class="name">
        <p> {{ userInfo.name }} </p>
        <div class="add" @click="addFriend">
          <i class="iconfont icon-add"></i>
        </div>
      </div>
      <div class="des over">
        <p class="over"> {{ value }} </p>
      </div>
    </div>
    <popup :isShow="isShow" :userInfo="userInfo" @change:isshow="changeIsShow"></popup>
  </div>
</template>

<script>
  import popup from '@/components/popup'
  export default {
    name: 'header-info',
    data() {
      return {
        isShow: false,
      }
    },
    computed: {
      userInfo() {
        return this.XGetUserInfo()
      },
      value() {
        return this.userInfo.personalizedSignature
      }
    },
    methods: {
      clickHeader() {
        this.SQueryAddRequest()
        this.isShow = true
      },
      addFriend() {
        this.$router.push("/add")
      },
      changeIsShow(value) {
        this.isShow = value
      }
    },
    components: {
      popup,
    }
  }
</script>

<style lang="scss" scoped>
.info-header {
  height: 1.2rem;
  display: flex;
  align-items: center;
  background: #E7DADA;
  .img {
    width: 1rem;
    img {
      width: 1rem;
      height: 1rem;
      display: inline-block;
      border-radius: 50%;
    }
  }

  .info {
    color: #fff;
    flex: 1;
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
      height: 0.4rem;
      p {
        font-size: .3rem;
      }
    }
  }
}
</style>