import { createRouter, createWebHistory } from 'vue-router'
import MainHome from '@/views/MainHome.vue'
import MovieHome from '@/views/MovieHome.vue'
import seeMovie from '@/views/seeMovie.vue'
import wantMovie from '@/views/wantMovie.vue'
import arteMovie from '@/views/arteMovie.vue'
import reservationHome from '@/views/reservationHome.vue'
import reservationPage1 from '@/views/reservationPage1.vue'
import reservationPage2 from '@/views/reservationPage2.vue'
import reservationPage3 from '@/views/reservationPage3.vue'
import reservationPage4 from '@/views/reservationPage4.vue'
import EventHome from '@/views/EventHome.vue'
import StoreHome from '@/views/StoreHome.vue'

const routes = [
  { path: '/', component: MainHome },
  { path: '/MovieHome', component: MovieHome },
  { path: '/MovieHome/seeMovie', component: seeMovie },
  { path: '/MovieHome/wantMovie', component: wantMovie },
  { path: '/MovieHome/arteMovie', component: arteMovie },
  { path: '/reservationHome', component: reservationHome , children: [
    { path: 'reservationPage1', component: reservationPage1 },
    { path: 'reservationPage2', component: reservationPage2 },
    { path: 'reservationPage3', component: reservationPage3 },
    { path: 'reservationPage4', component: reservationPage4 },
  ]},
  { path: '/EventHome', component: EventHome },
  { path: '/EventHome/EventMovie', component: EventHome },
  { path: '/EventHome/EventPreview', component: EventHome },
  { path: '/EventHome/EventSale', component: EventHome },
  { path: '/EventHome/EventMyMovie', component: EventHome },
  { path: '/storeHome', component: StoreHome },
  { path: '/storeHome/storeBest', component: StoreHome },
  { path: '/storeHome/storeView', component: StoreHome },
  { path: '/storeHome/storeSnack', component: StoreHome },
  { path: '/storeHome/storePoto', component: StoreHome },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
