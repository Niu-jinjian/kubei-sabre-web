// 集群资源路由管理
const clusterRouteRaw = {
  path: '/cluster',
  component: () => import('@/views/layout/layoutContainer.vue'),
  redirect: '/cluster/list',
  name: 'clusterResourcesMenu',
  children: [
    {
      path: 'list',
      name: 'clusterControl',
      component: () => import('@/views/cluster/clusterList.vue')
    },
    {
      path: 'node',
      name: 'nodeControl',
      component: () => import('@/views/cluster/clusterNode.vue')
    },
    {
      path: 'namespace',
      name: 'namespaceControl',
      component: () => import('@/views/cluster/clusterNamespace.vue')
    }
  ]
}

export default clusterRouteRaw
