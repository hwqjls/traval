import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/city',
    	name: 'City',
    	component: City
    },
  ],
  mode: 'history',
  scrollBehavior(to, from, savedPositon) {
    return { x: 0, y: 0 }
  }
})
