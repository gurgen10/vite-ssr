export const SUPPORTED_LANGUAGES = [
  {
    locale: 'am',
    name: 'Armenian',
  },
  {
    locale: 'en',
    name: 'English',
    default: true,
  },
]

export const SUPPORTED_LOCALES = SUPPORTED_LANGUAGES.map((l: any) => l.locale)

export const DEFAULT_LANGUAGE = SUPPORTED_LANGUAGES.find((l: any) => l.default)

export const DEFAULT_LOCALE = DEFAULT_LANGUAGE?.locale as string

export function extractLocaleFromPath(path = '') {
  const [_, maybeLocale] = path.split('/')
  return SUPPORTED_LOCALES.includes(maybeLocale) ? maybeLocale : DEFAULT_LOCALE
}
