<template lang="html">
<main>
  <big-title cn="会议地址及交通" en="Address &amp; Transportation"></big-title>
  <div class="container">
    <p>
      交通位置 <br>
无锡君来世尊酒店(Worldhotel Grand Juna Wuxi)位于无锡市滨湖区和风路111号(与清舒道交汇处) <br>
酒店地处无锡市政府商业区，位于和风路与清舒道交汇处，交通出行便利。 <br>
·距离无锡硕放机场约13.1公里 <br>
·距离无锡站约15.3公里 <br>
·距离无锡汽车站约15.8公里 <br>
·距最近地铁站：地铁1号线市民中心站，约2.8公里。 <br>

    </p>
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
  // mounted() {
  //   var map
  //   map = new BMap.Map('map')
  //   map.centerAndZoom(new BMap.Point(120.326488, 31.483992), 16)
  //   map.enableScrollWheelZoom()
  //   map.enableKeyboard()
  //   map.enableDragging()
  //   map.enableDoubleClickZoom()
  //   target.addEventListener('click', function() {
  //     target.openInfoWindow(window);
  //   })
  //   var markers = [{
  //     content: "",
  //     title: "",
  //     imageOffset: {
  //       width: -46,
  //       height: -21
  //     },
  //     position: {
  //       lat: 31.483653,
  //       lng: 120.327162
  //     }
  //   }]
  //   for (var index = 0; index < markers.length; index++) {
  //     var point = new BMap.Point(markers[index].position.lng, markers[index].position.lat);
  //     var marker = new BMap.Marker(point, {
  //       icon: new BMap.Icon('http://api.map.baidu.com/lbsapi/createmap/images/icon.png', new BMap.Size(20, 25), {
  //         imageOffset: new BMap.Size(markers[index].imageOffset.width, markers[index].imageOffset.height)
  //       })
  //     })
  //     var label = new BMap.Label(markers[index].title, {
  //       offset: new BMap.Size(25, 5)
  //     })
  //     var opts = {
  //       width: 200,
  //       title: markers[index].title,
  //       enableMessage: false
  //     }
  //     var infoWindow = new BMap.InfoWindow(markers[index].content, opts)
  //     marker.setLabel(label)
  //       // addClickHandler(marker, infoWindow)
  //     map.addOverlay(marker)
  //   }
  //   var scaleControl = new BMap.ScaleControl({
  //     anchor: BMAP_ANCHOR_BOTTOM_LEFT
  //   })
  //   scaleControl.setUnit(BMAP_UNIT_IMPERIAL)
  //   map.addControl(scaleControl)
  //   var navControl = new BMap.NavigationControl({
  //     anchor: BMAP_ANCHOR_TOP_LEFT,
  //     type: BMAP_NAVIGATION_CONTROL_LARGE
  //   })
  //   map.addControl(navControl)
  //   var overviewControl = new BMap.OverviewMapControl({
  //     anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
  //     isOpen: true
  //   })
  //   map.addControl(overviewControl)
  // }
}
</script>

<style lang="stylus" scoped>
@import '../style/style.styl'
#map
  @media screen and (max-width: 1000px)
    display:none
main
  .container
    box-sizing:border-box
    @media screen and (max-width: 1000px)
      padding:5%
    p
      font-size:18px
      line-height:28px
      margin:40px 0
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
</style>
