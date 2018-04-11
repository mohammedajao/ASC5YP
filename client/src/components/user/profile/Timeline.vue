<template>
  <section class="education-experience">
      <h1 class="section-title">education - experience</h1>
      <div v-if="!timeline" class="mb-5" style="color: white; text-align: center;"><em>Nothing here!</em></div>
      <div class="timeline" v-if="timeline">
        <!-- whod = we have our date ||| r and l are right and left -->

        <div class="div ee-container" v-for="(item, index) in timeline" :key="index">
          <div class="line-container">
            <div class="info info-right" v-if="index % 2 !== 0">
              <h3 class="container-title">{{ item.title }}</h3>
              <p class="container-subtitle">{{ item.subtitle }}</p>
              <p class="container-desc">{{ item.desc }}</p>
              <p class="container-location">{{ item.location }}</p>
            </div>
            <div v-if="index % 2 !== 0" class="icon"><i class="fa fa-graduation-cap"></i></div>
            <div v-if="index % 2 !== 0" class="right-line date-left date-range-indication"><span class="bubble"></span><span class="date-range"><strong>{{ item.range }}</strong></span></div>


            <div v-if="index % 2 === 0" class="left-line date-right date-range-indication"><span class="date-range"><strong>{{ item.range }}</strong></span><span class="bubble"></span></div>
            <div v-if="index % 2 === 0" class="icon"><i class="fa fa-graduation-cap"></i></div>
            <div v-if="index % 2 === 0" class="info info-left">
              <h3 class="container-title">{{ item.title }}</h3>
              <p class="container-subtitle">{{ item.subtitle }}</p>
              <p class="container-desc">{{ item.desc }}</p>
              <p class="container-location">{{ item.location }}</p>
            </div>
          </div>
        </div>

        <!-- <div v-if="index % 2 !== 0" :id="index" class="ee-container whodr">
          <div class="line-container">
            <div class="info info-right">
              <h3 class="container-title">{{ item.title }}</h3>
              <p class="container-subtitle">{{ item.subtitle }}</p>
              <p class="container-desc">{{ item.desc }}</p>
              <p class="container-location">{{ item.location }}</p>
            </div>
            <div class="icon"><i class="fa fa-graduation-cap"></i></div>
            <div class="right-line date-left date-range-indication"><span class="bubble"></span><span class="date-range"><strong>{{ item.range }}</strong></span></div>
          </div>
        </div>

        <div v-if="index % 2 === 0" class="ee-container whodl">
          <div class="line-container">
            <div class="left-line date-right date-range-indication"><span class="date-range"><strong>{{ item.range }}</strong></span><span class="bubble"></span></div>
            <div class="icon"><i class="fa fa-graduation-cap"></i></div>
            <div class="info info-left">
              <h3 class="container-title">{{ item.title }}</h3>
              <p class="container-subtitle">{{ item.subtitle }}</p>
              <p class="container-desc">{{ item.desc }}</p>
              <p class="container-location">{{ item.location }}</p>
            </div>
          </div>
        </div> -->

        <div class="ee-container whodr">
          <div class="line-container">
            <div class="info info-right">
              <h3 class="container-title">highschool diploma</h3>
              <p class="container-subtitle"></p>
              <p class="container-desc">Bronx Highschool of Science</p>
              <p class="container-location">New York, USA</p>
            </div>
            <div class="icon"><i class="fa fa-graduation-cap"></i></div>
            <div class="right-line date-left date-range-indication"><span class="bubble"></span><span class="date-range"><strong>sep 2005 - jun 2010</strong></span></div>
          </div>
        </div>

        <div class="ee-container whodl">
          <div class="line-container">
            <div class="left-line date-right date-range-indication"><span class="date-range"><strong>oct 2010 - in progress</strong></span><span class="bubble"></span></div>
            <div class="icon"><i class="fa fa-graduation-cap"></i></div>
            <div class="info info-left">
              <h3 class="container-title">Bachelor in Computer Science</h3>
              <p class="container-subtitle">Colubmia Engineering Experience</p>
              <p class="container-desc">King's College, 110/110(manga cum laude)</p>
              <p class="container-location">New York, USA</p>
            </div>
          </div>
        </div>

        <div class="ee-container whodr">
          <div class="line-container">
            <div class="info info-right">
              <h3 class="container-title">highschool diploma</h3>
              <p class="container-subtitle"></p>
              <p class="container-desc">Bronx Highschool of Science</p>
              <p class="container-location">New York, USA</p>
            </div>
            <div class="icon"><i class="fa fa-graduation-cap"></i></div>
            <div class="right-line date-left date-range-indication"><span class="bubble"></span><span class="date-range"><strong>sep 2005 - jun 2010</strong></span></div>
          </div>
        </div>

        <div class="ee-container whodl">
          <div class="line-container">
            <div class="left-line date-right date-range-indication"><span class="date-range"><strong>oct 2010 - in progress</strong></span><span class="bubble"></span></div>
            <div class="icon"><i class="fa fa-graduation-cap"></i></div>
            <div class="info info-left">
              <h3 class="container-title">Bachelor in Computer Science</h3>
              <p class="container-subtitle"></p>
              <p class="container-desc">King's College, 110/110(manga cum laude)</p>
              <p class="container-location">New York, USA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  // props: {
  //   timeline: {
  //     type: Array,
  //     required: false
  //   }
  // },
  data () {
    return {
      timeline: [
        {
          title: 'highschool diploma',
          range: 'sep 2005 - jun 2010',
          location: 'New York, USA'
        },
        {
          title: 'Bachelor in computer science',
          subtitle: 'columbia engineering experience',
          desc: 'King\'s Colleg, 110/110(magna cum laude)',
          location: 'New York, USA',
          range: 'oct 2010 - in progress'
        },
        {
          title: 'highschool diploma',
          range: 'sep 2005 - jun 2010',
          location: 'New York, USA'
        },
        {
          title: 'Bachelor in computer science',
          subtitle: 'columbia engineering experience',
          desc: 'King\'s Colleg, 110/110(magna cum laude)',
          location: 'New York, USA',
          range: 'oct 2010 - in progress'
        },
        {
          title: 'highschool diploma',
          range: 'sep 2005 - jun 2010',
          location: 'New York, USA'
        },
        {
          title: 'Bachelor in computer science',
          subtitle: 'columbia engineering experience',
          desc: 'King\'s Colleg, 110/110(magna cum laude)',
          location: 'New York, USA',
          range: 'oct 2010 - in progress'
        }
      ]
    }
  },
  created () {
    // Organize timeline
  }
}
</script>

