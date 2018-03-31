<template>
  <div class="home">
    <div class="main">
      <img height="auto" style="margin-top: 50px;" class="main-thumbnail" src="../assets/t4hlogo.png" />
      <div class="callout rule">
        <span class="text">See What's New!</span>
      </div>
      <div v-if="currentUser === null" class="login-section">
        <input id="login-email" v-model="email" type="email" placeholder="EMAIL ADDRESS" spellcheck="false"><br>
        <input id="login-password" v-model="password" type="password" placeholder="PASSWORD" spellcheck="false"><br>
        <div @click="login()" class="btn-login">Authenticate</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      authLoading: false
    }
  },
  methods: {
    login () {
      // Login functionality and incorrect login information notification
      if (!this.authLoading) {
        this.authLoading = true
        console.log(this.authLoading)
        $('.btn-login').text('Loading...')
        this.$store.dispatch('loginUser', {email: this.email, password: this.password}).then(response => {
          console.log('Logged in')
        }, (error) => {
          switch (this.$store.getters.loginError) {
            case 'auth/invalid-email':
              this.warn('Invalid email address')
              break
            case 'auth/user-not-found':
              this.warn('That email address is not registered')
              break
            case 'auth/wrong-password':
              this.warn('Incorrect password')
              break
            default:
              break
          }
        })
      }
      this.authLoading = false
      $('.btn-login').text('Authenticate')
      console.log(this.authLoading)
    },
    warn (str) {
      console.log(str)
      $.notify(
        {
          title: '「WARNING」',
          icon: 'fa fa-warning',
          message: str
        },
        {
          type: 'danger',
          animate: {
            enter: 'animated fadeInDown',
            exit: 'animated fadeOutDown'
          },
          placement: {
            from: 'bottom',
            align: 'left'
          },
          offset: 2,
          spacing: 10,
          z_index: 1031
        }
      )
    }
  },
  computed: {
    currentUser () {
      return this.$store.getters.currentUserData
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home {
  display: block;
  width: 100%;
  text-align: center;
}

.main {
  width: 300px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.main-thumbnail {
  height: auto;
  width: 300px;
}

.login-section>input {
  margin-bottom: 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid gray;
  width: 250px;
  font-family: "Miriam Libre";
  font-size: 14px;
  padding: 10px 15px;
}

.login-section>input::placeholder {
 letter-spacing: 1px;
}

.callout.rule {
    border-bottom: 1px solid #dee0df;
    color: #f4645f;
    text-align: center;
    font-family: "Miriam Libre",sans-serif;
    font-size: 13px;
    margin: 60px 0;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.callout.rule .text {
  top: 9px;
  background: #fff;
  padding: 0 20px;
  position: relative;
}

.btn-login {
  border: 2px solid #e5e5e5;
  width: auto;
  white-space: nowrap;
  padding: 20px 25px;
  border-radius: 5px;
  font-weight: 700;
  display: inline-block;
  cursor: pointer;
  transition: all .2s ease;

}

.btn-login:hover {
  box-shadow: 0 2px 7px rgba(0,0,0,.2);
  color: white;
  background-color: #f45645;
  border-color: transparent;
}
</style>
