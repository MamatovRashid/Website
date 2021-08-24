import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Documents from '../views/Documents.vue'
import File from '../views/File.vue'

Vue.use(VueRouter)

const routes = [


  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/doc',
    name: 'Documents',
    component: Documents
  },
  {
    path: '/file/:id',
    name: 'File',
    component: File
  },
  // {
    // path: '/about',
  //   name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
