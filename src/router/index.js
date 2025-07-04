import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import View2D from '../views/View2D.vue'
import View3D from '../views/View3D.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/2d',
      name: '2d',
      component: View2D,
    },
    {
      path: '/3d',
      name: '3d',
      component: View3D,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
  ],
})

export default router
