import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    jobs: [],
    users: [],
    groups: [],
    currentUser: null,
    loginError: ''
  },
  mutations: {
    setUser (state, payload) {
      state.currentUser = payload
    },
    setLoginError (state, payload) {
      state.loginError = payload
    }
  },
  actions: {
    registerUserWithEmailAndPassword ({ commit }, payload) {
      firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              jobRegistrations: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            return error
          }
        )
    },
    loginUser ({ commit }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setUser', newUser)
          }
        )
        .catch(
          error => { 
            console.log(error)
            commit('setLoginError', error.code)
          }
        )
    },
    signUserOut ({ commit }, payload) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    fetchJobs (state) {
      return state.jobs.sort((jobA, jobB) => {
        return jobA.createDate > jobB.createDate
      })
    },
    currentUserData (state) {
      return state.currentUser
    },
    loginError (state) {
      return state.loginError
    }
  }
})
