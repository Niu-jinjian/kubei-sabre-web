// 配置资源路由管理
const configurationeRouteRaw = {
  path: '/configuration',
  component: () => import('@/views/layout/layoutContainer.vue'),
  redirect: '/configuration/configmap',
  name: 'configurationResourcesMenu',
  children: [
    {
      path: 'configmap',
      name: 'configmapControl',
      component: () => import('@/views/configuration/configmap.vue')
    },
    {
      path: 'secret',
      name: 'secretControl',
      component: () => import('@/views/configuration/secret.vue')
    }
  ]
}

export default configurationeRouteRaw
