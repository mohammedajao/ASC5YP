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
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            let newUser = {
              id: user.uid,
              email: user.email,
              displayName: ('User' + user.uid).toLowerCase(),
              photoURL: 'https://steamuserimages-a.akamaihd.net/ugc/619591538955923282/66905870D1AA32596AA0C51777FE6676D389A752/'
            }
            firebase.database().ref('users/' + user.uid).set(newUser)
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    loginUser ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
          .then(
            user => {
              commit('setUser', user)
              resolve(user)
            }
          )
          .catch(
            error => {
              console.log(error)
              commit('setLoginError', error.code)
              reject(error)
            }
          )
      })
    },
    signUserOut ({ commit }) {
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
    },
    fetchUser (state) {
      return (uid) => {
        return firebase.database().ref('users/' + uid).once('value').then(snapshot => {
          return snapshot
        })
      }
    },
    fetchUserList (state) {
      // Payload is query text
      return (payload) => {
        console.log(payload + ' is our query')
        firebase.database().ref('users').orderByChild('displayName').startAt(payload.toLowerCase()).endAt(payload.toLowerCase() + '\uf8ff').on('value', snapshot => {
          console.log(snapshot.val())
          return snapshot.val()
        })
      }
    }
  }
})
