<template>
  <div v-if="currentUser === null" class="home">
    <div class="main">
      <img height="auto" style="margin-top: 50px;" class="main-thumbnail" src="../assets/t4hlogo.png" />
      <div class="callout rule">
        <span class="text">Register Now!</span>
      </div>
      <div class="login-section">
        <input id="register-email" v-model="username" type="text" placeholder="EMAIL ADDRESS" spellcheck="false"><br>
        <input id="register-password" v-model="password" type="password" placeholder="PASSWORD" spellcheck="false"><br>
        <input id="register-conf-password" v-model="confirmPassword" type="password" placeholder="CONFIRM PASSWORD" spellcheck="false"><br>
        <div class="btn-register" @click="registerUser()">Register</div>
      </div>
      <div class="warn-section">

      </div>
      <!-- Tell user if they entered information incorrectly -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      emailWarning: false,
      passWarning: false,
      passWarningText: 'Password must have at least one number, one lowercase letter, one uppercase letter, and 8 characters',
      emailWarningText: 'Please enter an appropiate email address'
    }
  },
  methods: {
    registerUser () {
      console.log({
        email: this.username,
        pass: this.password,
        confirmPass: this.confirmPassword
      })
      //  Check input
      if (
        this.checkPassword(this.password) === this.password &&
        this.checkEmailUsername(this.username) === this.username &&
        this.password === this.confirmPassword
      ) {
        this.$store.dispatch('registerUserWithEmailAndPassword', {
          email: this.username,
          password: this.password
        })
        this.$router.push('/')
      }
      this.passWarning = this.checkPassword(this.password) === this.password
      this.emailWarning = this.checkEmailUsername(this.username) === this.username
      this.notify()
    },
    checkPassword (str) {
      // at least one number, one lowercase and one uppercase letter
      // at least 8 characters
      let _$ = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
      return _$.test(str) ? str : null
    },
    checkEmailUsername (str) {
      let _$ = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
      return _$.test(str) ? str : null
    },
    checkUsername (str) {
      let _$ = /[^\w\s]/gi
      if (_$.test(str) === true) {
        return false
      }
      return true
    },
    notify () {
      if (this.passWarning) {
        this.warn(this.passWarningText)
      }
      if (this.emailWarning) {
        this.warn(this.emailWarningText)
      }
    },
    warn (str) {
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

.login-section > input {
  margin-bottom: 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid gray;
  width: 250px;
  font-family: "Miriam Libre";
  font-size: 14px;
  padding: 10px 15px;
}

.login-section > input::placeholder {
  letter-spacing: 1px;
}

.callout.rule {
  border-bottom: 1px solid #dee0df;
  color: #f4645f;
  text-align: center;
  font-family: "Miriam Libre", sans-serif;
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

.btn-register {
  border: 2px solid #e5e5e5;
  width: auto;
  white-space: nowrap;
  padding: 20px 25px;
  border-radius: 5px;
  font-weight: 700;
  display: inline-block;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-register:hover {
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.2);
  color: white;
  background-color: #f45645;
  border-color: transparent;
}
</style>
