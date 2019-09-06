import Vue from 'vue'
import Router from 'vue-router'
import Tela from './views/Tela.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/tela',
      name: 'Tela',
      component: Tela
    }
  ]
})
