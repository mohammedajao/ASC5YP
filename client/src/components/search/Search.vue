<template>
  <section class="search-section">
      <div class="search-container">
          <div class="page-header">Results for: <span class="search-query">"{{ this.query }}"</span></div>
          <div class="query-results row">
              <result></result>
              <result></result>
              <result></result>
              {{ this.queryList }}
          </div>
      </div>
  </section>
</template>

<script>
import Result from './results/Result'

export default {
    props: {
        query: {
            type: String,
            default: ''
        }
    },
    data () {
        return {}
    },
    components: {
        Result
    },
    computed: {
        queryList () {
            return this.$store.getters.fetchUserList(this.query)
        }
    },
    created () {
        console.log(this.queryList)
    }
}
</script>

<style>

.search-section .search-container {
    font-family: "Miriam Libre";
    width: 100%;
    background: #f5f5f5;
}

.search-section .page-header {
    font-size: 1.3rem;
    margin: 30px 5px;
}

.search-container {
    padding: 45px;
}

.query-results {
    width: 100%;
    margin: 0;
}

@media (max-width: 380px) { 
    .search-container {
        padding-left: 10%;
    }
}
</style>
