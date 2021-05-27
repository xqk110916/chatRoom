<template>
  <div>
    <div id="wapper">
      <div id="content">
        <header-info v-show="isShow"></header-info>
        <keep-alive>
          <transition :name="transitionName">
            <router-view></router-view>
          </transition>
        </keep-alive>
      </div>
      <tabbar v-show="isShow"></tabbar>
    </div>
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
        transitionName: '',

        isShow: true,
      };
    },
    created() {
      if (sessionStorage.getItem('QQstate')) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem('QQstate'))))
      }
      if (window.addEventListener) {
        window.addEventListener("beforeunload", this.reload, true)
      } else {
        window.attachEvent("onbeforeunload", this.reload)
      }

      this.getBaseInfo()
    },
    mounted() {
      this.$notify.setDefaultOptions({
        duration: 2000
      });
    },
    methods: {
      reload() {
        sessionStorage.setItem('QQstate', JSON.stringify(this.$store.state))
      },
      getBaseInfo() {
        let userId = this.XGetUserId()
        if(userId) {
          this.SQueryUserBaseInfo({ userId })
        } else {
          this.$router.push("/login")
        }
      }
    },
    components: {
      headerInfo,
      tabbar,
      cornerMark,
    },
    watch: {
      $route: {
        handler(to, from) {
          if(!to.meta.isShow) {
            this.isShow = false
          } else {
            this.isShow = true
          }

          if(to && from && to.meta.index > from.meta.index){
          //设置动画名称
            this.transitionName = 'slide-left';
          }else{
            this.transitionName = 'slide-right';
          }
        },
        immediate: true
      }
    }
  }
</script>

<style lang="scss">
#wapper {
  max-width: 750px;
  overflow: hidden;
  height: 100vh;
  margin: 0 auto;
  
  #content {
    padding: .05rem .05rem 0;
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