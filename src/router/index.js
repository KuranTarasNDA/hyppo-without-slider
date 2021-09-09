import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/mortgage',
    component: () => import('../views/Mortgage.vue')
  },
  {
    path: '/calculator',
    component: () => import('../views/Calculator.vue')
  },
  {
    path: '/about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/faq',
    component: () => import('../views/Faq.vue')
  },
  {
    path: '/amortgage',
    component: () => import('../views/Amortgage.vue')
  },
  {
    path: '/register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/request',
    component: () => import('../views/Request.vue')
  },
  {
    path: '/interest',
    component: () => import('../views/Interest.vue')
  },
  {
    path: '/documents',
    component: () => import('../views/Documents.vue')
  },
  {
    path: '/review',
    component: () => import('../views/Review.vue')
  },
  {
    path: '/verification',
    component: () => import('../views/Verification.vue')
  },
  {
    path: '/video',
    component: () => import('../views/Video.vue')
  },
  {
    path: '/video-two',
    component: () => import('../views/VideoTwo.vue')
  },
  {
    path: '/offer-one',
    component: () => import('../views/OfferOne.vue')
  },
  {
    path: '/offer-two',
    component: () => import('../views/OfferTwo.vue')
  },
  {
    path: '/signed',
    component: () => import('../views/Signed.vue')
  },
  {
    path: '/my-mortgages',
    component: () => import('../views/MyMortgages.vue')
  },
  {
    path: '/details',
    component: () => import('../views/Details.vue')
  },
  {
    path: '/admin-login',
    component: () => import('../views/AdminLogin.vue')
  },
  {
    path: '/ap-users',
    component: () => import('../views/ApUsers.vue')
  },
  {
    path: '/ap-mortgages',
    component: () => import('../views/ApMortgages.vue')
  },
  {
    path: '/ap-documents',
    component: () => import('../views/ApDocuments.vue')
  },
  {
    path: '/ap-panel',
    component: () => import('../views/ApPanel.vue')
  },
  {
    path: '/user-page',
    component: () => import('../views/UserPage.vue')
  },
  {
    path: '/ap-documents-verification',
    component: () => import('../views/ApDocumentsVerification.vue')
  },
  {
    path: '/ap-mortgage-page',
    component: () => import('../views/ApMortgagePage.vue')
  },
  {
    path: '/preferences',
    component: () => import('../views/Preferences.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  base: process.env.NODE_ENV === 'production' ? '/hyppo/' : '/',
  routes
})

export default router
