<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import navbar from './components/Header.vue'


export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>

#app {
  transition: all 300ms ease;
  transform: translate3d(0px, 0px, 0px);
}

@media (min-width: 996px) {
    #app {
        transform: translate3d(0px, 0px, 0px) !important;
    }
 }
</style>