<style>
.profile .education-experience {
  background-color: #446594;
  color: white;
  height: auto;
  overflow: auto;
  -webkit-font-smoothing: antialiased;
}

.profile .education-experience h1.section-title {
  color: white;
  margin-bottom: 50px;
}

.profile .timeline {
  margin: 0 auto;
  position: relative;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-content: space-between;
}

.profile .date-left {
  float: left;
  text-align: left;
  margin-left: 35px;
}

.profile .date-right {
  float: right;
  text-align: right;
  margin-right: 35px;
}

.profile .line-container {
  display: flex;
  justify-content: center;
}

.profile .ee-container {
  display: block;
  width: 100%;
  margin-bottom: 50px;
  height: 100px;
}

.timeline .icon {
  width: 50px;
  height: 50px;
  display: inline-block;
  background-color: white;
  border: 4px solid #f197a3;
  color: #f197a3;
  border-radius: 50%;
  padding: 10px;

}

.ee-container:first-of-type .line-container .icon::before {
  content: '';
  display: block;
  background-color: white;
  height: 30px;
  margin: 0 auto;
  margin-top: -50px;
  margin-bottom: 20px;
  width: 6px;
  border-radius: 20px;
}

.ee-container:last-child .line-container .icon::after {
  content: '';
  display: block;
  background-color: white;
  height: 35px;
  margin: 0 auto;
  margin-top: 15px;
  width: 6px;
  border-radius: 20px;
}

.timeline .icon::after {
  content: '';
  display: block;
  background-color: white;
  height: 90px;
  margin: 0 auto;
  margin-top: 15px;
  width: 6px;
  border-radius: 20px;
  
}

.timeline .icon .fa {
  font-size: 22px;
  transform:translate(-10%, 10%);
}

.timeline .container-title {
  font-size: 18px;
  text-transform: uppercase;
}

.timeline .container-subtitle {
  color: #ef8473;
  text-transform: uppercase;
  font-family: 'Open Sans';
  margin: 10px auto;
}

.timeline .info {
  width: 50%;
}
.timeline .info-left {
  text-align: left;
  float: right;
  margin-left: 35px;
}

.timeline .info-right {
  text-align: right;
  float: left;
  margin-right: 35px;
}

.timeline .container-desc, .timeline .container-location {
  color: #F4BAA5;
  font-size: 12px;
  font-weight: lighter;
  font-family: 'Open Sans';
  margin-bottom: 1px;
}

.profile .date-range-indication {
  width: 50%;
  display: inline-block;
}



.profile .education-experience .date-range {
  color: #446594;
  font-family: 'Montserrat';
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 30px;
  margin-bottom: 10px;
  padding: 18px 40px;
  display: inline-block;
  background-color: #f197a3;
  position: relative;
}

.profile .education-experience .date-range-indication .bubble {
  background-color: #f197a3;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.date-left .bubble {
  margin-right: 35px;
}

.date-right .bubble {
  margin-left: 35px;
}

