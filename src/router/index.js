import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store/index'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/listview',
    name: 'listview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/listView.vue')
  },
  {
    path: '/searchview',
    name: 'searchview',
    component: () => import(/* webpackChunkName: "about" */ '../views/SearchView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/me',
    name: 'me',
    beforeEnter:(to,from,next)=>{
      console.log(store.state.user)
      if(store.state.user.isLogin){
        next()
      }else{
        next("/login")
      }
      
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Me.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
