import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from '../components/goods/goods.vue'
import Ratings from '../components/ratings/ratings.vue'
import Seller from '../components/seller/seller.vue'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/goods',
      component: Goods,
      props: true
    },
    {
      path: '/ratings',
      component: Ratings,
      props: true
    },
    {
      path: '/seller',
      component: Seller,
      props: true
    },
    {
      path: '*', redirect: '/goods'
    }
  ]
})
