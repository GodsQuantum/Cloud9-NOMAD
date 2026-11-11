import { Head } from '@inertiajs/react'
import { useEffect } from 'react'
import MarkdocRenderer from '~/components/MarkdocRenderer'
import DocsLayout from '~/layouts/DocsLayout'
import { useI18n } from '~/context/I18nProvider'

export default function Show({ content, contentFr }: { content: any; contentFr: any }) {
  const { locale } = useI18n()
  // Deep-link support: when arriving at /docs/<slug>#<anchor> (e.g. from a Supply Depot app's
  // "Docs" menu item), scroll to that section. The content renders synchronously from props, so a
  // double rAF lets the headings paint before we look one up.
  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.replace(/^#/, ''))
    if (!hash) return
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    )
  }, [content, contentFr, locale])

  return (
    <DocsLayout>
      <Head title="Documentation" />
      <div className="xl:pl-80 pt-14 xl:pt-8 pb-8 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <MarkdocRenderer content={locale === 'fr' ? contentFr : content} />
        </div>
      </div>
    </DocsLayout>
  )
}
