<template>
  <section class="search-section">
      <div class="search-container">
          <div class="page-header">Results for: <span class="search-query">"{{ this.query }}"</span></div>
          <div class="filter-box mb-3">
            <div class="nav">
              <li @click="setSearchFilter('user')" class="nav-item">Users</li>
              <li @click="setSearchFilter('job')" class="nav-item">Jobs</li>
              <li @click="setSearchFilter('org')" class="nav-item">Organizations</li>
            </div>
          </div>
          <div class="query-results row" >
              <div v-if="mode==='user'" class="result-card col-md-6 col-lg-4 user-block" v-for="item in this.ourList" :key="item.id">
                <result :avatar="item.photoURL" :id="item.id" :src="item.photoURL" :name="item.displayName" :param3="'Illustrator & Photographer'" :snippet="'No description available'"></result>
              </div>
              <div v-if="mode==='job'" class="result-card col-md-6 col-lg-4 job-block" v-for="item in this.jobQueryList" :key="item.id">
                <job-result :id="item.id" :logo="item.photoURL" :name="item.title" :location="item.location"></job-result>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
import Result from './results/Result'
import JobResult from './results/jobs/Job'

export default {
  props: {
    query: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      queryList: [],
      jobQueryList: [
        {
          title: 'C++ Software Engineering Intern', 
          location: 'Chelsea Market, NYC',
          id: 'as56xYGDF24',
          photoURL: 'http://diylogodesigns.com/blog/wp-content/uploads/2016/04/google-logo-icon-PNG-Transparent-Background.png'
        }
      ],
      orgQueryList: [],
      mode: 'user'
    }
  },
  components: {
    Result,
    JobResult
  },
  methods: {
    userList () {
      console.log('Dispatching')
      this.$store.dispatch('queryDB', this.query)
    },
    setSearchFilter (filter) {
      this.mode = filter
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

.filter-box .nav > .nav-item{
  margin: 10px;
  color: rgba(0,0,0,.6);
  transition: all 0.2s ease-in-out;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
}

.filter-box .nav > .nav-item:hover {
  background-color: rgba(207,207,207,.25);
  color: black;
}
@media (max-width: 380px) {
  .search-container {
    padding-left: 10%;
  }
}
</style>
