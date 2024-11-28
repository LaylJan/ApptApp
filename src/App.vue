<template>
  <Navbar />
  <LandingPage msg="Welcome to Your Vue.js App"/>
  <Footer></Footer>
</template>

<script>

import LandingPage from './components/LandingPage.vue'
import Navbar from './components/Navbar.vue';
import Footer from './components/footer.vue';

export default {
  name: 'App',
  components: {
    LandingPage,
    Navbar,
    Footer
  }
}
</script>

<style>

</style>
