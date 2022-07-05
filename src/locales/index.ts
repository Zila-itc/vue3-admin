import { type App } from 'vue'
import { createI18n } from 'vue-i18n'
import { localeMap } from './config'
import { setHtmlPageLang, setLoadLocalePool } from './helper'

async function createI18nOptions() {
  const localeStore = useLocaleStoreWithOut()
  const locale = localeStore.getLocale
  const defaultLocal = await import(`./lang/${locale}.ts`)
  const message = defaultLocal.default?.message ?? {}

  setHtmlPageLang(locale)
  setLoadLocalePool((loadLocalePool) => {
    loadLocalePool.push(locale)
  })

  return {
    locale,
    // legacy: false,
    fallbackLocale: localeMap.en_US, // set fallback locale
    messages: {
      [locale]: message as { [key: string]: string },
    },
    globalInjection: true,
    silentTranslationWarn: true, // true - warning off
    missingWarn: false,
    silentFallbackWarn: true,
  }
}

export const getI18n = (async () => createI18n(await createI18nOptions()))()

// eslint-disable-next-line import/no-mutable-exports
export let i18n: Awaited<typeof getI18n>

getI18n.then(res => (i18n = res))

// setup i18n instance with global
export async function setupI18n(app: App) {
  await getI18n
  app.use(i18n)
}