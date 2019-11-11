import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Resultados from '../views/Resultados.vue'
import Game from '../views/Game.vue'
import Stats from '../views/Stats.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/results',
    name: 'results',
    component: Resultados
  },
  {
    path: '/game',
    name: 'game',
    component: Game
  },
  {
    path: '/stats',
    name: 'stats',
    component: Stats
  }
]

const router = new VueRouter({
  routes
})

export default router
