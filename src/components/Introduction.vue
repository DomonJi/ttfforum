<template lang="html">
  <main>
    <big-title cn="大会介绍" en="General Introduction"></big-title>
    <div class="container">
      <!-- <div class="title">
      </div> -->
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;设计管理和设计战略虽然被关注已久，然而由于设计领域内的学者或从业者对管理学原理、经济学理论、战略性工具、方法，乃至经济学等语言表达能力的欠缺，设计管理的研究常常表现在设计方法、流程和项目管理层面；设计战略研究的影响往往局限在企业中层的决策范围内，不能对企业的整体战略布局产生决定性的影响。
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TTF论坛将组织管理学、经济学和相关基础科学领域的专家学者同设计领域同仁一起，围绕设计管理和战略研究领域的瓶颈，共同探讨企业社会功能的转变、企业竞争策略的变化、创新机会点的把握，以及组织再学习能力的培养。
<br>
探研企业转型 <br class="minbr">
突破管理瓶颈 <br class="minbr">
把握创新机遇 <br class="minbr">
培养学习能力 <br class="minbr">
构建决策工具 <br class="minbr">
发掘战略理论 <br>
会议目标：<br class="minbr">
•	广泛需求分析：通过汇集经济、技术和社会学等方面研究成果或利用大数据等技术手段判断未来社会的广泛需求、生活方式以及消费取向的变化。 <br class="minbr">
•	竞争力和企业战略机会点分析：帮助企业理解深层次企业社会功能的变化带来的企业组织和核心竞争力的变化趋势。 <br class="minbr">
•	设计管理和企业战略研究：以经典案例研究和有影响力的企业分享为主，了解不同历史时期和不同经济模态下，企业及时应对变化、成功转型的经验和理念。 <br class="minbr">
•	围绕CMF的产业链上下游对接：结合现有成熟的CMF产业资源，把相关的材料科技和加工制造技术纳入整体战略机会点分析研究，带动不同行业对从基础研究到技术扩散整个产业链上下游的关注和资源整合。 <br>
主要理念和理论线索 <br class="minbr">
•	SLIM：知识经济学“最简线性模型” <br class="minbr">
•	ODEE：“组织创新和企业工程” <br class="minbr">
•	CMF：围绕CMF的材料应用技术和加工制造技术
      </p>
      <hr class="maxhr">
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
  line-height:28px
  @media screen and (max-width: 1000px)
    font-size:14px
    color:#555
  br
    line-height:60px
  .minbr
    line-height:18px
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
</style>
