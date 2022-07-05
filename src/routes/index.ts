import { createRouter, createWebHashHistory } from 'vue-router'

import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'homepage',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/pages/index.vue'),
    meta: {
      title: 'homepage',
    },
    children: [],
  },
  // Layout之外的路由
  // ...outsideLayout,
]

export const routerApp = createRouter({
  // process.env.BASE_URL
  history: createWebHashHistory(''),
  routes,
})

export async function setupRouter(app: App) {
  // 创建路由守卫
  app.use(routerApp)

  // 路由准备就绪后挂载APP实例
  await routerApp.isReady()
}
export default routerApp
