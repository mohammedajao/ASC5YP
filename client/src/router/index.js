import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Search from '@/components/search/Search'
import Profile from '@/components/user/Profile'
import Editor from '@/components/user/Editor'
import Job from '@/components/job/Job'
import News from '@/components/news/NewsLib'
import Article from '@/components/news/News'
import Leaderboard from '@/components/leaderboard/Leaderboard'

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
    },
    {
      path: '/job/:id?',
      name: 'Job',
      component: Job
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/news/:id?',
      name: 'Article',
      component: Article
    },
    {
      path: '/leaderboard',
      name: 'Leaderboard',
      component: Leaderboard
    }
  ],
  mode: 'history'
})
