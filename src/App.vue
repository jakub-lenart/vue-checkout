<template lang="pug">
  #app
    main-header
    .container.clearfix
      h2.page-title {{ msg }}
      .col.col-left
        delivery-form

</template>

<script>
  import MainHeader from './components/Header.vue'
  import DeliveryForm from './components/DeliveryForm.vue'

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Checkout'
      }
    },
    components: {
      MainHeader,
      DeliveryForm
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
