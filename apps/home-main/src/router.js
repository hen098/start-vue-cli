import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function loadView (view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home-main',
      component: loadView('home-main')
    },
    {
      path: '/messages/',
      name: 'messages-main',
      component: loadView('messages-main')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
