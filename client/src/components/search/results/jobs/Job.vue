<template>
<!-- <div class="col-sm-12 col-md-6 col-lg-4 result-box">
  <div class="search-result container col-sm-12">
      <div class="content row">
        <div class="col-sm-3 comp-logo">
            <img src="https://steamuserimages-a.akamaihd.net/ugc/619591538955923282/66905870D1AA32596AA0C51777FE6676D389A752/" class="avatar" />
        </div>
        <div class="col-sm-8 details">
            <div class="col-sm-12 date">Sep 21, 2016</div>
            <div class="col-sm-12 title">Ilya Kuvshinov</div>
            <div class="col-sm-12 job">Artist & Illustrator</div>
            <hr>
            <div class="location col-sm-12"><em>No location available.</em></div>
        </div>
    </div>
  </div>
</div> -->
    <div @click="getJob(id)" class="job-box">
        <span class="comp-logo">
            <img :src="this.logo" alt="">
        </span>
        <div class="details">
            <div class="col-sm-12 date p-0">Sep 21, 2016</div>
            <div class="col-sm-12 p-0 name">{{ this.name }}</div>
            <hr class="d-none d-md-block">
            <div class="col-sm-12 p-0 location d-none d-md-block">{{ this.location }}</div>
        </div>
</div>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      required: false,
      default: 'http://diylogodesigns.com/blog/wp-content/uploads/2016/04/google-logo-icon-PNG-Transparent-Background.png'
    },
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    }
  },
  methods: {
    getJob (id) {
      console.log('Clicked')
      this.$router.push('/job/' + this.id)
    }
  }
}
</script>

<style>
.result-card {
  padding: 10px;
}
.job-box {
  background-color: white;
  cursor: pointer;
  border: 0 solid hsla(0, 0%, 100%, 0.25);
  border-radius: 2px;
  box-shadow: 0 1px 5px #dcdcdc;
  transition: all 0.2s ease-in-out;
  padding: 15px;
  height: auto;
  overflow: hidden;
  width: 100%;
}

.comp-logo img {
  max-height: 120px;
  height: 100%;
  float: left;
}

.details {
  display: inline-block;
  padding: 0 10px;
  width: calc(100% - 130px);
}

.job-box .details .date {
  color: #f4645f;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  vertical-align: top;
}

.job-box .details .job {
  color: rgba(150, 150, 150, 0.9);
  font-size: 11px;
  font-family: "Open Sans";
}

.job-box:hover {
  box-shadow: 0 5px 5px #dcdcdc;
  top: -5px;
}

.job-box .details .location {
  font-size: 11px;
  vertical-align: top;
  line-height: 1;
  color: rgba(157,157,157,1);
}

.job-box hr {
  margin: 8px 0;
}
@media (max-width: 380px) {
  .job-box,
  .result-card {
    width: max-content;
    display: inline-block;
  }

  .job-box .details {
    font-size: 12px;
    width: calc(100% - 100px);
  }

  .comp-logo img {
    max-height: 75px;
  }
}

</style>
