import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Project from '@/pages/Project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    props: { headerWhite: true }
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
    props: { contact: true } },

    { path: '/:name',
    name: 'Project',
    component: Project
  }

    /*{ path: '/brewsters-branding-website',
    name: 'Brewsters',
    component: Project, 
    props: { ref: 'brew' } },*/
  ]
})