@media(max-width: 1000px) {

  .profile .education-experience h1.section-title {
    white-space: nowrap;
  }
  .profile .ee-container {
    height: 70px;
  }

  .ee-container:first-of-type .line-container .icon::before {
    height: 25px;
    margin-bottom: 25px;
  }

  .ee-container:last-child .line-container .icon::after {
    height: 35px;
  }

  .timeline .icon::after {
    background-color: white;
    height: 60px;
    margin-top: 10px;
  }

  .timeline .icon {
    width: 40px;
    height: 40px;
  }

  .timeline .icon .fa {
    font-size: 16px;
    transform:translate(-20%, -25%);
  }

  .profile .education-experience .date-range {
    border-radius: 30px;
    margin-bottom: 10px;
    padding: 14px 36px;
    font-size: 12px;
  }

  .timeline .container-title {
    font-size: 14px;
    text-transform: uppercase;
  }

  .timeline .container-subtitle {
   font-size: 11px;
  }

  .timeline .container-desc, .timeline .container-location {
    font-size: 11px;
  }
}

@media(max-width: 700px) {
  .profile .education-experience h1.section-title {
    font-size: 20px;
  }
  
  .profile .ee-container {
    height: 70px;
  }

  .ee-container:first-of-type .line-container .icon::before {
    height: 25px;
    margin-bottom: 25px;
  }

  .ee-container:last-child .line-container .icon::after {
    height: 35px;
  }

  .timeline .info-left {
    margin-left: 10px;
  }

  .timeline .info-right {
    margin-right: 10px;
  }

  .line-container .bubble {
    margin-left: 15px;
    margin-right: 15px;
  }

  .line-container .date-right {
    margin-right: 10px;
  }

  .line-container .date-left {
    margin-left: 10px;
  }

  .timeline .icon::after {
    background-color: white;
    height: 60px;
    margin-top: 10px;
  }

  .timeline .icon {
    width: 40px;
    height: 40px;
  }

  .timeline .icon .fa {
    font-size: 16px;
    transform:translate(-20%, -25%);
  }

  .profile .education-experience .date-range {
    border-radius: 30px;
    margin-bottom: 10px;
    padding: 14px 36px;
    font-size: 9px;
  }

  .timeline .container-title {
    font-size: 12px;
    text-transform: uppercase;
  }

  .timeline .container-subtitle {
   font-size: 10px;
  }

  .timeline .container-desc, .timeline .container-location {
    font-size: 8px;
  }
}

@media(max-width: 500px) {
  .profile .education-experience .date-range-indication .bubble {
    display: none;
  }

  .profile .ee-container {
    height: 120px;
    margin-bottom: 0;
  }

  .profile .education-experience .date-range-indication {
    max-width: 120px;
  }

  .profile .education-experience .date-range {
    font-size: 7px;
    padding: 7px 20px;
    white-space: nowrap;
    width: 100%;
  }
  .timeline .info {
    width: 120px;
  }
  .timeline .icon {
    width: 20px;
    height: 20px;
  }

  .timeline .icon .fa {
    font-size: 9px;
    transform:translate(-48%, -13px);
  }

  .ee-container:first-of-type .line-container .icon::before {
    height: 25px;
    width: 4px;
    margin-bottom: 25px;
  }

  .ee-container:last-child .line-container .icon::after {
    height: 35px;
    width: 4px;
  }

  .timeline .icon::after {
    background-color: white;
    height: 70px;
    width: 4px;
    margin: auto 0px auto -2px;
  }

  .timeline .container-title {
    font-size: 11px;
  }

  .timeline .container-subtitle {
   font-size: 8px;
  }

  .timeline .container-desc, .timeline .container-location {
    font-size: 8px;
  }
}

/* .profile .ee-container {
  position: relative;
  background-color: inherit;
  width: 50%;
}

.profile .education-experience .timeline .left {
  padding-right: 30px;
}

.profile .timeline .left .line-container:first-child::after {
  height: 40px;
  top: -30px;
}

.profile .line-container {
  display: block;
  padding-top: 10px;
}

.profile .line-container::after {
  content: '';
  position: absolute;
  height: 100%;
  right: 1%;
  border-radius: 30px;
  top: -60px;
  width: 6px;
  background-color: white;
}

.profile .left::after {
  content: '';
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: white;
  border: 4px solid #f197a3;
  border-radius: 50%;
  z-index: 1;
  top: 15px;
  right: -16px;
}

.profile .education-experience .timeline .left {
  left: 0;
  text-align: right;
}

.profile .education-experience .timeline .right {
  left: 50%;
  text-align: left;
}

.profile .timeline {
  margin: 0 auto;
  position: relative;
  max-width: 1200px;
}

.profile .date-range-indication {
  text-align: right;
  display: inline-block;
}

.profile .education-experience .date-range {
  color: #446594;
  font-family: 'Montserrat';
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 30px;
  margin-bottom: 10px;
  padding: 18px 40px;
  display: inline-block;
  background-color: #f197a3;
  position: relative;
}

.profile .education-experience .date-range-indication .bubble {
  background-color: #f197a3;
  width: 12px;
  height: 12px;
  margin: auto 35px;
  border-radius: 50%;
  display: inline-block;
} */
</style>
