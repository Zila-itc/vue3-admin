import { defineStore } from 'pinia'
import type { LocaleType } from '@/locales/config'

interface LocaleState {
  locale: LocaleType
}

export const useLocaleStore = defineStore({
  id: 'locale',
  state: (): LocaleState => ({
    locale: StorageUtil.get(LOCALE_KEY, 'en_US'),
  }),
  getters: {
    getLocale(): LocaleType {
      return this.locale ?? 'en_US'
    },
  },
  actions: {
    setLocale(locale: LocaleType) {
      this.locale = locale
      StorageUtil.set(LOCALE_KEY, locale)
    },
  },
})

// Need to be used outside the setup
export function useLocaleStoreWithOut() {
  return useLocaleStore(store)
}
