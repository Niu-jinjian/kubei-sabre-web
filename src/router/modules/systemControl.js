// 系统管理路由管理
const systemRouteRaw = {
  path: '/system',
  component: () => import('@/views/layout/layoutContainer.vue'),
  redirect: '/system/user',
  name: 'systemResourcesMenu',
  children: [
    {
      path: 'user',
      name: 'userControl',
      component: () => import('@/views/system/userControl.vue')
    },
    {
      path: 'role',
      name: 'roleControl',
      component: () => import('@/views/system/roleControl.vue')
    },
    {
      path: 'api',
      name: 'apiControl',
      component: () => import('@/views/system/apiControl.vue')
    },
    {
      path: 'log',
      name: 'logControl',
      component: () => import('@/views/system/logControl.vue')
    }
  ]
}

export default systemRouteRaw
