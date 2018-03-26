import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../pages/HelloWorld.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/entry2/admin',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
