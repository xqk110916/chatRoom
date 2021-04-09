<template>
  <div class="header-bar">
    <nut-badge :value="9" class="bar-badge">
      <router-link to="/1"> 消息 </router-link>
    </nut-badge>
    <router-link to="/2"> 联系人 </router-link>
    <router-link to="/3"> 空间 </router-link>
  </div>
</template>

<script> 
  export default {

  }
</script>

<style lang="scss" scoped>
.header-bar {
  height: 1rem;
  display: flex;
  font-size: .4rem;
  line-height: 1rem;
  justify-content: space-around;
  border: 1px solid #eee;
}
</style>