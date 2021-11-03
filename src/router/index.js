import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import MakeYourOwn from '../views/MakeYourOwn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
  path: '/cart',
  name: 'Cart',
  component: Cart
  },
  {
  path: '/makeYourOwn',
  name: 'MakeYourOwn',
  component: MakeYourOwn
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
