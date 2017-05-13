<template lang="pug">

  .summary

    h3 Your order

    ul.products(v-for='(product, index) in this.$store.getters.getCartProducts')
      li
        .img-wrapper(v-if='product.thumbnail')
          img(:src='product.thumbnail' :alt='product.name')
        .info
          p.name {{ product.name }}
          .qty
            button(type='button' class='minus' @click='decrementQty(index)')
            input(type='text' :value='product.qty')
            button(type='button' class='plus' @click='incrementQty(index)')
          p.price Price
            span {{ currencySymbol + (product.price * product.qty).toFixed(2) }}

    h3 Order summary
    p Subtotal
      span {{ this.$store.getters.getSubTotal }}
    p Shipping
      span {{ this.$store.getters.getShippingCost }}
    p.total Total
      span {{ this.$store.getters.getTotalCost }}



</template>

<script>
  export default {
    name: 'order-summary',
    data () {
      return {
        currencySymbol: this.$store.getters.getCurrencySymbol
      }
    },
    methods: {
      incrementQty (index) {
        this.$store.commit('incrementQty', index)
      },
      decrementQty (index) {
        this.$store.commit('decrementQty', index)
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/sass" scoped>

  @import '../assets/sass/mixins'

  .summary
    p
      margin-bottom: 10px

      &.total
        border-top: 1px solid #979797
        margin-top: 20px
        padding-top: 10px

        span
          font-weight: $fw-bold

      span
        float: right

  h3
    padding-left: 12px
    color: $font-color-alt

  .products
    margin-bottom: 35px

    li
      position: relative
      margin-bottom: 25px

    .img-wrapper
      width: 80px
      height: 80px
      background-color: #fff
      position: absolute
      top: 0
      left: 0
      display: flex
      justify-content: center
      align-items: center

      & + .info
        padding-left: 100px

      img
        max-width: 96%
        height: auto

    .name
      +font-px-to-rem(16, 19)
      font-weight: $fw-bold
      color: $font-color-alt
      margin-bottom: 8px

    .qty
      display: flex
      justify-content: flex-start
      margin-bottom: 10px

    .price
      +font-px-to-rem(13, 15)

      span
        float: right
        font-weight: $fw-bold

    button
      width: 24px
      height: 24px
      cursor: pointer
      border: 0
      background-color: transparent
      outline: none
      display: inline-block

      &.plus
        background-image: url('../assets/img/icon-plus.svg')

      &.minus
        background-image: url('../assets/img/icon-minus.svg')

    input
      background-color: transparent
      width: 40px
      height: 20px
      text-align: center
      color: #000
      outline: none
      border: 0
      +font-px-to-rem(13, 15)


</style>
