<template>
  <div>
    <nut-popup v-model="popupShow" position="left" class="popup" @close="closePopup">
      <div class="nav-info">
        <img src="@/public/img/active-lianxiren.png" alt="">
        <div class="name over">
          <p class="over"> {{ userInfo.name }} </p>
          <p>  </p>
        </div>
      </div>
      
      <nut-collapse v-model="activeNames">
        <nut-collapse-item title="验证消息" :name="1">
          <info-list></info-list>
        </nut-collapse-item>
      </nut-collapse>

      <nut-button block @click="logout"> 登出 </nut-button>
    </nut-popup>
  </div>
</template>

<script>
  import infoList from '@/components/verify-info-list.vue'
  export default {
    name: 'popup',
    data() {
      return {
        activeNames: [],
        popupShow: false,
        datas: [{name: 'name1'},{name: 'name2'}],
      }
    },
    props: {
      isShow: {
        type: Boolean,
        default: false
      },
      userInfo: {
        type: Object,
        default: {}
      }
    },
    watch: {
      isShow: {
        handler(newVlue, oldVlue) {
          this.popupShow = newVlue
        },
        immediate: true
      }
    },
    methods: {
      logout() {
        this.SLogout()
        this.closePopup()
        this.$router.push("/login")
      },
      closePopup() {
        this.$emit("change:isshow", false)
      },
    },
    components: {
      infoList
    }
  }
</script>

<style lang="scss" scoped>
.popup {
    width: 80%;
    height: 100%;
    padding: .2rem;
    
    .nav-info {
      height: 1.5rem;
      display: flex;
      margin-bottom: .1rem;
      img {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
      }
      .name {
        flex: 1;
        margin-left: 0.2rem;
        font-size: .6rem;
        line-height: .75rem;
      }
    }
  }
</style>