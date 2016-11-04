<template lang="html">
<main>
  <big-title cn="联系我们" en="Contact Us"></big-title>
  <div class="container" id="container">
    <p>
     联系方式 <br>
联系地址：无锡市锡山区鹅湖镇延祥路98号无锡卡秀堡辉涂料有限公司 <br>
邮政编码：214106 <br>
</p><hr class="maxhr"><p>
[TTF] 会务组 <br>
会议咨询：疏通 ＋86 13771057327 <br>
          虞昊 ＋86 18914127130 <br>
<br>
电子邮箱：shutong@cmwcoatings.com <br>
官方网站：http://ttfdesign.org <br>
网站设计与维护： shutong@cmwcoatings.com <br>
    </p>
    <hr class="maxhr">
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
    p
      font-size:18px
      line-height:28px
      @media screen and (max-width: 1000px)
        color:#555
        font-size:14px
      &:first-line
        color:main-red
        font-size:22px
        line-height:40px
</style>
