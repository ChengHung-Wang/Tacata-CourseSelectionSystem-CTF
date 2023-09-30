import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ChooseList/D01/D01',
    name: "ChooseList",
    component: () => import("../views/CourseList.vue")
  },
  {
    path: '/AddAndSub/B01/B01',
    name: "AddAndSub",
    component: () => import("../views/AddAndSub.vue")
  },
  {
    path: '/Authorization/C01/C01',
    name: "Authorization",
    component: () => import("../views/Authorization.vue")
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
