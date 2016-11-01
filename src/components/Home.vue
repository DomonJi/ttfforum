<template lang="html">
  <main>
      <div class="slide"></div>
      <div class="container-main">
          <div class="item" id="item1">
            <div class="baoming">
              <p>
                <a href="/registration">报名参会</a>
              </p>
            </div>
          </div>
          <div class="item" id="item2">
              <div class="subitem" id="subitem1">
                  <p>
                      <a href="/schedule">11-12日会议日程</a>
                  </p>
                  <hr>
                  <p>
                      <a href="/workshop">13日工作坊介绍</a>
                  </p>
              </div>
              <div class="subitem" id="subitem2">
                  <p><a href="/guests">嘉宾介绍</a></p>
              </div>
              <div class="subitem" id="subitem3">
                  <p><a href="/address">会议地址及交通</a></p>
              </div>
              <div class="subitem" id="subitem4">
                  <p><a href="/canteen">会议餐饮</a></p>
              </div>

          </div>
          <div class="item" id="item3">
            <div class="phone">
              <div class="agenda">
                  <p>
                    大会服务
                  </p>
              </div>
              <div class="flexitem">
                <div class="phoneitem" id="phoneitem1"><p>
                  <a href="/workshop">会议日程工作坊</a>
                </p></div>
                <div class="phoneitem" id="phoneitem2"><p>
                  <a href="/guests">嘉宾介绍</a>
                </p></div>
                <div class="phoneitem" id="phoneitem3"><p>
                  <a href="/address">会议地址与交通</a>
                </p></div>
                <div class="phoneitem" id="phoneitem4"><p>
                  <a href="/canteen">会议餐饮</a>
                </p></div>
              </div>

            </div>
          </div>
          <div class="item" id="item4">
              <div class="agenda">
                  <p>
                    大会介绍
                  </p><p>
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
                <span><a href="/introduction">更多</a></span>
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
      height:180px
      background-size:cover
      background-position:65% 100%
    background:url('../assets/banner.png')
    background-repeat: no-repeat
    background-position: center
    /*background-size:cover*/
  .container-main
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
        height:180px
      .subitem
        width: 50%
        max-width:250px
        height: 250px
        float: left
        font-size: 18px
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
        a
          color:white
        p:first-child
          margin-top: 100px
      #subitem2
        background: gray1
        text-align: center
        p,a
          color: blacktext
          margin-top: 116px
      #subitem3
        background: gray2
        p,a
          color: blacktext
        p:first-child
          margin-top: 116px
      #subitem4
        background:rgba(33,33,33,0.8) url('../assets/3.png')
        background-blend-mode: multiply
        p,a
          color: white
          margin-top: 116px
    #item1
      background: url('../assets/12.png') gray1
      background-size:cover
      background-repeat:no-repeat
      a
        color:white
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
          margin-top:7.5rem
          width:120px
          height:34px
          line-height:34px
        font-size:18px
        font-family:"黑体"
        color:white
      @media screen and (max-width: 1000px)
        background:url('../assets/640x300.png') no-repeat
        width:100%
        height:180px
        max-width:1000px
        background-position:50% 10%
        background-size:120%
    #item2
      @media screen and (max-width: 1000px)
        display:none
    #item3
      background: url('../assets/2.png')
      .agenda
        width:158px
        height:100px
        margin:0 auto
        text-align:center
        margin-top:126px
        @media screen and (max-width: 1000px)
          margin-top:0px
          height:40px
        color:blacktext
        font-family:"黑体"
        p,a
          margin-top:25px
          font-size:18px
          line-height:24px
          @media screen and (max-width: 1000px)
            margin-top:1.2rem
            line-height:1.2rem
          &:first-line
            font-size:22px
            @media screen and (max-width: 1000px)
              font-size:20px
          &:before
            content:''
            position:absolute
            background-image:linear-gradient(90deg,transparent 0%,blacktext 100%)
            height:2px
            width:90px
            transform:translate(-95px,6px)
          &:after
            content:''
            position:absolute
            background-image:linear-gradient(270deg,transparent 0%,blacktext 100%)
            height:2px
            width:90px
            transform:translate(125px,-12px)
      .flexitem
        display:flex
        width:100%
        justify-content:space-between
        /*align-items:center*/
        .phoneitem
          width:28px
          height:26px
          /*display:inline-block*/
          text-align:center
          margin:0 auto
          min-width:max-content
          background-size:contain
          p
            font-size:12px
            color:blacktext
            position:absolute
            width:16%
            transform:translate(-28%,50px)
            @media screen and (max-width: 1000px)
              margin-top:0
          /*&+.phoneitem:before
            content:''
            height:125px
            width:1px
            background:main-red
            position:absolute
            transform:translate(-50px,-15%)*/
      #phoneitem1
        background:url('../assets/homephone/1.png') no-repeat
        background-size:contain
      #phoneitem2
        background:url('../assets/homephone/2.png') no-repeat
        background-size:contain
      #phoneitem3
        background:url('../assets/homephone/4.png') no-repeat
        background-size:contain
      #phoneitem4
        background:url('../assets/homephone/3.png') no-repeat
        background-size:contain
      @media screen and (min-width: 1000px)
        .phone
          display:none
      @media screen and (max-width: 1000px)
        width:100%
        max-width:1000px
        background:gray2
        padding:0 5%
        box-sizing:border-box
        height:180px


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
          line-height:6px
          a
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
          @media screen and (max-width: 1000px)
            transform:translateY(-6px)
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
          font-size:12px
          line-height:24px
          width:90%
      .agenda
        width:158px
        height:100px
        margin:0 auto
        text-align:center
        margin-top:126px
        @media screen and (max-width: 1000px)
          margin-top:16px
          height:20px
        @media screen and (min-width: 1000px)
          border:4px solid main-red
        color:main-red
        font-family:"黑体"
        p,a
          margin-top:25px
          font-size:14px
          /*line-height:24px*/
          @media screen and (max-width: 1000px)
            margin-top:1.2rem
            line-height:1.2rem
            color:white
          &:first-child
            font-size:20px
            @media screen and (max-width: 1000px)
              &:before
                content:''
                position:absolute
                background-image:linear-gradient(90deg,transparent 0%,white 100%)
                height:2px
                width:90px
                transform:translate(-95px,6px)
              &:after
                content:''
                position:absolute
                background-image:linear-gradient(270deg,transparent 0%,white 100%)
                height:2px
                width:90px
                transform:translate(125px,-12px)
          &:last-child
            transform:translateY(-18px)
            @media screen and (max-width: 1000px)
              display:none
      @media screen and (max-width: 1000px)
        background:rgba(33,33,33,0.7) url('../assets/4.png')
        background-blend-mode: multiply
        width:100%
        max-width:1000px
        background-position:cover
</style>
