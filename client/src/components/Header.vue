<template>
  <nav class="main nav navbar navbar-expand-lg">
     <router-link to="/" class="brand nav-block navbar-brand">
        <img width="40px" height="40px" style="margin-top: 20px; margin-right: 5px;" src="../assets/t4hlogo.png" />
        <span class="d-none d-md-block">Teens4Hire</span>
     </router-link>
     <div class="search nav-block">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#A1A1A1" d="M5.8 11.7c-1.6 0-3-.6-4.1-1.7S0 7.4 0 5.8s.6-3 1.7-4.1C2.8.6 4.3 0 5.8 0s3 .6 4.1 1.7c2.3 2.3 2.3 6 0 8.3-1 1.1-2.5 1.7-4.1 1.7zM5.8 1c-1.3 0-2.5.5-3.4 1.4C1.5 3.3 1 4.5 1 5.8s.5 2.5 1.4 3.4c.9.9 2.1 1.4 3.4 1.4s2.5-.5 3.4-1.4c1.9-1.9 1.9-5 0-6.9C8.4 1.5 7.1 1 5.8 1z"></path><path fill="#A1A1A1" d="M15.5 16c-.1 0-.3 0-.3-.1L9.3 10c-.2-.2-.2-.5 0-.7s.5-.2.7 0l5.9 5.9c.2.2.2.5 0 .7-.1.1-.3.1-.4.1z"></path>
            <path fill="#A1A1A1" d="M5.8 11.7c-1.6 0-3-.6-4.1-1.7S0 7.4 0 5.8s.6-3 1.7-4.1C2.8.6 4.3 0 5.8 0s3 .6 4.1 1.7c2.3 2.3 2.3 6 0 8.3-1 1.1-2.5 1.7-4.1 1.7zM5.8 1c-1.3 0-2.5.5-3.4 1.4C1.5 3.3 1 4.5 1 5.8s.5 2.5 1.4 3.4c.9.9 2.1 1.4 3.4 1.4s2.5-.5 3.4-1.4c1.9-1.9 1.9-5 0-6.9C8.4 1.5 7.1 1 5.8 1z"></path>
            <path fill="#A1A1A1" d="M15.5 16c-.1 0-.3 0-.3-.1L9.3 10c-.2-.2-.2-.5 0-.7s.5-.2.7 0l5.9 5.9c.2.2.2.5 0 .7-.1.1-.3.1-.4.1z"></path>
        </svg>
        <span class="typehead">
            <input @keyup.enter="initiateSearch()" v-model="searchInput" type="text" id="search-input" placeholder="SEARCH" autocomplete="off" spellcheck="false" dir="auto">
        </span>
        <div @click="revealSideMenu()" class="d-lg-none responsive-sidebar-nav">
         <a href="#" class="toggle-slide menu-link btn">☰</a>
        </div>
     </div>
     <ul v-if="currentUser === null" class="d-none d-lg-block main-nav navbar-nav">
         <li v-for="item in guestMenuItems" :key="item.title" class="nav-item"><router-link :to="item.path" class="nav-link"><i v-if="item.icon" :class="item.icon"></i>&nbsp;{{ item.title }}</router-link></li>
         <!-- <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
         <li class="nav-item"><a href="#" class="nav-link">About</a></li>
         <li class="nav-item"><a href="#" class="nav-link">Documentation</a></li>
         <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
         <li class="nav-item"><a href="#" class="nav-link">Register</a></li> -->
     </ul>
     <ul v-if="currentUser !== null" class="d-none d-lg-block main-nav navbar-nav">
         <li class="nav-item"><router-link  to="/" class="nav-link">Home</router-link></li>
         <li class="nav-item"><router-link to="/" class="nav-link">News</router-link></li>
         <li class="nav-item"><router-link to="/profile" class="nav-link"><i class="fa fa-user"></i>&nbsp;Profile</router-link></li>
         <li @click="signOut()" class="nav-item"><router-link to="/"  class="nav-link"><i  class="fa fa-sign-out"></i>&nbsp;Logout</router-link></li>
     </ul>
     <!-- Slide Menu -->
     <nav id="slide-menu" class="slide-menu d-lg-none" role="navigation">
         <div class="brand">
             <img width="80px" height="80px" src="../assets/t4hlogo.png" />
             <span><span @click="hideSideMenu()" id="slide-menu-exit" style="float: right"><strong>X</strong></span></span>
         </div>
         <ul v-if="currentUser === null" class="slide-main-nav nav">
            <li v-for="item in guestMenuItems" :key="item.title" class="nav-item"><router-link :to="item.path" class="nav-link">{{ item.title }}</router-link></li>
         </ul>
         <ul v-if="currentUser !== null" class="slide-main-nav nav">
            <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
            <li class="nav-item"><router-link to="/" class="nav-link">News</router-link></li>
            <li class="nav-item"><router-link to="/profile" class="nav-link"><i class="fa fa-user"></i>&nbsp;Profile</router-link></li>
            <li @click="signOut()" class="nav-item"><router-link to="/" class="nav-link"><i  class="fa fa-sign-out"></i>&nbsp;Logout</router-link></li>
         </ul>
     </nav>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      searchInput: '',
      guestMenuItems: [
        { title: 'Home', path: '/' },
        { title: 'Mission', path: '/' },
        { title: 'Contact', path: '/' },
        { title: 'Register', path: '/register', icon: 'fa fa-sign-in' }
      ]
    }
  },
  methods: {
    revealSideMenu: function () {
      $('#app').css('transform', 'translate3d(70%, 0px, 0px)')
    },
    hideSideMenu: function () {
      $('#app').css('transform', 'translate3d(0px, 0px, 0px)')
    },
    signOut: function () {
      console.log('called sign out')
      this.$store.dispatch('signUserOut')
      this.$router.push('/')
    },
    initiateSearch () {
      this.$router.push('/search/' + this.searchInput)
    }
  },
  computed: {
    currentUser () {
      return this.$store.getters.currentUserData
    }
  }
}
</script>

