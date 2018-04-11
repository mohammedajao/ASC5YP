<template>
  <section class="news-lib">
    <div class="container nc-cont">
      <section class="fafsa row">
        <h3 class="nc-st col-sm-12">FAFSA Guides</h3>
        <hr class="nc-hr col-sm-12">
        <div class="news-card col-lg-3">
          <div @click="openArticle()" class="news-content">
            <h5 class="nc-title">FAFSA Basics</h5>
            <p class="nc-author">By Moe, The Guy</p>
            <p class="nc-desc"><em>An awesome basic tutorial on how to complete your FAFSA!</em></p>
            <p class="date">1/1/20XX</p>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    openArticle () {
      this.$router.push('/news/3444s2xsHskhf$sbs')
    }
  }
}
</script>

<style>
.news-lib {
  background: #f5f5f5;
}

.nc-cont {
  padding: 50px;
}

.nc-st {
  margin-bottom: 5px;
}

.nc-hr {
  height: 1px;
  width: 100%;
  margin-bottom: 30px;
  margin-left: 15px;
}

.news-card .news-content {
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

.news-content:hover {
  box-shadow: 0 5px 5px #dcdcdc;
}

.nc-title {
  color: #f4645f;
  letter-spacing: 2px;
}

.nc-author {
  font-size: 13px;
  vertical-align: top;
  font-weight: bold;
}

.nc-desc {
  color: rgba(150, 150, 150, 0.9);
  font-size: 11px;
  font-family: "Open Sans";
}

.news-card .date {
  color: rgba(150, 150, 150, 0.9);
  font-size: 11px;
  font-family: "Open Sans";
}
</style>
