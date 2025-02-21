import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Stall from '../views/Stall.vue'
import AdminLogin from '../views/AdminLogin.vue'
import AdminSignUp from '../views/AdminSignUp.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView,
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   route level code-splitting
  //   this generates a separate chunk (About.[hash].js) for this route
  //   which is lazy-loaded when the route is visited.
  //   component: () => import('../views/AboutView.vue'),
  // },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path:'/stall',
    name: 'Stall',
    component: Stall
  },
  {
    path:'/Admin/Login',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path:'/Admin/Signup',
    name: 'Signup',
    component: AdminSignUp
  },
  // You can add more routes here as needed
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
