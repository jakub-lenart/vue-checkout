<template lang="pug">

  header.main-header
    .container
      h1.title {{ msg }}
      .minicart
        span 2
      nav
        ul
          li
            a(href='#') Women
          li
            a(href='#') Men
          li
            a(href='#') Accessories
          li
            a(href='#') Shoes

</template>

<script>
  export default {
    name: 'main-header',
    data () {
      return {
        msg: 'Acme Store'
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/sass">

  @import '../assets/sass/mixins'

  .main-header
    padding: 20px 0
    border-bottom: 2px solid #000
    background-color: $header-bg-color

    h1
      text-align: center
      text-transform: uppercase
      font-weight: $fw-bold
      +font-px-to-rem(18, 21)
      padding: 0 55px

    .minicart
      position: absolute
      top: 0
      right: 0
      padding-left: 35px

      &:before
        content: ''
        width: 28px
        height: 28px
        background-image: url('../assets/img/icon-bag.svg')
        position: absolute
        top: 50%
        left: 0
        margin-top: -14px

      span
        +font-px-to-rem(12, 14)

    nav
      text-align: center
      margin-top: 20px
      li
        display: inline-block
        +font-px-to-rem(16, 19)
        font-weight: $fw-bold
        margin: 0 20px
        a
          color: $font-color-alt

</style>
