<template lang="html">
<main>
  <big-title cn="会议餐饮" en ="Canteen" current="5"></big-title>
  <div class="container">
    <div class="pc">
      <p>会议餐饮提供： <br><br><br>11日晚餐：“设计师之夜”晚宴        I       地点：君来世尊酒店兰花厅 <br>12日中餐：自助餐       I       地点：君来世尊酒店 <br>13日中餐：工作餐       I       地点：君来世尊酒店 <br><br><br><br><br><br><br><br><br>

      </p>
    </div>
    <div class="phone">
      <p class="big">11日晚餐</p><hr class="minhr"><p>“设计师之夜”晚宴        I       地点：君来世尊酒店兰花厅</p><hr class="maxhr"><p class="big">12日中餐</p><hr class="minhr"><p>自助餐       I       地点：君来世尊酒店</p><hr class="maxhr"><p class="big">13日中餐</p><hr class="minhr"><p>工作餐       I       地点：君来世尊酒店</p><hr class="maxhr">
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
.pc
  @media screen and (max-width: 1000px)
    display:none
.phone
  white-space:pre
  @media screen and (min-width: 1000px)
    display:none
/*.container
    box-sizing:border-box
    @media screen and (max-width: 1000px)
      padding:5%*/
  .big
    font-size:18px
p
  font-size:18px
  @media screen and (max-width: 1000px)
    font-size:14px
  line-height:28px
  @media screen and (min-width: 1000px)
    white-space:pre
  /*margin-top:40px*/
  &:first-line
    /*font-size:24px*/
    @media screen and (min-width: 1000px)
      color:main-red
      font-size:22px
</style>
