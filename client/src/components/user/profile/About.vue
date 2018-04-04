<template>
   <section class="about-me">
      <h1 class="section-title">about me</h1>
      <div class="about-container">
        <!-- https://cdnb.artstation.com/p/assets/images/images/003/966/343/large/ilya-kuvshinov-lark.jpg?1479011320 -->
        <img class="profile-avatar" :src="photo" alt="">
        <div class="basic-info">
          <ul class="basic-info-nav">
            <li class="basic-info-item">
              <h4 class="basic-info-title">Full Name</h4>
              <p class="basic-info-text">{{ this.name }}</p>
            </li>
            <li class="basic-info-item">
              <h4 class="basic-info-title">E-mail</h4>
              <p class="basic-info-text">{{ this.email }}</p>
            </li>
            <li v-if="webfolio" class="basic-info-item">
              <h4 class="basic-info-title">Webfolio</h4>
              <p class="basic-info-text">{{ this.webfolio }}</p>
            </li>
          </ul>
        </div>
        <div v-html="this.desc" class="full-desc d-none d-md-block"></div>
      </div>
      <div v-if="user && user.uid === uid" @click="sendToEditor()" class="btn-edit mb-5">Edit Profile</div>
    </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    uid: {
      type: String,
      required: true
    },
    email: {
      type: String
    },
    webfolio: {
      type: String,
      required: false
    },
    desc: {
      type: String,
      required: false
    },
    photo: {
      type: String
    }
  },
  data () {
    return {
      
    }
  },
  methods: {
    sendToEditor () {
      this.$router.push('/editor')
    }
  },
  computed: {
    user () {
      return this.$store.getters.currentUserData
    }
  },
  created () {
    console.log(this.user)
  }
}
</script>

<style>
.profile svg {
  overflow: visible;
}

.profile .btn-edit {
  background-color: rgb(111, 216, 111);
  color: white;
  cursor: pointer;
  border-radius: 10px;
  padding: 20px 30px;
  display: inline-block;
  transition: .2s ease-in-out;
}

.profile .btn-edit:hover {
  box-shadow: 0 5px 5px #dcdcdc;
  top: -10px;
}

.profile .about-me {
  background-color: #F6F6F6;
  height: auto;
  overflow: auto; /* Collapsing Margins */
}

.profile .about-container {
  margin-bottom: 100px;
  display: block;
}

.profile .profile-avatar {
  border-radius: 50%;
  max-height: 350px;
  display: inline-block;
  margin-right: 100px;
  /* padding: 30px; */
  vertical-align: middle;
}

.profile .basic-info {
  padding-top: 30px;
  text-align: left;
  max-width: 210px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: middle;
}

.profile .basic-info-nav, .profile .basic-info-text{
  display: block;
  text-align: left;
  padding: 0;
}

.profile .basic-info-nav {
  margin: 0;
}

.profile .basic-info-nav, .profile .basic-info-item {
  height: auto;
  margin-bottom: 30px;
}

.profile .basic-info-item {
  margin: 0 auto;
}

.profile .basic-info .basic-info-nav>li {
  display: block;
  text-align: left;
}

.profile .basic-info-title {
  color: #f197a3;
  text-transform: uppercase;
  font-size: 20px;
}

.profile .basic-info-text {
  font-size: 14px;
  color: #604f6f;
  font-weight: 300;
  opacity: 0.9;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-font-smoothing: antialiased
}

.profile .full-desc {
  margin: 0 auto;
  margin-top: 50px;
  text-align: left;
  max-width: 600px;
  font-weight: lighter;
  color: #604f6f;
  opacity: 0.94;
  -webkit-font-smoothing: antialiased;
}

.profile .full-desc strong {
  font-weight: bolder;
  -webkit-font-smoothing: auto;
}

@media (max-width: 670px) {
  .profile .about-me {
    background-color: white;
  }
  .profile .section-title {
    font-size: 24px;
  }
  .profile .profile-avatar {
    max-height: 200px;
    margin-right: 10px;
    display: inline-block;
  }

  .profile .basic-info {
    display: inline-block;
  }
  .profile .basic-info-item {
    margin-bottom: 0;
  }
  .profile .basic-info-title {
    font-size: 14px;
  }

  .profile .basic-info-text {
    font-size: 9px;
    max-width: 150px;
  }
}

@media (max-width: 400px) {

  .profile .profile-avatar {
    max-height: 160px;
    margin-right: 10px;
    display: inline-block;
    max-width: 170px;
  }
}
</style>
