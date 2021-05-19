<template>
  <div>
    <nut-row class="add-header">
      <nut-col :span="2" class="back">
        <p @click="clickBackRouter"> <i class="iconfont icon-left"></i> </p>
      </nut-col>
      <nut-col :span="22">
        <nut-searchbar
          v-model="search.userName"
          placeText="你要搜索的用户账户"
          :hasIcon="true"
          :hasTextButton="true"
          textInfo="搜索"
          customClass="search_demo"
          @submit="submitSearch"
        ></nut-searchbar>
      </nut-col>
    </nut-row>
    <info-list :datas="infoDatas"></info-list>
  </div>
</template>

<script>
  import infoList from '@/components/info-list'
  export default {
    name: 'addFriend',
    data() {
      return {
        search: {
          userName: '',
        },
        infoDatas: [],
      }
    },
    components: {
      infoList
    },
    methods: {
      clickBackRouter() {
        console.log("back")
        this.$router.go(-1)
      },
      submitSearch() {
        this.infoDatas = []
        if(this.search.userName === '') return
        this.get("/api/friendInfo/queryDetailsByUserName", this.search).then(result => {
          if(result.success) {
            this.infoDatas = result.data
          }
        })
      },
      clearForm() {
        
      }
    },
  }
</script>

<style lang="scss" scoped>
.add-header {
  height: .8rem;
  display: flex;
  align-items: center;

  .back {
    height: 0.8rem;
    font-weight: 800;
    line-height: .8rem;
    .icon-left {
      font-size: .4rem;
    }
  }
}
</style>