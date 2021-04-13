<template>
  <div>
    <span class="corner-mark">
      <slot></slot>
      <span class="circle" v-show="this.value !== 0"> {{ showValue }} </span>
    </span>
    
  </div>
</template>

<script>
  export default {
    name: "corner-mark",
    data() {
      return {
     
      }
    },
    computed: {
      showValue() {
        if(this.value > 99) {
          return '99+'
        } else {
          return this.value
        }
      }
    },
    props: {
      value: {
        type: Number,
        default: 0,
      }
    }
  }
</script>

<style lang="scss">
.corner-mark {
  position: relative;
  font-size: .4rem;
  // display: block;
  height: 2rem;

  .circle {
    position: absolute;
    top: -.5rem;
    right: -.4.5rem;
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