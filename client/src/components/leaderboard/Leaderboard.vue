<template>
  <section class="leaderboard">
      <div class="container rest-cont">
        <h1 class="lb-title">Leaderboard</h1>
        <hr>
        <div class="result-card col-sm-12 user-block" v-for="item in this.ourList" :key="item.id">
          <result :avatar="item.photoURL" :id="item.id" :src="item.photoURL" :name="item.displayName" :snippet="'No description available'"></result>
        </div>
      </div>
  </section>
</template>

<script>
import Result from '../search/results/LBResult'
export default {
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
  components: {
    Result
  }
}
</script>

<style>
.leaderboard {
  overflow: auto;
  background: #f5f5f5;
}
.rest-cont {
    max-width: 400px;
    margin: 100px auto;
}
</style>
