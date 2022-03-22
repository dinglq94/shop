<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
        <slot></slot>
    </div>
  </div>
</template>

<script>

import betterScroll from 'better-scroll'


export default {
  name:'betterScroll',
  data() {
      return {
          betterScroll: null
      }
  },
  mounted(){
      this.betterScroll= new betterScroll(this.$refs.wrapper,{
          click: true
      })
    //   this.betterScroll.scrollTo(0,0,500)
  }
 
}
</script>

<style scoped>
  
</style>