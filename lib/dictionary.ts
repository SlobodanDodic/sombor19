import 'server-only'
import type { Locale } from '@/i18n.config'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  de: () => import('@/dictionaries/de.json').then(module => module.default),
  gr: () => import('@/dictionaries/gr.json').then(module => module.default),
  hu: () => import('@/dictionaries/hu.json').then(module => module.default),
  ru: () => import('@/dictionaries/ru.json').then(module => module.default),
  sr: () => import('@/dictionaries/sr.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()