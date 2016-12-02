<template lang="html">
<main>
  <big-title cn="知识分享" en="Knowledge Sharing"></big-title>
  <div class="container" id="container">
    <div class="item" id="item1">
      <div class="download">
        <span>2016TTF论坛邀请函</span>
        <span class="two"><a href="/invitation.zip">下载</a></span>
      </div>
    </div>
    <div class="item" id="item2">
      <div class="download">
        <span>精彩照片</span>
        <!-- <span class="two"><a href="/photos.zip">下载</a></span> -->
      </div>
    </div>
    <div class="item" id="item3">
      <div class="download">
        <span>论坛ppt</span>
        <span class="two"><a href="https://pan.baidu.com/s/1hrTLN3u" target="_blank">下载</a></span>
      </div>
    </div>
  </div>
</main>
</template>

<script>
import BigTitle from './BigTitle.vue'
export default {
  components: {
    BigTitle
  }
}
</script>

<style lang="stylus" scoped>
@import '../style/style.styl'

main
  .container
    /*box-sizing:border-box
    @media screen and (max-width: 1000px)
      padding:5%*/
    display:flex
    justify-content:space-around
    margin-top:20px
    @media screen and (max-width: 1000px)
      justify-content:flex-start
      flex-direction:column
    .item
      width:320px
      /*flex-basis:320px*/
      max-width:100%
      height:320px
      @media screen and (max-width: 1000px)
        height:180px
      position:relative
      @media screen and (min-width: 1000px)
        border:1px solid blacktext
    #item1
      background:url('../assets/sharing2.png') no-repeat
    #item2
      background:url('../assets/sharing3.png') no-repeat
    #item3
      background:url('../assets/sharing1.png') no-repeat

    .download
      position:absolute
      bottom:0
      width:100%
      height:50px
      background:rgba(0,0,0,0.6)
      /*display:flex
      justify-content:space-between
      align-items:center*/
      line-height:50px
      span
        color:white
        margin-left:10px
      .two
        margin-right:0
        float:right
        transform:translate(-10px,-50px)
        a
          color:white
</style>
