import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../pages/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/entry1/admin',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
