<template lang="pug">
    form(@submit.prevent='sendForm' @change='validateForm')

      h3 Delivery Address

      .field.req
        label(for='firstname') First Name
        input(type='text' name='firstname' id='firstname' v-model='form.firstname' required)

      .field.req
        label(for='lastname') Last Name
        input(type='text' name='lastname' id='lastname' v-model='form.lastname' required)

      .field.req
        label(for='email') E-mail
        input(type='email' id='email' v-model='form.email' required)

      .field
        label(for='phone') Phone
        input(type='text' name='phone' id='phone')

      .field.req
        label(for='address') Address
        input(type='text' name='address' id='address' v-model='form.address' required)

      .field
        label(for='address-cont') Address Cont.
        input(type='text' name='address-cont' id='address-cont')

      .field.req
        label(for='zip-code') Zip Code
        input(type='text' name='zip-code' id='zip-code' v-model='form.zipCode' required)

      .field.req
        label(for='city') City
        input(type='text' name='city' id='city' v-model='form.city' required)

      .field.req
        label(for='state') State
        input(type='text' name='state' id='state' v-model='form.state' required)

      .field.req
        label(for='country') Country
        .select-wrapper
          select(name='country' id='country' v-model='form.country' required)
            option
            option United States

      h3 Payment

      .field.req
        label(for='card-number') Card Number
        input(type='text' name='card-number' v-model='form.cardNumber' id='card-number' required)

      .field.req
        label(for='card-holder') Card Holder
        input(type='text' name='card-holder' id='card-holder' v-model='form.cardHolder' required)

      .field.req
        label(for='cvc') Cvc
        input(type='text' name='cvc' id='cvc' v-model='form.cvc' required)

      button(type='submit' :disabled='!isFormValid') Buy


</template>

<script>
  export default {
    name: 'delivery-form',
    data () {
      return {
        isFormValid: false,
        // Only required fields
        form: {
          firstname: '',
          lastname: '',
          email: '',
          address: '',
          zipCode: '',
          city: '',
          state: '',
          country: '',
          cardNumber: '',
          cardHolder: '',
          cvc: ''
        }
      }
    },
    methods: {
      sendForm: function () {
        alert('form sent')
      },
      validateForm: function () {
        let emptyFields = []
        Object.values(this.form).map(item => {
          if (item.length === 0) emptyFields.push(item)
        })
        this.isFormValid = emptyFields.length === 0;
      }
    }
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
