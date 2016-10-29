<template lang="html">
<main>
  <big-title cn="会务组织" en="Committee Affairs"></big-title>
  <div class="container" id="container">
    <p>
      主办单位 <br>
无锡市人民政府
</p><p>
承办单位 <br>
中国 (无锡) 国际设计博览会组委会 <br>
TTF联盟 <br>
无锡市工业设计协会 <br>
江南大学&amp;卡秀堡辉联合创新实验室
</p><p>
支持单位 <br>
卡秀堡辉控股有限公司 <br>
老虎粉末 (太仓) 有限公司 <br>
格伦雷文纺织科技 (苏州) 有限公司 <br>
IXDC国际体验设计协会 <br>
唐硕设计 <br>
中瑞智慧 <br>
无锡市对外科技交流中心
</p><p>
合作媒体 <br>
哈佛商业评论 <br>
Meia <br>
CMF设计军团 <br>
BillWang <br>
求是设计会 <br>
电器杂志 <br>
办公家具杂志 <br>
土木在线 <br>
产业在线 <br>
材料馆 <br><br><br><br><br><br><br><br><br><br><br><br>
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
    p
      font-size:18px
      line-height:28px
      &:first-line
        color:main-red
        font-size:22px
        line-height:40px
</style>
