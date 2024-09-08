// 网络服务路由管理
const serviceRouteRaw = {
  path: '/service',
  component: () => import('@/views/layout/layoutContainer.vue'),
  redirect: '/service/router',
  name: 'serviceResourcesMenu',
  children: [
    {
      path: 'router',
      name: 'routerControl',
      component: () => import('@/views/service/svcRouter.vue')
    },
    {
      path: 'loadbalance',
      name: 'loadbalanceControl',
      component: () => import('@/views/service/loadbalance.vue')
    },
    {
      path: 'networkpolicy',
      name: 'networkpolicyControl',
      component: () => import('@/views/service/networkpolicy.vue')
    }
  ]
}

export default serviceRouteRaw
