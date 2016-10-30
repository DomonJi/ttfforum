<template>
<div id="app">
  <navigator></navigator>
  <Canteen></Canteen>
  <foot></foot>
</div>
</template>

<script>
import Navigator from './components/Navigator.vue'
import Foot from './components/Footer'
import Home from './components/Home.vue'
import Guests from './components/Guests.vue'
import Introduction from './components/Introduction.vue'
import Workshop from './components/Workshop'
import Affairs from './components/Affairs.vue'
import Schedule from './components/Schedule'
import Canteen from './components/Canteen'
import Add from './components/Address'
import Registration from './components/Registration'
import Contact from './components/Contact'
export default {
  name: 'app',
  components: {
    Navigator,
    Home,
    Foot,
    Guests,
    Introduction,
    Workshop,
    Affairs,
    Schedule,
    Canteen,
    Add,
    Registration,
    Contact
  }
}
</script>

<style lang="stylus">
@import './style/style.styl'
a
  text-decoration:none !important
  color:blacktext

p
  font-family:"Helvetica Neue", "STHeiti"
#app:before
  @media screen and (min-width: 1000px)
    content:''
    width: 100%
    height: 15px
    position: absolute
    background-color: main-red
main
  width: 100%
  :after
    content: ''
    display: block
    clear: both
.container
  width: 100%
  max-width:1000px
  position: relative
  margin: 0 auto
  box-sizing:border-box
  @media screen and (max-width: 1000px)
    transform:translateY(-80px)
    padding:5%
  .item
    width: 500px
    height: 500px
    float: left
</style>
