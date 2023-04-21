import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LocaleSwitcher() {
  const router = useRouter()
  const { locales, locale: activeLocale } = router

  const otherLocales = (locales || []).filter(
    (locale) => locale !== activeLocale
  ) // Only the other langs.

  function converter(locale) {
    let langText = ""
    if (locale === "tr") { langText = "Türkçe" }
    if (locale === "en") { langText = "English" }
    return langText
  }

  return (
    <div>
      <ul className='font-inter font-light text-sm text-gray-500'>
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router
          return (
            <li key={locale}>
              <Link
                className="hover:text-gray-600"
                href={{ pathname, query }}
                as={asPath}
                locale={locale}
                legacyBehavior
              >
                {converter(locale)}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}