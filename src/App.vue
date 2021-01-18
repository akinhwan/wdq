<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import AOS from 'aos'
import { focusHandling } from 'cruip-js-toolkit'

export default {
  name: 'App',
  mounted() {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 750,
      easing: 'ease-out-quart',
    })
    focusHandling()
    // Route change
    if (this.$router) {
      this.$watch('$route', () => {
        focusHandling('outline')
      });
    }    
  }  
}
</script>
