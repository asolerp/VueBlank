import Vue from 'vue'
import VueRouter from 'vue-router'

// Views
import Home from './views/Home'
import About from './views/About'
import Employees from './views/Employees'
import Employee from './views/Employee'
Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/employees', component: Employees },
    { path: '/employees/:id', component: Employee }
  ]
})
