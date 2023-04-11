import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomePage from '../Pages/HomePage/HomePage.vue'
import SingUp from '../Pages/SingUp/SingUp.vue'
import Login from '../Pages/LoginApp/LoginApp.vue'
import BlogPage from '../Pages/BlogPage/BlogPage.vue'
import PricingPage from '../Pages/PricingPage/PricingPage.vue'
import AboutPage from '../Pages/AboutPage/AboutPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path :'/',
      name : 'singup',
      component:SingUp
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/homePage',
      name:'homePage',
      component:HomePage
    },
    {
      path:'/about',
      name :'about',
      component:AboutPage
    },
    {
      path:'/blog',
      name : 'blog',
      component:BlogPage
    },
    {
      path:'/princingPage',
      name:'princingPaga',
      component:PricingPage
    }

  ]
})

export default router
