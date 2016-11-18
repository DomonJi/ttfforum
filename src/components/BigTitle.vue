<template lang="html">
  <div class="image">
    <a id="arr" href="/"><div class="return">
    </div></a>

    <div class="title">
      <p>
        {{cn}}
      </p>
      <p>
        {{en}}
      </p>
    </div>
    <div class="phone">
      <router-link to="/schedule" :class="{active:current==1}"><span>  会议日程</span></router-link>
      <router-link to="/workshop" :class="{active:current==2}"><span>  工作坊</span></router-link>
      <router-link to="/guests" :class="{active:current==3}"><span>  嘉宾介绍</span></router-link>
      <router-link to="/address" :class="{active:current==4}"><span>  会议地址</span></router-link>
      <router-link to="/canteen" :class="{active:current==5}"><span>  会议餐饮</span></router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cn: {
      type: String,
      required: true
    },
    en: {
      type: String,
      required: true
    },
    current: {
      type: [Number, String],
      default: 0
    }
  },
  mounted () {
    let botton = document.getElementById('daohang-button')
    botton.style.top = '58px'
    botton.style.backgroundImage = `linear-gradient(white 25%,transparent 0,transparent 75%,white 0)`
  }
}
</script>



<style lang="stylus" scoped>
@import '../style/style.styl'
.phone-daohang
  width:30px
  height:10px
  margin:0
  background:url('../assets/whitedaohang.png')
  position:absolute
  right:5%
  bottom:20%
.image
  #arr
    margin:0
    position:absolute
    width:20px
    height:30px
    bottom:6%
    left:5%
.return
  @media screen and (min-width: 1000px)
    display:none
  width:18px
  height:25px
  background:url('../assets/return.png') no-repeat
  position:absolute
  margin:0
  background-size:contain
  z-index:2

.image
  width:100%
  max-width:1000px
  height:250px
  background:gray1
  @media screen and (max-width: 1000px)
    height:100px
    vertical-align:center
    transform:translateY(-80px)
    background:main-red
  margin:0 auto
  .title
    color:white
    font-family:"黑体"

    height:150px
    margin:0 auto
    @media screen and (min-width: 1000px)
      border:7px solid main-red
      color:main-red
      width:360px
    transform:translateY(50px)
    box-sizing:border-box
    text-align:center
    p:first-child
      font-size:34px
      line-height:24px
      @media screen and (max-width: 1000px)
        font-size:20px
        /*line-height:28px*/
        transform:translateY(15px)
    p:last-child
      font-size:20px
      line-height:12px
      @media screen and (max-width: 1000px)
        display:none
  .phone
    font-size:.8rem
    z-index:50
    span
      /*cursor:pointer*/
      z-index:10
      width:20%
    width:100%
    position:absolute
    height:40px
    top:105px
    display:flex
    padding:0 0 0 5%
    box-sizing:border-box
    justify-content:space-between
    /*transform:translateX(10px)*/
    align-items:center
    border-bottom:2px solid gray2

    p,a
      z-index:10
      display:inline-block
      color:blacktext
      cursor:pointer
      padding-bottom:10px
      box-sizing:content-box
      transform:translateY(5px)
    .active
      color:main-red
      border-bottom:3px solid main-red
    @media screen and (min-width: 1000px)
      display:none
</style>

<style lang="stylus" scoped>
.container
  transform:translateY(-20px)

</style>
