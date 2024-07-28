import { createRouter, createWebHistory } from 'vue-router'
import MainHome from '@/views/MainHome.vue'
import MovieHome from '@/views/MovieHome.vue'
import seeMovie from '@/views/seeMovie.vue'
import wantMovie from '@/views/wantMovie.vue'
import arteMovie from '@/views/arteMovie.vue'
import reservationHome from '@/views/reservationHome.vue'

const routes = [
  { path: '/', component: MainHome },
  { path: '/MovieHome', component: MovieHome },
  { path: '/MovieHome/seeMovie', component: seeMovie },
  { path: '/MovieHome/wantMovie', component: wantMovie },
  { path: '/MovieHome/arteMovie', component: arteMovie },
  { path: '/reservationHome', component: reservationHome },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
