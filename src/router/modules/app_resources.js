// 调度资源路由管理
const appRouteRaw = {
  path: '/app',
  component: () => import('@/views/layout/layoutContainer.vue'),
  redirect: '/app/list',
  name: 'appResourcesMenu',
  children: [
    {
      path: 'list',
      name: 'appControl',
      component: () => import('@/views/app/appList.vue')
    },
    {
      path: 'deployment',
      name: 'deploymentControl',
      component: () => import('@/views/app/appDeployment.vue')
    },
    {
      path: 'statefulset',
      name: 'statefulsetControl',
      component: () => import('@/views/app/appStatefulset.vue')
    },
    {
      path: 'daemonset',
      name: 'daemonsetControl',
      component: () => import('@/views/app/appDaemonset.vue')
    },
    {
      path: 'cronjob',
      name: 'cronjobControl',
      component: () => import('@/views/app/appCronjob.vue')
    }
  ]
}

export default appRouteRaw
