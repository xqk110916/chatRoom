<template>
  <div id="app">
    <index></index>
  </div>
</template>

<script>
  import index from '@/views/index'
  import '@/public/rem'
  export default {
    components: {
      index
    }
  }
</script>

<style lang="scss">
@import './public/reset.mobile.css';
@import './public/base.css';
</style>
