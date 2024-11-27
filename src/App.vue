<template>
  <Navbar />
  <LandingPage msg="Welcome to Your Vue.js App"/>
</template>

<script>

import LandingPage from './components/LandingPage.vue'
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    LandingPage,
    Navbar
  }
}
</script>

<style>

</style>
