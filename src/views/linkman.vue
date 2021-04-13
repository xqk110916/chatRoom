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
    methods: {},
    components: {
      groupList,
    }
  }
</script>

<style lang="scss" scoped>

</style>