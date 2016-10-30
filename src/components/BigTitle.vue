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
      <a href="/schedule"><span>  会议日程</span></a>
      <a href="/workshop"><span>  工作坊</span></a>
      <a href="/guests"><span>  嘉宾介绍</span></a>
      <a href="/address"><span>  会议地址</span></a>
      <a href="/canteen"><span>  会议餐饮</span></a>
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
    bottom:10%
    left:5%
.return
  @media screen and (min-width: 1000px)
    display:none
  width:20px
  height:30px
  background:url('../assets/return.png')
  position:absolute
  margin:0

.image
  width:100%
  max-width:1000px
  height:250px
  @media screen and (max-width: 1000px)
    height:100px
    vertical-align:center
    transform:translateY(-80px)
  background:main-red
  margin:0 auto
  .title
    color:white
    font-family:"黑体"
    width:360px
    height:150px
    margin:0 auto
    @media screen and (min-width: 1000px)
      border:7px solid white
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
    z-index:5
    span
      cursor:pointer
    width:100%
    position:absolute
    height:50px
    top:105px
    display:flex
    padding:0 25px
    box-sizing:border-box
    justify-content:space-around
    align-items:center
    border-bottom:2px solid gray2
    p,a
      z-index:100
      display:inline-block
      color:blacktext
    @media screen and (min-width: 1000px)
      display:none
</style>

<style lang="stylus">
.container
  transform:translateY(-20px)

</style>
