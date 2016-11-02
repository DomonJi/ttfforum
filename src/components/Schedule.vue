<template lang="html">
<main>
  <big-title cn="11-12日会议日程" en="Meeting Schedule" current="1"></big-title>
  <div class="container">
    <div class="title">
    </div>
    <div class="schedule">
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
.container
    box-sizing:border-box
    @media screen and (max-width: 1000px)
      padding:0 5%
.title
  margin-top:40px
  margin-bottom:40px
  background:url('../assets/title.png')
  width:100%
  height:162px
  background-repeat:no-repeat
  background-position:center
  background-size:contain
  @media screen and (max-width: 1000px)
    display:none
.schedule
  background:url('../assets/Meeting.jpg')
  width:100%
  height:630px
  background-repeat:no-repeat
  background-position:center
  margin:40px 0
  background-size:contain
  margin-bottom:300px
  @media screen and (max-width: 1000px)
    height:300px
</style>
