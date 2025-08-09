import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewProject2D from '../views/2D/NewProjectView.vue'
import EditProject2D from '../views/2D/EditProjectView.vue'
import NewProject3D from '../views/View3D.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import VerifyEmailView from '../views/VerifyEmailView.vue'
import ProfileView from '../views/ProfileView.vue'
import ForgotPasswordView from '../views/ForgotPasswordView.vue'
import ResetPasswordView from '../views/ResetPasswordView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/2d/new',
      name: '2d-new',
      component: NewProject2D,
    },
    {
      path: '/2d/edit/:id',
      name: '2d-edit',
      component: EditProject2D,
      props: true,
    },
    {
      path: '/3d',
      name: '3d',
      component: NewProject3D,
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
    {
      path: '/verify-email',
      name: 'verify-email',
      component: VerifyEmailView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPasswordView,
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: ResetPasswordView,
    },
  ],
})

export default router
