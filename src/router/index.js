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
      name: 'Home',
      component: Home,
      props: { lang: 'fr' }
    },
    { path: '/bye', component: Bye }
  ]
})
