<template lang="html">
<main>
  <big-title cn="会议餐饮" en ="Canteen"></big-title>
  <div class="container">
    <p>会议餐饮提供： <br>
11日晚餐：“设计师之夜”晚宴        I       地点：君来世尊酒店兰花厅 <br>
12日中餐：自助餐       I       地点：君来世尊酒店 <br>
13日中餐：工作餐       I       地点：君来世尊酒店 <br><br><br><br><br><br><br><br><br>

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
p
  font-size:18px
  line-height:20px
  white-space:pre
  margin-top:40px
  &:first-line
    color:main-red
    font-size:22px
</style>
