<template>
   <section class="about-me">
      <h1 class="section-title">about me</h1>
      <div class="about-container">
        <img class="profile-avatar" src="https://cdnb.artstation.com/p/assets/images/images/003/966/343/large/ilya-kuvshinov-lark.jpg?1479011320" alt="">
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
            <li v-if="this.webfolio" class="basic-info-item">
              <h4 class="basic-info-title">Webfolio</h4>
              <p class="basic-info-text">www.github.com/johndoe</p>
            </li>
          </ul>
        </div>
        <div v-html="this.desc" class="full-desc d-none d-md-block">
          
        </div>
      </div>
    </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String
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
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
.profile svg {
  overflow: visible;
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
