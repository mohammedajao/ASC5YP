<template>
  <section class="education-experience">
      <h1 class="section-title">education - experience</h1>
      <div class="timeline">
        <!-- whod = we have our date ||| r and l are right and left -->
        <div class="ee-container whodr">
          <div class="line-container">
            <div class="info info-right">
              <h3 class="container-title">highschool diploma</h3>
              <p class="container-subtitle"></p>
              <p class="container-desc">Bronx Highschool of Science</p>
              <p class="container-location">New York, USA</p>
            </div>
            <div class="icon"><i class="fa fa-graduation-cap"></i></div>
            <div class="d-none d-lg-inline-block right-line date-left date-range-indication"><span class="bubble"></span><span class="date-range"><strong>sep 2005 - jun 2010</strong></span></div>
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
            <div class="d-none d-lg-inline-block right-line date-left date-range-indication"><span class="bubble"></span><span class="date-range"><strong>sep 2005 - jun 2010</strong></span></div>
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
            <div class="d-none d-lg-inline-block right-line date-left date-range-indication"><span class="bubble"></span><span class="date-range"><strong>sep 2005 - jun 2010</strong></span></div>
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
