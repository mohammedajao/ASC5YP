<template>
  <section class="profile">
    <about :uid="id" :name="user.displayName" :photo="user.photoURL" :email="user.email" :esc="user.desc"></about>
    <timeline></timeline>
    <skills></skills>
    <section class="profile-rating pb-5">
      <h1 class="section-title">Rate Me!</h1>
      <div class="ratings">
        <i @mouseover="hover($event)" @mouseleave="leave($event)" @mousedown="rated = !rated" class="fa fa-star"></i>
        <i @mouseover="hover($event)" @mouseleave="leave($event)" @mousedown="rated = !rated" class="fa fa-star"></i>
        <i @mouseover="hover($event)" @mouseleave="leave($event)" @mousedown="rated = !rated" class="fa fa-star"></i>
        <i @mouseover="hover($event)" @mouseleave="leave($event)" @mousedown="rated = !rated" class="fa fa-star"></i>
        <i @mouseover="hover($event)" @mouseleave="leave($event)" @mousedown="rated = !rated" class="fa fa-star"></i>
        <i @mouseover="hover($event)" @mouseleave="leave($event)" @mousedown="rated = !rated" class="fa fa-star"></i>
        <i @mouseover="hover($event)" @mouseleave="leave($event)" @mousedown="rated = !rated" class="fa fa-star"></i>
        <i @mouseover="hover($event)" @mouseleave="leave($event)" @mousedown="rated = !rated" class="fa fa-star"></i>
        <i @mouseover="hover($event)" @mouseleave="leave($event)" @mousedown="rated = !rated" class="fa fa-star"></i>
        <i @mouseover="hover($event)" @mouseleave="leave($event)" @mousedown="rated = !rated" class="fa fa-star"></i>
      </div>
    </section>
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
      user: {},
      rated: false
    }
  },
  methods: {
    hover (event) {
      console.log(event)
      // $('.fa-star').hover(() => {
      //   console.log('works')
      //   console.log($(this.$el))
      //   $('.fa-star').prevAll().css('color', 'yellow')
      // })
      if(!this.rated) {
        $(event.target).css('color', '#e3c0c0')
        $(event.target).prevAll().css('color', '#e3c0c0')
        $(event.target).nextAll().css('color', '#5a5f75')
      }
    },
    leave (event) {
      if (!this.rated) {
        $(event.target).css('color', '#5a5f75')
        $(event.target).prevAll().css('color', '#5a5f75')
        $(event.target).nextAll().css('color', '#5a5f75')
      }
    }
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


.profile .fa-star {
  cursor: pointer;
}

</style>
