<template>
<div class="col-xs-12 col-md-6 col-lg-4">
  <div class="search-result col-xs-12 pl-3">
      <div class="content row">
        <div class="col-sm-3 user-avatar">
            <img src="https://steamuserimages-a.akamaihd.net/ugc/619591538955923282/66905870D1AA32596AA0C51777FE6676D389A752/" class="avatar" />
        </div>
        <div class="col-sm-8 details">
            <div class="col-sm-12 date">Sep 21, 2016</div>
            <div class="col-sm-12 title">Ilya Kuvshinov</div>
            <div class="col-sm-12 job">Artist & Illustrator</div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

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
    top: -2px;
}
</style>
