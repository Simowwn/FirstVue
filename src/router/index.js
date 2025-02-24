import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Stall from '../views/Stall.vue'
import AdminLogin from '../views/AdminLogin.vue'
import AdminStall from '../views/AdminStall.vue'




const routes = [

  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {requiresGuest: true}
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {requiresGuest: true}
  },
  {
    path:'/stall',
    name: 'Stall',
    component: Stall,
    meta: {requiresAuth: true}
  },
  {
    path:'/Admin/Login',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path:'/Admin/Stall',
    name: 'AdminStall',
    component: AdminStall
  },

  {
    path: '/logout',
    name: 'Logout',
    beforeEnter: (to, from, next) => {
      localStorage.removeItem('access_token');
      next('/')
    }
  }
  // You can add more routes here as needed
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const isAuthenticated =() => !!localStorage.getItem('access_token');

router.beforeEach((to, from, next) => {
  const loggedIn = isAuthenticated();

  if (to.meta.requiresGuest && loggedIn) {
    return next('/stall'); // Redirect logged-in users to /stall
  }

  if (to.meta.requiresAuth && !loggedIn) {
    return next('/'); // Redirect unauthenticated users to login
  }

  next(); // Allow access to the route
});


export default router
