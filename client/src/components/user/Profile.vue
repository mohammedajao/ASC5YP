<template>
  <section class="profile">
    <about :name="user.displayName" :email="user.email" :esc="user.desc"></about>
    <timeline></timeline>
    <skills></skills>
  </section>
</template>

<script>
import About from './profile/About'
import Skills from './profile/Skills'
import Timeline from './profile/Timeline'


export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      user: {}
    }
  },
  methods: {
    
  },
  computed: {
 
  },
  created () {
    this.$store.getters.fetchUser(this.id).then(result => {
      console.log(result)
      this.user = result
    })
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
