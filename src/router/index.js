import { createRouter, createWebHistory } from 'vue-router'
import MainHome from '@/views/MainHome.vue'
// import Menu1 fro../views/MovieHome.vuenu1.vue'
import MovieHome from '@/views/MovieHome.vue'
// import Menu3 from '@/components/Menu3.vue'
// import Menu4 from '@/components/Menu4.vue'
// import Menu5 from '@/components/Menu5.vue'

const routes = [
  { path: '/', component: MainHome },
  { path: '/MovieHome', component: MovieHome },
  // { path: '/menu2', component: Menu2 },
  // { path: '/menu3', component: Menu3 },
  // { path: '/menu4', component: Menu4 },
  // { path: '/menu5', component: Menu5 },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
