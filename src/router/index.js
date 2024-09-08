import { createRouter, createWebHistory } from 'vue-router'
import clusterRouteRaw from './modules/cluster_resources'
import appRouteRaw from './modules/app_resources'
import serviceRouteRaw from './modules/service_resources'
import configurationeRouteRaw from './modules/configuration_resources'
import storageRouteRaw from './modules/storage_resources'
import systemRouteRaw from './modules/systemControl'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/layout/layoutContainer.vue')
    },
    { path: '/login', component: () => import('@/views/login.vue') },
    clusterRouteRaw,
    appRouteRaw,
    serviceRouteRaw,
    configurationeRouteRaw,
    storageRouteRaw,
    systemRouteRaw
  ]
})

export default router
