<template>
<!-- <div class="col-sm-12 col-md-6 col-lg-4 result-box">
  <div class="search-result container col-sm-12">
      <div class="content row">
        <div class="col-sm-3 user-avatar">
            <img src="https://steamuserimages-a.akamaihd.net/ugc/619591538955923282/66905870D1AA32596AA0C51777FE6676D389A752/" class="avatar" />
        </div>
        <div class="col-sm-8 details">
            <div class="col-sm-12 date">Sep 21, 2016</div>
            <div class="col-sm-12 title">Ilya Kuvshinov</div>
            <div class="col-sm-12 job">Artist & Illustrator</div>
            <hr>
            <div class="description col-sm-12"><em>No description available.</em></div>
        </div>
    </div>
  </div>
</div> -->
    <div @click="getProfile(id)" class="search-box">
        <span class="user-avatar">
            <img :src="this.avatar" alt="">
        </span>
        <div class="details">
            <div class="col-sm-12 date p-0">Sep 21, 2016</div>
            <div class="col-sm-12 p-0 name">{{ this.name }}</div>
            <div class="col-sm-12 p-0 job">4/5 Satisfaction Rating</div>
            <hr class="d-none d-md-block">
            <div class="col-sm-12 p-0 description d-none d-md-block">{{ this.snippet }}</div>
        </div>
</div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: false,
      default: 'https://steamuserimages-a.akamaihd.net/ugc/619591538955923282/66905870D1AA32596AA0C51777FE6676D389A752/'
    },
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    param3: {
      type: String,
      required: true
    },
    snippet: {
      type: String,
      required: true
    }
  },
  methods: {
    getProfile (uid) {
      console.log('Clicked')
      this.$router.push('/profile/' + this.id)
    }
  }
}
</script>

<style>
.result-card {
  padding: 10px;
}
.search-box {
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

.user-avatar img {
  max-height: 120px;
  height: 100%;
  float: left;
}

.details {
  display: inline-block;
  padding: 0 10px;
  width: calc(100% - 130px);
}

.search-box .details .date {
  color: #f4645f;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  vertical-align: top;
}

.search-box .details .job {
  color: rgba(150, 150, 150, 0.9);
  font-size: 11px;
  font-family: "Open Sans";
}

.search-box .name {
  overflow: hidden;
  text-overflow: ellipsis;
}

.search-box:hover {
  box-shadow: 0 5px 5px #dcdcdc;
  top: -5px;
}

.search-box .details .description {
  font-size: 11px;
  vertical-align: top;
  line-height: 1;
}

.search-box hr {
  margin: 8px 0;
}
@media (max-width: 380px) {
  .search-box,
  .result-card {
    width: max-content;
    display: inline-block;
  }

  .search-box .details .name {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 130px;
  }
  .search-box .details {
    font-size: 12px;
    width: calc(100% - 100px);
  }

  .user-avatar img {
    max-height: 75px;
  }
}

/* .result-box {
    margin: 10px 0;
}

.search-result {
    cursor: pointer;
    background-color: white;
    border: 0 solid hsla(0,0%,100%,.25);
    border-radius: 2px;
    box-shadow: 0 1px 5px #dcdcdc;
    transition: all 0.2s ease-in-out;
}

.search-result > .content {
    padding: 20px 5px;
    min-height: 120px;
}

.user-avatar > .avatar {
    width: 100%;
}

.search-result .details, .search-result .details > div  {
   padding: 0;
}

.search-result .details .date {
    color: #f4645f;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 14px;
    vertical-align: top;
}

.search-result .details > div {
    display: inline-block;
}

.search-result .details .job {
    color: rgba(150,150,150,0.9);
    font-size: 11px;
    font-family: "Open Sans"
}

.search-result:hover {
    box-shadow: 0 5px 5px #dcdcdc;
    top: -5px;
}

.search-result .details .description {
    font-size: 11px;
    vertical-align: top;
    line-height: 0;
} */
</style>
