<template>
  <div class="linkman">
    <group-list></group-list>
  </div>
</template>

<script>
  import groupList from '@/components/group-list'
  export default {
    name: 'linkman',
    data() {
      return {
        list: [
          
        ]
      }
    },
    created() {
      // let userId = this.XGetUserId()
      // if(userId) {
      //   this.SQueryUserBaseInfo({ userId })
      // } else {
      //   this.$router.push("/login")
      // }
    },
    methods: {},
    components: {
      groupList,
    }
  }
</script>

<style lang="scss" scoped>

</style>