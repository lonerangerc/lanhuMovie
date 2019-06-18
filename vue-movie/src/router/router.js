import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/home',
      name: 'home',
      meta: {
        footShow: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Home
    },
    {
      path: '/movie',
      name: 'movie',
      meta: {
        footShow: true
      },
      component: () => import( /* webpackChunkName: "movie" */ '@/views/movie/Movie.vue'),
    },
    {
      path: '/ticket',
      name: 'ticket',
      meta: {
        footShow: true
      },
      component: () => import( /* webpackChunkName: "ticket" */ '@/views/ticket/Ticket.vue'),
    },
    {
      path: '/cinema',
      name: 'cinema',
      meta: {
        footShow: true
      },
      component: () => import( /* webpackChunkName: "cinema" */ '@/views/cinema/Cinema.vue'),
    },
    {
      path: '/main',
      name: 'main',
      meta: {
        footShow: true
      },
      component: () => import( /* webpackChunkName: "main" */ '@/views/main/Main.vue'),
    },
    {
      path: '/main/set',
      name: 'set',
      meta: {
        footShow: true
      },
      component: () => import( /* webpackChunkName: "main" */ '@/views/main/set/set.vue'),
    },
    {
      path: '/main/dingDan',
      name: 'dingDan',
      redirect: '/main/dingDan/all',
      meta: {
        footShow: true

      },
      component: () => import( /* webpackChunkName: "main" */ '@/views/main/dingDan/dingDan.vue'),
      children: [
        {
          path: 'all',
          name: 'all',
          meta: {
            footShow: true

          },
          component: () => import( /* webpackChunkName: "main" */ '@/views/main/dingDan/all/all.vue'),
        },
         {
          path: 'waitPay',
          name: 'waitPay',
          meta: {
            footShow: true

          },
          component: () => import( /* webpackChunkName: "main" */ '@/views/main/dingDan/waitPay/waitPay.vue'),
        },
        {
          path: 'waitComment',
          name: 'waitComment',
          meta: {
            footShow: true

          },
          component: () => import( /* webpackChunkName: "main" */ '@/views/main/dingDan/waitComment/waitComment.vue'),
        },
        {
          path: 'refund',
          name: 'refund',
          meta: {
            footShow: true
          },
          component: () => import( /* webpackChunkName: "main" */ '@/views/main/dingDan/refund/refund.vue'),
        }
      ]
    },
    {
      path: '*',
      redirect: '/home'
    }


  ]
})