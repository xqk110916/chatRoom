<template>
  <div>
    <div id="wapper">
      <div id="content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
  import tabbar from '@/components/tabBar'
  import cornerMark from '@/components/corner-mark'
  export default {
    name: 'index',
    data() {
      return {
        value: 100,
        number: 20
      };
    },
    methods: {

    },
    components: {
      tabbar,
      cornerMark
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