<style>
nav.main {
  position: relative;
  border-bottom: 1px solid #dee0df;
  background: white;
  padding: 0;
  height: 80px;
  width: 100%;
  border-top: 1px solid #dee0df;
  box-shadow: 1px 0 2px 2px rgba(42, 42, 42, 0.25);
}

nav.main a.brand {
  border-right: 1px solid #dee0df;
  font-size: 18px;
  padding: 0 30px;
  float: left;
  line-height: 80px;
  flex: 0;
  color: #f4645f;
  height: 100%;
}

nav.main .search {
  align-items: center;
  padding: 0 30px;
  border-right: 1px solid #dee0df;
  height: 100%;
}

nav.main .nav-block {
  display: flex;
  flex: 1;
}

nav.main .search svg {
  margin-right: 15px;
}

nav.main .search .typehead {
  width: 100%;
  height: 100%;
  direction: ltr;
  position: relative;
}

nav.main .search .typehead input {
  border: none;
  background: inherit;
  width: 100%;
  height: 100%;
  vertical-align: top;
  position: relative;
  padding: 8px 12px;
  font-family: "Miriam Libre";
}

nav.main .search .typehead input {
  text-transform: none;
  overflow-x: hidden;
}

nav.main .search .typehead input:focus {
  outline: none;
}

nav.main .search .typehead input::placeholder {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
}

nav.main ul.main-nav {
  display: inline-block;
}

nav.main ul.main-nav > li {
  display: inline-block;
  align-items: center;
  margin: 0 15px;
  transition: all 0.2s ease;
}

nav.main ul.main-nav > li > a {
  display: inline-block;
  font-size: 15px;
  padding: 27px 10px;
  border-bottom: 3px solid transparent;
  transition: border 0.2s ease-out, color 0.2s ease-out;
  background-color: transparent;
  font-family: "Miriam Libre";
  color: #525252;
}

nav.main ul.main-nav > li > a:hover {
  color: #f4645f;
  border-bottom: 3px solid #f4645f;
}

nav.main .responsive-sidebar-nav {
  clear: both;
}

nav.main .btn {
  border: none;
  border-radius: 3px;
  background: #f4645f;
  padding: 10px 15px;
  font-size: 16px;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  touch-action: manipulation;
  color: white;
}

#slide-menu {
  top: 0;
  bottom: 0;
  box-sizing: border-box;
  margin: 0;
  left: -70%;
  width: 70%;
  min-height: 100%;
  position: fixed;
  z-index: 888888;
  overflow: hidden;
  backface-visibility: hidden;
  display: block;
  overflow: scroll;
  font-family: "Open Sans";
}

.slide-menu {
  padding: 0 20px;
  background-color: #f4645f;
}

#slide-menu .slide-main-nav > li > a {
  float: left;
  font-family: "Roboto";
}

.slide-menu .brand {
  padding: 22px 0;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  color: white;
}

.slide-menu a {
  line-height: 1.5;
}

.slide-menu .slide-main-nav {
  padding: 25px 0;
  margin: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
}

.slide-menu .slide-main-nav > li {
  width: 100%;
}

.slide-menu .slide-main-nav a {
  font-weight: 700;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
}

.slide-menu .slide-main-nav a:hover {
  color: rgba(255, 255, 255, 1);
}

.slide-menu #slide-menu-exit {
  cursor: pointer;
}
</style>
