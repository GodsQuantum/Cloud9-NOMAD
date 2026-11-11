import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import StyledSidebar from '~/components/StyledSidebar'
import api from '~/lib/api'
import { useI18n } from '~/context/I18nProvider'

const frTitles: Record<string,string> = {
  'home':'Accueil', 'getting-started':'Premiers pas', 'use-cases':'Cas d’utilisation',
  'supply-depot-apps':'Catalogue d’applications', 'drug-reference':'Référence médicamenteuse',
  'community-add-ons':'Extensions communautaires', 'updates':'Mises à jour',
  'faq':'Questions fréquentes', 'about':'À propos', 'release-notes':'Notes de version',
  'api-reference':'Référence API', 'omniroute-openai-compatible':'Compatibilité OmniRoute',
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const { locale } = useI18n()
  const { data, isLoading } = useQuery<Array<{ title: string; slug: string }>>({
    queryKey: ['docs'],
    queryFn: () => api.listDocs(),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  })

  const items = useMemo(() => {
    if (isLoading || !data) return []

    return data.map((doc) => ({
      name: locale === 'fr' ? (frTitles[doc.slug] ?? doc.title) : doc.title,
      href: `/docs/${doc.slug}`,
      current: false,
    }))
  }, [data, isLoading, locale])

  return (
    <div className="min-h-screen flex flex-row bg-desert-white">
      <StyledSidebar title="Documentation" items={items} />
      {children}
    </div>
  )
}
