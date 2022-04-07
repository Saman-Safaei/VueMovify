import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about/',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/movies/:genreId/',
    name: 'movies',
    component: () => import('../views/MovieListView.vue')
  },
  {
    path: '/movies/info/:id',
    name: 'movie_info',
    component: () => import('../views/MovieInfoView.vue')
  },
  {
    path: '/:all(.*)*',
    name: 'error',
    component: () => import('../views/ErrorView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
