<template lang="html">
  <header>
      <a href="/"><div class="logo"></div></a>
      <div class="phone-daohang" id="daohang-button" @click="clicked=!clicked">

      </div>
      <div class="navinfo">
        <p id="title">2016 TTF论坛(I)暨第五届CMF趋势论坛</p>
        <div class="actions">
            <a href="#" class="disabled">EN</a>
            <a href="#">中文</a>
        </div>
        <div class="nav">
            <span><a href="/">首页</a></span>
            <span class="disabled">新闻资讯</span>
            <span class="disabled">知识分享</span>
            <span class="disabled">历届会议</span>
            <span><a href="/affairs">会务组织</a></span>
            <span><a href="/contact">联系我们</a></span>
        </div>
      </div>
      <div class="navphone" id="nav-phone" v-if="clicked">
        <div class="chacha" @click="clicked=!clicked">

        </div>
        <div class="phone" >
            <p><a href="/">首页</a></p>
            <p class="disabled">新闻资讯</p>
            <p class="disabled">知识分享</p>
            <p class="disabled">历届会议</p>
            <p><a href="/affairs">会务组织</a></p>
            <p><a href="/contact">联系我们</a></p>
        </div>
      </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      clicked: false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../style/style.styl'
a
  text-decoration:none
  color:blacktext
  font-family:"SimHei","Helvetica Neue"
.phone-daohang
  cursor:pointer
  position:absolute
  right:18px
  width:25px
  height:10px
  background:url('../assets/blackdaohang.png')
  top:20px
  z-index:9
  @media screen and (min-width: 1000px)
    display:none
header
  height: 145px
  width: 100%
  max-width:1000px
  margin: 0 auto
  // background: linear-gradient(main-red 15px,white 0)
  position: relative
  @media screen and (max-width: 1000px)
    height:48px
    background:gray1
  .navinfo
    box-sizing:border-box
    padding:0 10%
    @media screen and (max-width: 1000px)
      display:none
  .navphone
    height:35px
    width:35px
    background-image:linear-gradient(90deg,transparent)
    transform:translate(-18px,-18px)
    float:right
    margin-right:0
    @media screen and (min-width: 1000px)
      display:none
    background:#2f2f2f
    opacity:0.9
    width:120%
    height:120%
    position:fixed
    z-index:10
    .phone
      padding:15%
      p,a
        width:85%
        color:gray1
        font-size:22px
        line-height:40px
      p
        border-bottom:1px solid white
      .disabled
        color:#909090
    .chacha
      cursor:pointer
      width:35px
      height:35px
      background:url('../assets/chacha.png')
      position:fixed
      left:40px
      top:20px
  #title
    position: absolute
    margin: 0
    right: 0
    top: 33px
    color: #d2371d
    font-size: 16px
    font-family: "SimHei"
  .actions
    position: absolute
    right: 0
    top: 73px
    color: #898989
    font-size: 12px
    font-family: "Helvetica Neue","SimHei"
    a+a:before
      content:'|'
      margin-right: 2px
  .nav
    position: absolute
    right: 0
    bottom: 15px
    font-size: 16px
    font-family: "SimHei"
    span:not(:last-child)
      margin: 0px 16px
    span:last-child
      margin: 0px 0px 0 16px
    .disabled
      color:#999
  .logo
    background-image: url('../assets/logo.png')
    background-repeat: no-repeat
    width:180px
    height:72px
    background-size:cover
    transform: translateY(43px)
    @media screen and (max-width: 1000px)
      transform: translateY(13px)
      height:24px
      width:60px
      margin:0 auto
</style>

<style lang="stylus">
.navphone
  height:35px
  width:35px
  background-image:linear-gradient(90deg,transparent)
  transform:translate(-18px,-18px)
  float:right
  margin-right:0
  @media screen and (min-width: 1000px)
    display:none
  background:#2f2f2f
  opacity:0.9
  width:120%
  height:120%
  position:fixed
  z-index:1000
  .phone
    padding:15%
    p,a
      width:85%
      color:gray1
      font-size:22px
      line-height:40px
    p
      border-bottom:1px solid white
  .chacha
    cursor:pointer
    width:35px
    height:35px
    background:url('../assets/chacha.png')
    position:fixed
    left:40px
    top:20px
</style>
