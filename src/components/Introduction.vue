<template lang="html">
  <main>
    <big-title cn="大会介绍" en="General Introduction"></big-title>
    <div class="container">
      <div class="title">
      </div>
      <p>
        当你的企业多元化转型过程中寻找战略方向的时候，围绕经济学“最简线性模型”的一系列战略理念和决策工具将为你的企业提供最前沿的理论支撑。 <br>

如果你的核心竞争力还停留在为品牌制造商供应材料或提供加工服务的中间环节，围绕知识经济“最简线性模型”启发您的企业发现更多的链接上游科学研究和下游终端制造的商业机会。 <br>

如果你准备创业，围绕最前沿“组织创新和企业工程”的相关理念将会让你思路大开，走出一条与别人不一样的创业道路来。 <br>

如果你不仅仅关注商业的成功，“组织创新和企业工程”里围绕社会创新的诸多案例和方法将告诉你如何成为新一代的社会领域。 <br>

如果你还在奋斗在设计和产品研发的第一线，TTF大会整合了丰富的CMF领域国际产业和科研资源。 <br>

哪怕你只是一个热爱所有美好事物的普通大众，TTF大会的色彩、材料等国际前沿趋势发布会也一定会让你大开眼界，让你的生活更加丰富多彩。 <br> <br> <br>
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
p
  font-family:"黑体"
  font-size:18px
  br
    line-height:60px
.title
  margin-top:40px
  margin-bottom:40px
  background:url('../assets/title.png')
  width:100%
  height:162px
  background-repeat:no-repeat
  background-position:center
  background-size:contain
</style>
