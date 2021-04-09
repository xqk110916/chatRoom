<template>
  <div>
    <span class="corner-mark">
      文字
      <span class="circle"> {{ value }} </span>
    </span>
    
  </div>
</template>

<script>
  export default {
    name: "corner-mark",
    data() {
      return {
        value: '99+',
      }
    }
  }
</script>

<style lang="scss">
.corner-mark {
  position: relative;
  font-size: .4rem;
  display: block;
  height: 2rem;

  .circle {
    position: absolute;
    top: 0;
    right: 0;
    width: .45rem;
    height: .45rem;
    border-radius: 50%;
    border: 1px solid #f00;

    font-size: .2rem;
    color: #f00;
    text-align: center;
    line-height: .45rem;
  }
}

</style>