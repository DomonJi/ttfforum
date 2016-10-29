<template lang="html">
  <header>
      <div class="logo"></div>
      <div class="navinfo">
        <p id="title">2016 TTF论坛(I)暨第五届CMF趋势论坛</p>
        <div class="actions">
            <span>EN</span>
            <span>中文</span>
        </div>
        <div class="nav">
            <router-link to="/">首页</router-link>
            <span>新闻资讯</span>
            <span>知识分享</span>
            <span>历届会议</span>
            <router-link to="/guests">会务组织</router-link>
            <router-link to="/">联系我们</router-link>
        </div>
      </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
@import '../style/style.styl'
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
    @media screen and (max-width: 1000px)
      display:none
  #title
    position: absolute
    margin: 0
    right: 0
    top: 33px
    color: #d2371d
    font-size: 16px
    font-family: "黑体"
  .actions
    position: absolute
    right: 0
    top: 73px
    color: #898989
    font-size: 12px
    font-family: "黑体"
    span+span:before
      content:'|'
      margin-right: 2px
  .nav
    position: absolute
    right: 0
    bottom: 15px
    font-size: 16px
    font-family: "黑体"
    span:not(:last-child)
      margin: 0px 16px
    span:last-child
      margin: 0px 0px 0 16px
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
