import { createPinia } from 'pinia'
import type { App } from 'vue'

export const store = createPinia()

export function setupStorePlugin(app: App<Element>) {
  app.use(store)
}

