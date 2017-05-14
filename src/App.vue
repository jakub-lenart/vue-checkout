<template lang="pug">
  #app
    main-header
    .container.clearfix
      h2.page-title {{ title }}
      .col.col-right
        order-summary
      .col.col-left
        delivery-form


</template>

<script>
  import MainHeader from './components/Header.vue'
  import DeliveryForm from './components/DeliveryForm.vue'
  import OrderSummary from './components/OrderSummary.vue'
  import sampleProductsList from './assets/sample-data'

  export default {
    name: 'app',
    data () {
      return {
        title: 'Checkout'
      }
    },
    components: {
      MainHeader,
      DeliveryForm,
      OrderSummary
    },
    mounted () {
      this.$store.commit('addProducts', sampleProductsList.products)
    }
  }
</script>

<style lang="sass" rel="stylesheet/sass">

  @import './assets/sass/main'

  .page-title
    text-align: center
    text-transform: uppercase
    +font-px-to-rem(13, 15)
    font-weight: $fw-bold
    margin: 25px 0 40px
    letter-spacing: 0.8px

</style>
