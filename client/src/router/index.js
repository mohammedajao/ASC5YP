import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Search from '@/components/search/Search'
import Profile from '@/components/user/Profile'
import Editor from '@/components/user/Editor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/search/:query?',
      name: 'Search',
      props: true,
      component: Search
    },
    {
      path: '/profile/:id',
      name: 'Profile',
      props: true,
      component: Profile
    },
    {
      path: '/editor',
      name: 'Editor',
      component: Editor
    }
  ],
  mode: 'history'
})
