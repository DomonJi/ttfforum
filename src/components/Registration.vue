<template lang="html">
<main>
  <big-title cn="报名参会" en="Registration"></big-title>
  <div class="container" id="container">
    <p>
      会议报名 <br>
11-12日会议——注册费 2000元, 学生注册 300元 <br>
13日工作坊——注册费 1000元, 学生注册 300元 <br>

1. 汇款（汇款时请标注汇款单位、参会人姓名、手机号码） <br>
汇款至——无锡市工业设计协会  江苏银行无锡香榭支行  800060188900004847 <br>
<br>
2. 汇款完成后按照以下表格填写并Email至：shutong@cmwcoatings.com <br>
<a href="./2016TTF.xlsx">下载2016TTF论坛报名表.xlsx</a> <br>
<br>
3. 注意事项： <br>
(1)会议发票开票项目为：服务费； <br>
(2)发票会后工作人员会联系您开具发票； <br>
(3)请务必填写手机号码，手机号码将会作为参会的唯一凭证。 <br><br><br><br><br><br>

    </p>
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
    box-sizing:border-box
    @media screen and (max-width: 1000px)
      padding:5%
    p
      font-size:18px
      line-height:28px
      &:first-line
        color:main-red
        font-size:22px
        line-height:40px
    a
      color:main-red
    #xlsx
      background:url('../assets/xlxicon.png')
      width:20px
      height:20px
      display:inline
</style>
