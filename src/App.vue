<template lang="pug">
  #app
    main-header
</template>

<script>
  import MainHeader from './components/Header.vue'

  export default {
    name: 'app',
    components: {
      MainHeader
    }
  }
</script>

<style lang="sass" rel="stylesheet/sass">

  @import './assets/sass/main'

</style>
