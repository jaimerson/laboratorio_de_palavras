import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Resultados from '../views/Resultados.vue'
import Game from '../views/Game.vue'
import Help from '../views/Help.vue'
import Credits from '../views/Credits.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/game',
    name: 'game',
    component: Game
  },
  {
    path: '/results',
    name: 'results',
    component: Resultados
  },
  {
    path: '/help',
    name: 'help',
    component: Help
  },
  {
    path: '/credits',
    name: 'credits',
    component: Credits
  }
]

const router = new VueRouter({
  routes
})

export default router
