<template>
  <div>
    <div id="wapper">
      <div id="content">
        <header-info v-show="isShow"></header-info>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
    <tabbar v-show="isShow"></tabbar>
  </div>
</template>

<script>
  import headerInfo from '@/components/header-info'
  import tabbar from '@/components/tabBar'
  import cornerMark from '@/components/corner-mark'
  export default {
    name: 'index',
    data() {
      return {
        value: 100,
        number: 20,

        isShow: true,
      };
    },
    mounted() {
      this.$notify.setDefaultOptions({
        duration: 2000
      });
    },
    methods: {

    },
    components: {
      headerInfo,
      tabbar,
      cornerMark,
    },
    watch: {
      $route: {
        handler(to, from) {
          let disPath = ['/login', '/register', '/resetPassword']
          if(disPath.indexOf(to.path) !== -1) {
            this.isShow = false
          } else {
            this.isShow = true
          }
        },
        immediate: true
      }
    }
  }
</script>

<style lang="scss">
#wapper {
  height: 100vh;
  
  #content {
    padding: .2rem .2rem 0;
    padding-bottom: 1.5rem;
    font-size: .32rem;
  }
}
img {
  vertical-align: top;
}
.nut-textinput input{
  height: .6rem !important;
}
</style>