import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

function setupPlugins() {
  // 注册全局常用的ant-design-vue组件
  setupNprogress(routes)
}

async function setupApp() {
  // 挂载vuex状态管理
  setupStorePlugin(app)
  // Multilingual configuration
  // Asynchronous case: language files may be obtained from the server side
  await setupI18n(app)
  // 挂载路由
  await setupRouter(app)

  app.mount('#app')
}

setupPlugins()

setupApp()
