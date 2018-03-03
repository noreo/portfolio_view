import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Bye from '@/components/Bye'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/fr',
      name: 'HomeFR',
      component: Home,
      props: { lang: 'fr' }
    },
    { path: '/contact',
    name: 'Contact',
    component: Home, 
    props: { contact: true } }
  ]
})
