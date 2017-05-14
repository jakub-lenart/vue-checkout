<template lang="pug">

  header.main-header
    .container
      button.mobile-nav-trigger(type='button' @click='toggleMenu') Menu
      h1.title {{ msg }}
      .minicart
        span {{ this.$store.getters.countCartProducts }}
      nav(v-bind:class="{ 'is-visible': showMobileNav }")
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
        msg: 'Acme Store',
        showMobileNav: false
      }
    },
    methods: {
      toggleMenu: function () {
        this.showMobileNav = !this.showMobileNav
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/sass">

  @import '../assets/sass/mixins'

  .main-header
    padding: 20px 0
    border-bottom: 1px solid #000
    background-color: $header-bg-color

    h1
      text-align: center
      text-transform: uppercase
      font-weight: $fw-bold
      +font-px-to-rem(18, 21)
      padding: 0 60px

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

      @media #{$max-mobile}
        right: 15px

      span
        +font-px-to-rem(12, 14)

    nav
      text-align: center
      margin-top: 20px
      transition: all ease 0.2s

      @media #{$max-mobile}
        position: fixed
        top: 0
        right: -200px
        margin: 0
        background-color: #000
        height: 100%
        width: 200px
        z-index: 10

        &.is-visible
          right: 0

      li
        display: inline-block
        +font-px-to-rem(16, 19)
        font-weight: $fw-bold
        margin: 0 20px

        @media #{$max-mobile}
          display: block
          margin: 0
          border-bottom: 1px solid #fff

        a
          color: $font-color-alt

          @media #{$max-mobile}
            display: block
            padding: 15px
            color: #fff

  .mobile-nav-trigger
    display: none
    +font-px-to-rem(13, 15)
    outline: none
    font-weight: $fw-bold
    cursor: pointer
    border: 0
    background: transparent
    position: absolute
    left: 15px
    padding-left: 35px

    @media #{$max-mobile}
      display: inline-block

    &:before
      content: ''
      width: 28px
      height: 28px
      background-image: url('../assets/img/icon-hamburger.svg')
      position: absolute
      top: 50%
      left: 0
      margin-top: -15px

</style>
