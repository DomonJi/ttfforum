<template lang="html">
  <main>
      <div class="slide"></div>
      <div class="container">
          <div class="item" id="item1">
            <div class="baoming">
              <p>
                报名参会
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
                  <p>
                    大会介绍
                  <br>
                    General Introduction
                  </p>
              </div>
              <div class="text-container">
                <p>
                当你的企业多元化转型过程中寻找战略方向的时候，围绕经济学“最简线性模型”的一系列战略理念和决策工具将为你的企业提供最前沿的理论支撑。 <br>
                ……
              </p>
              </div>
              <div class="more">
                <span>更多</span>
                <span id="arrow"></span>
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
    /*max-width:1000px*/
    height: 500px
    @media screen and (max-width: 1000px)
      height:300px
      background-size:cover
      background-position:65% 100%
    background:url('../assets/banner.png')
    background-repeat: no-repeat
    background-position: center
    /*background-size:cover*/
  .container
    width: 100%
    max-width:1000px
    position: relative
    margin: 0 auto
    .item
      width: 50%
      max-width:500px
      height: 500px
      float: left
      @media screen and (max-width: 1000px)
        height:300px
      .subitem
        width: 50%
        max-width:250px
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
          color: blacktext
          margin-top: 116px
      #subitem3
        background: gray2
        p
          color: blacktext
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
      background-size:cover
      background-repeat:no-repeat
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
        @media screen and (max-width: 1000px)
          margin-top:12rem
          width:120px
          height:40px
          line-height:40px
        font-size:18px
        font-family:"黑体"
        color:white
      @media screen and (max-width: 1000px)
        width:100%
        max-width:1000px
        background-position:center
        background-size:26rem 20rem
    #item2
      @media screen and (max-width: 1000px)
        display:none
    #item3
      background: url('../assets/2.png')
      @media screen and (max-width: 1000px)
        display:none
    #item4
      background: gray1
      .more
        line-height:20px
        margin:0 auto
        color:blacktext
        font-family:"黑体"
        text-align:center
        @media screen and (max-width: 1000px)
          color:white
        span
          display:inline-block
          margin:0
          vertical-align:top
        #arrow
          width:20px
          height:20px
          background:url('../assets/more 20x20.png')
          border-radius:50%
      .text-container
        width:304px
        margin:0 auto
        text-align:center
        font-family:"黑体"
        font-size:16px
        line-height:28px
        color:#555555
        @media screen and (max-width: 1000px)
          color:white
      .agenda
        width:158px
        height:100px
        margin:0 auto
        text-align:center
        margin-top:126px
        @media screen and (max-width: 1000px)
          margin-top:36px
          height:60px
        border:4px solid main-red
        color:main-red
        font-family:"黑体"
        p
          margin-top:25px
          font-size:14px
          line-height:24px
          @media screen and (max-width: 1000px)
            margin-top:1rem
            line-height:1.2rem
          &:first-line
            font-size:18px
          @media screen and (max-width: 1000px)
            color:white
      @media screen and (max-width: 1000px)
        background:rgba(33,33,33,0.8) url('../assets/4.png')
        background-blend-mode: multiply
        width:100%
        max-width:1000px
        background-position:cover
</style>
