import { createRouter, createWebHistory } from 'vue-router'
import MovieList from '../components/MovieList.vue'
import AddMovie from '../components/AddMovie.vue'

const routes = [
  { path: '/', name: 'MovieList', component: MovieList },
  { path: '/add', name: 'AddMovie', component: AddMovie },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
