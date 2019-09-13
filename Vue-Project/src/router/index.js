import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import pageIndicator from '@/pages/page-indicator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/pageIndicator',
      name:'pageIndicator',
      component:pageIndicator
    }
  ]
})
