<template lang="html">
  <main>
      <div class="slide"></div>
      <div class="container">
          <div class="item" id="item1">
            <div class="baoming">
              <p>
                报名参会(进入注册系统)
              </p>
            </div>
          </div>
          <div class="item" id="item2">
              <div class="subitem" id="subitem1">
                  <p>
                      11-12日会议日程
                  </p>
                  <hr>
                  <p>
                      13日工作坊介绍
                  </p>
              </div>
              <div class="subitem" id="subitem2">
                  <p>嘉宾介绍</p>
              </div>
              <div class="subitem" id="subitem3">
                  <p>会议地址及交通</p>
              </div>
              <div class="subitem" id="subitem4">
                  <p>会议餐饮</p>
              </div>
          </div>
          <div class="item" id="item3"></div>
          <div class="item" id="item4">
              <div class="agenda">
                  <!-- <p>大会介绍</p> -->
              </div>
          </div>
      </div>
  </main>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
@import '../style/style.styl'
main
  width: 100%
  :after
    content: ''
    display: block
    clear: both
  .slide
    width: 100%
    height: 500px
    background:url('../assets/banner.png')
    background-repeat: no-repeat
    background-position: center
  .container
    width: 1000px
    position: relative
    margin: 0 auto
    .item
      width: 500px
      height: 500px
      float: left
      .subitem
        width: 250px
        height: 250px
        float: left
        font-size: 16px
        font-family: "黑体"
        text-align: center
      #subitem1
        background:rgba(33,33,33,0.8) url('../assets/4.png')
        background-blend-mode: multiply
        hr
          margin: 0 auto
          border: 0
          height: 1px
          width: 130px
          background: white
        p
          color: white
          margin: 8px
        p:first-child
          margin-top: 100px
      #subitem2
        background: gray1
        text-align: center
        p
          color: gray3
          margin-top: 116px
      #subitem3
        background: gray2
        p
          color: gray3
        p:first-child
          margin-top: 116px
      #subitem4
        background:rgba(33,33,33,0.8) url('../assets/3.png')
        background-blend-mode: multiply
        p
          color: white
          margin-top: 116px
    #item1
      background: url('../assets/12.png') gray1
      .baoming
        background: main-red
        background-image:linear-gradient(135deg,black 60%,main-red 0)
        background-size:100% 4px
        background-repeat:no-repeat
        background-position:0 100%
        height:56px
        width:244px
        text-align:center
        line-height:56px
        margin: 0 auto
        margin-top:350px
        font-size:18px
        font-family:"黑体"
        color:white
    #item3
      background: url('../assets/2.png')
    #item4
      background: gray1
</style>
