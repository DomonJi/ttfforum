<template lang="html">
<main>
  <big-title cn="会议地址及交通" en="Address &amp; Transportation" current="4"></big-title>
  <div class="container">
    <p>
      交通位置 <br>
无锡君来世尊酒店(Worldhotel Grand Juna Wuxi)位于无锡市滨湖区和风路111号(与清舒道交汇处) <br>
酒店地处无锡市政府商业区，位于和风路与清舒道交汇处，交通出行便利。 <br><br>
·距离无锡硕放机场约13.1公里 <br>
·距离无锡站约15.3公里 <br>
·距离无锡汽车站约15.8公里 <br>
·距最近地铁站：地铁1号线市民中心站，约2.8公里。 <br><br>
中国无锡国际设计博览会提供会场与地铁口的短驳班车 <br>
地铁1号线市民中心站3号口往返TTF会场 <br>
班车运行时间： <br>
11月11日－13日（9:00-17:00） <br>
每20分钟一班（12:20，12:40无班车） <br><br>
    </p>
    <hr class="maxhr">
    <div class="map">

    </div>
  </div>

</main>
</template>

<script>
import BigTitle from './BigTitle.vue'
// import BMap from 'BMap'
export default {
  components: {
    BigTitle
  }
}
</script>

<style lang="stylus" scoped>
@import '../style/style.styl'
#map
  @media screen and (max-width: 1000px)
    display:none
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
        margin:40px 5%
      &:first-line
        color:main-red
        font-size:20px
        line-height:40px
    .map
      background:url('../assets/map.png') no-repeat
      width:100%
      max-width:1000px
      background-size:contain
      height:750px
      @media screen and (max-width: 1000px)
        display:none
</style>
