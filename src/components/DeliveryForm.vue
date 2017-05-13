<template lang="pug">
    form
      h3 Delivery Address
      .field.req
        label(for='firstname') First Name
        input(type='text' name='firstname' id='firstname' required)
      .field.req
        label(for='lastname') Last Name
        input(type='text' name='lastname' id='lastname' required)
      .field.req
        label(for='email') E-mail
        input(type='email' name='email' id='email' required)
      .field
        label(for='phone') Phone
        input(type='text' name='phone' id='phone')
      .field.req
        label(for='address') Address
        input(type='text' name='address' id='address' required)
      .field
        label(for='address-cont') Address Cont.
        input(type='text' name='address-cont' id='address-cont')
      .field.req
        label(for='zip-code') Zip Code
        input(type='text' name='zip-code' id='zip-code' required)
      .field.req
        label(for='city') City
        input(type='text' name='city' id='city' required)
      .field.req
        label(for='state') State
        input(type='text' name='state' id='state' required)
      .field.req
        label(for='country') Country
        .select-wrapper
          select(name='country' id='country' required)
            option
            option United States
      h3 Payment
      .field.req
        label(for='card-number') Card Number
        input(type='text' name='card-number' id='card-number' required)
      .field.req
        label(for='card-holder') Card Holder
        input(type='text' name='card-holder' id='card-holder' required)
      .field.req
        label(for='cvc') Cvc
        input(type='text' name='cvc' id='cvc' required)

      button(type='submit') Buy


</template>

<script>
  export default {
    name: 'delivery-form'
  }
</script>

<style lang="sass" rel="stylesheet/sass" scoped>

  @import '../assets/sass/mixins'

  h3
    padding-left: 12px
    color: $font-color-alt

  button
    width: 100%


</style>
