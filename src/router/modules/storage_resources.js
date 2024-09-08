// 存储资源路由管理
const storageRouteRaw = {
  path: '/storage',
  component: () => import('@/views/layout/layoutContainer.vue'),
  redirect: '/storage/class',
  name: 'storageResourcesMenu',
  children: [
    {
      path: 'class',
      name: 'classControl',
      component: () => import('@/views/storage/class.vue')
    },
    {
      path: 'volumes',
      name: 'volumesControl',
      component: () => import('@/views/storage/volumes.vue')
    }
  ]
}

export default storageRouteRaw
