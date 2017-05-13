import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    shippingCost: 20,
    currencySymbol: '$'
  },
  getters: {
    getCartProducts: state => {
      return state.products
    },
    getCurrencySymbol: state => {
      return state.currencySymbol
    },
    countCartProducts: state => {
      let totalQty = 0
      state.products.map(item => {
        return totalQty = totalQty + item.qty
      })
      return totalQty
    },
    getShippingCost: state => {
      return state.currencySymbol + state.shippingCost.toFixed(2)
    },
    getSubTotal: state => {
      let totalPrice = 0
      state.products.map(item => {
        return totalPrice = totalPrice + (item.price * item.qty)
      })
      return state.currencySymbol + totalPrice.toFixed(2)
    },
    getTotalCost: state => {
      let totalPrice = 0
      state.products.map(item => {
        return totalPrice = totalPrice + (item.price * item.qty)
      })
      return state.currencySymbol + (totalPrice + state.shippingCost).toFixed(2)
    }
  },
  mutations: {
    addProducts (state, payload) {
      state.products = payload
    },
    incrementQty (state, index) {
      state.products[index].qty++
    },
    decrementQty (state, index) {
      let prodQty = state.products[index].qty
      if (prodQty > 1) state.products[index].qty--
    }
  }
})
