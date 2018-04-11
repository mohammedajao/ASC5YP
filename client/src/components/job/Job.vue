<template>
  <section class="job-display">
    <div class="job-data-cont">
      <div class="job-view-cont job-dt">
        <div class="jv-logo">
          <img src="http://diylogodesigns.com/blog/wp-content/uploads/2016/04/google-logo-icon-PNG-Transparent-Background.png" alt="" class="jv-image">
        </div>
        <div class="jv-info">
          <h1 class="job-title">Software Engineering Intern</h1>
          <h3 class="job-locatio">Chelsea Market, NYC</h3>
          <div class="jbt btn-follow">Apply</div>
        </div>
      </div>
      <div class="job-view-cont job-dd">
       <h3 class="job-dd-title">Job description</h3>
       <p class="job-dd-st"><strong>Marketing Statement</strong></p>
       <p>St. Vincent’s Health Services, part of Ascension, operates St. Vincent’s Medical
          Center in Bridgeport and a number of other sites of care. Founded by the 
          Daughters of Charity in 1903, St. Vincent’s is a mission-driven organization 
          committed to exceptional healthcare for all with special consideration for the 
          poor and underserved.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
.job-display {
  background: #f5f5f5;
  margin-top: -10px;
}

.job-data-cont {
  margin: 10px auto;
  max-width: 1000px;
  border: 1px solid hsla(0, 0%, 100%, 0.25);
}

.job-view-cont {
  background: white;
  max-width: 900px;
  margin: 10px auto;
  box-shadow: 0 1px 5px #dcdcdc;
}

.job-dt {
  padding: 10px;
  margin: 10px auto;
  overflow: auto;
}

.job-dd {
  padding: 20px;
}

.jv-image {
  height: 100%;
  max-height: 130px;
  display: inline-block;
}

.jv-logo {
  display: inline-block;
  float: left;
  padding: 10px;
  height: 100%;
}

.jv-info {
  display: inline-block;
  text-align: left;
  padding: 10px;
}

.jbt {
  padding: 8px 20px;
  border-radius: 3px;
  margin-right: 10px;
  margin-left: 10px;
  border: 1px solid #0073b1;
  color: #0073b1;
  display: inline-block;
  cursor: pointer;
  font-weight: bold;
}

.jv-info .btn-follow {
  background-color: #0073b1;
  color: white;
  transition: 0.1s all ease-in-out;
}

.jv-info .btn-follow:hover {
  color: #0073b1;
  background-color: transparent;
}

.jv-info .jbt {
  margin-top: 20px;
}

.jv-info .jbt:first-of-type {
  margin-left: 0;
}
</style>
