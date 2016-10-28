<template>
<div id="app">
  <navigator></navigator>
  <home></home>
  <foot></foot>
</div>
</template>

<script>
import Navigator from './components/Navigator.vue'
import Home from './components/Home.vue'
import Foot from './components/Footer'
export default {
  name: 'app',
  components: {
    Navigator,
    Home,
    Foot
  }
}
</script>

<style lang="stylus">
@import './style/style.styl'
#app:before
  content:''
  width: 100%
  height: 15px
  position: absolute
  background-color: main-red
</style>
