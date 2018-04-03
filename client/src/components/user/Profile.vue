<template>
  <section class="profile">
    <about></about>
    <timeline></timeline>
    <skills></skills>
  </section>
</template>

<script>
import About from './profile/About'
import Skills from './profile/Skills'
import Timeline from './profile/Timeline'


export default {
  data () {
    return {}
  },
  methods: {
    
  },
  computed: {
    user () {
      return true
    }
  },
  components: {
    About,
    Timeline,
    Skills
  }
}
</script>

<style>

.profile {
  font-family: 'Montserrat';
  text-align: center;
}

.profile section {
  text-align: center;
}

.profile .section-title {
  color: #817091;
  margin-top: 50px;
}



</style>
