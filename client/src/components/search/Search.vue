<template>
  <section class="search-section">
      <div class="search-container container-fluid">
          <div class="page-header">Results for: <span class="search-query">"Test"</span></div>
          <div class="query-results row">
              <result></result>
              <result></result>
              <result></result>
          </div>
      </div>
  </section>
</template>

<script>
import Result from './results/Result'

export default {
    components: {
        Result
    }
}
</script>

<style>
.search-section {
    font-family: "Miriam Libre";
    width: 100%;
    height: 100%;
    background: #f5f5f5;
}

.search-section .page-header {
    font-size: 1.3rem;
    margin: 30px 5px;
}

.search-container {
    padding: 45px;
}
</style>
