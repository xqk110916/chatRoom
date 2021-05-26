<template>
  <div class="verify-box">
    <ul>
      <li v-for="item in datas" :key="item.id">
        <div class="info">
          <p> {{ item.name }} </p>
          <p> 请求添加你为好友, 是否同意?  </p>
        </div>
        <div class="operation">
          <div @click="submit(item, 1)">
            <nut-icon class="icon" type="tick" color="#f00"></nut-icon>
          </div>
          <div @click="submit(item, -1)">
            <nut-icon class="icon cross" type="cross" color="#f00" size="16px"></nut-icon>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "verifyInfoList",
    data() {
      return {

      }
    },
    computed: {
      datas() {
        return this.XGetVerifyInfoList()
      }
    },
    methods: {
      submit(item, status) {
        this.SOperationAddRequest({
          userId: this.XGetUserId(),
          id: item.id,
          status,
        }).then(result => {
          this.SQueryAddRequest()
          if(result.success) {
            let value = status ? '同意' : '拒绝'
            this.$notify.success(`以你${value}"${item.name}"的好友申请`)
          }
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.verify-box {
  ul>li {
    height: 1rem;
    background: #f9f9f9;
    margin-bottom: 2px;
    display: flex;

    p {
      margin-left: .2rem;
    }

    .info {
      font-size: .2rem;
      line-height: .45rem;
    }

    .operation {
      margin-left: 0.3rem;
      display: flex;
      align-items: center;

      .cross {
        margin-left: 0.3rem;
      }
    }
  }
}
</style>