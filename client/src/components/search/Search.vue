<template>
  <section class="search-section">
      <div class="search-container">
          <div class="page-header">Results for: <span class="search-query">"{{ this.query }}"</span></div>
          <div class="query-results row" >
              <div class="result-card col-md-6 col-lg-4" v-for="item in this.ourList" :key="item.id">
                <result :id="item.id" :src="item.photoURL" :name="item.displayName" :param3="'Illustrator & Photographer'" :snippet="'No description available'"></result>
              </div>
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
    return {
      queryList: []
    }
  },
  components: {
    Result
  },
  methods: {
    userList () {
      console.log('Dispatching')
      this.$store.dispatch('queryDB', this.query)
    }
  },
  computed: {
    ourList () {
      return this.$store.getters.fetchUserList
    }
  },
  created () {
    this.userList()
    console.log(this.ourList)
  },
  watch: {
    query: function (value) {
      console.log("Changed to " + value)
      this.userList()
    }
  }
}
</script>

<style>
.result-card {
  padding: 10px;
}

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
