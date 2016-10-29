<template lang="html">
  <div class="image">
    <div class="title">
      <p>
        {{cn}}
      </p>
      <p>
        {{en}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cn: {
      type: String,
      required: true
    },
    en: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../style/style.styl'

.image
  width:100%
  max-width:1000px
  height:250px
  @media screen and (max-width: 1000px)
    height:100px
    vertical-align:center
    transform:translateY(-80px)
  background:main-red
  margin:0 auto
  .title
    color:white
    font-family:"黑体"
    width:360px
    height:150px
    margin:0 auto
    @media screen and (min-width: 1000px)
      border:7px solid white
    transform:translateY(50px)
    box-sizing:border-box
    text-align:center
    p:first-child
      font-size:34px
      line-height:24px
      @media screen and (max-width: 1000px)
        font-size:20px
        /*line-height:28px*/
        transform:translateY(15px)
    p:last-child
      font-size:20px
      line-height:12px
      @media screen and (max-width: 1000px)
        display:none
</style>
