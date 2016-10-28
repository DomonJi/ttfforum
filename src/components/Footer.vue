<template lang="html">
  <footer>
          <div class="sponsor"></div>
          <div class="info">
              <span>Copyright 2012-2022</span> |
              <span>2016 FFT论坛</span> |
              <span>苏ICP备13063893号</span>
          </div>
      </footer>
</template>

<script>
export default {}
</script>

<style lang="stylus">
@import '../style/style.styl'


footer
  margin-top: 45px
  padding-top: 55px
  position: relative
  .sponsor
    background: url('../assets/sponsor.png')
    height: 50px
    background-repeat: no-repeat
    background-position: center
  .sponsor:before
    content:''
    height: 15px
    width: 100%
    background: main-red
    top: -5px
    position: absolute
  .sponsor:after
    content:''
    height: 1px
    width: 100%
    background: black
    top: 40px
    position: absolute
  .info
    width: auto
    max-width: max-content
    margin: 8px auto 8px
    color: gray
    font-size: 10pt
</style>
