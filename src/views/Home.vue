<template>
  <div class="home" ref="aaa">
    <img alt="Vue logo" src="../assets/logo.png">
    <a-button type="primary" icon="search" @click="clickHandler" @dblclick="dblclickHandler">button</a-button>
    <HelloWorld :msg="msg"/>
    <span v-text="msg"></span>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import * as math from 'mathjs';
math.config({
  number: 'BigNumber', // Default type of number:
                       // 'number' (default), 'BigNumber', or 'Fraction'
  precision: 2        // Number of significant digits for BigNumbers
})

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      msg: '',
      count: 0
    }
  },
  mounted () {
  },
  methods: {
    clickHandler () {
      this.msg = math.add(math.bignumber(0.135),math.bignumber(0.2)).toString();
    },
    dblclickHandler () {
      let dig = -3.1352132
      this.msg = math.round(dig,2);
      console.log(math.add(0.1,0.2))
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  text-align: center;
}
</style>

