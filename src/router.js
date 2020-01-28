import Vue from 'vue'
import VueRouter from 'vue-router'

// Views
import Home from './views/Home'
import About from './views/About'
import ViewData from './views/ViewData'

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/view', component: ViewData }
  ]
})
