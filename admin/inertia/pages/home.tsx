import { useI18n } from '~/context/I18nProvider'
import {
  IconBolt,
  IconBox,
  IconHelp,
  IconMapRoute,
  IconPill,
  IconSettings,
  IconWifiOff,
  IconBook, IconCpu, IconHome2, IconPhotoVideo, IconAntennaBars5,
  IconMedicalCross, IconMap2, IconShieldCheck, IconSchool, IconBooks, IconFirstAidKit,
} from '@tabler/icons-react'
import { Head, Link, router, usePage } from '@inertiajs/react'
import AppLayout from '~/layouts/AppLayout'
import { getServiceLink, offlineLibraryUrl } from '~/lib/navigation'
import { ServiceSlim } from '../../types/services'
import DynamicIcon, { DynamicIconName } from '~/components/DynamicIcon'
import { useUpdateAvailable } from '~/hooks/useUpdateAvailable'
import { useSystemSetting } from '~/hooks/useSystemSetting'
import {
  useBenchmarkRerunBanner,
  BENCHMARK_RERUN_BANNER_QUERY_KEY,
} from '~/hooks/useBenchmarkRerunBanner'
import { useQueryClient } from '@tanstack/react-query'
import api from '~/lib/api'
import Alert from '~/components/Alert'
import WhatsNewBanner from '~/components/WhatsNewBanner'
import { SERVICE_NAMES } from '../../constants/service_names'
import LinkTileModal from '~/components/LinkTileModal'
import { IconPlus, IconPencil, IconTrash, IconExternalLink, IconStar, IconArrowUpRight } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { linkTileColor } from '../../constants/link_tile_colors'

// Maps is a Core Capability (display_order: 4)
const MAPS_ITEM = {
  group: 'system' as const,
  label: 'Maps',
  to: '/maps',
  target: '',
  description: 'View offline maps',
  icon: <IconMapRoute size={48} />,
  installed: true,
  displayOrder: 4,
  poweredBy: null,
}

// Drug Reference + "When to use what" — offline medical reference tiles.
// icon and displayOrder here are a reasonable default; both are open for the
// maintainer to re-pick to fit the dashboard's ordering conventions.
const DRUG_REFERENCE_ITEM = {
  group: 'system' as const,
  label: 'Drug Reference',
  to: '/drug-reference',
  target: '',
  description: 'Offline FDA drug labels. Search by drug name or by symptom',
  icon: <IconPill size={48} />,
  installed: true,
  displayOrder: 5,
  poweredBy: null,
}

// System items shown after all apps
const SYSTEM_ITEMS = [
  {
    group: 'system' as const,
    label: 'Easy Setup',
    to: '/easy-setup',
    target: '',
    description:
      'Not sure where to start? Use the setup wizard to quickly configure your NOMAD!',
    icon: <IconBolt size={48} />,
    installed: true,
    displayOrder: 50,
    poweredBy: null,
  },
  {
    group: 'system' as const,
    label: 'Supply Depot',
    to: '/supply-depot',
    target: '',
    description: 'Browse and install curated apps, or add your own Docker container',
    icon: <IconBox size={48} />,
    installed: true,
    displayOrder: 51,
    poweredBy: null,
  },
  {
    group: 'system' as const,
    label: 'Docs',
    to: '/docs/home',
    target: '',
    description: 'Read Project NOMAD manuals and guides',
    icon: <IconHelp size={48} />,
    installed: true,
    displayOrder: 52,
    poweredBy: null,
  },
  {
    group: 'system' as const,
    label: 'Settings',
    to: '/settings/system',
    target: '',
    description: 'Configure your NOMAD settings',
    icon: <IconSettings size={48} />,
    installed: true,
    displayOrder: 53,
    poweredBy: null,
  },
]

type Usage = 'knowledge' | 'ai' | 'home' | 'tools' | 'system'
function groupFor(name: string, category = ''): Usage {
  const s = (name + ' ' + category).toLowerCase()
  if (/kiwix|kolibri|stump|chaptarr|jellyfin|library|education|books|media/.test(s)) return 'knowledge'
  if (/ollama|open_webui|omniroute|assistant|excalidash|llm/.test(s)) return 'ai'
  if (/homebox|meshcore|meshtastic|house|homeassistant/.test(s)) return 'home'
  return 'tools'
}
interface DashboardItem {
  group: Usage
  status?: string
  label: string
  to: string
  target: string
  description: string
  icon: React.ReactNode
  installed: boolean
  displayOrder: number
  poweredBy: string | null
  /** Set only for user-added link tiles, which render differently and can be edited. */
  linkTile?: ServiceSlim
}

export default function Home(props: {
  system: {
    services: ServiceSlim[]
  }
  // Server-computed: true when the offline FDA drug dataset is installed or
  // installing (curated Medicine tier). Gates the two medical-reference tiles
  // below so they only appear once the data exists.
  drugReferenceInstalled: boolean
}) {
  const { t } = useI18n()
  const items: DashboardItem[] = []
  const updateInfo = useUpdateAvailable();
  const rerunBanner = useBenchmarkRerunBanner()
  const queryClient = useQueryClient()
  const { aiAssistantName, kiwixNavLocation } = usePage<{ aiAssistantName: string; kiwixNavLocation?: string | null }>().props
  const library = (book: string) => offlineLibraryUrl(book, kiwixNavLocation)

  // Link tile management. `editingTile` null with the modal open means "create".
  const [linkModalOpen, setLinkModalOpen] = useState(false)
  const [editingTile, setEditingTile] = useState<ServiceSlim | null>(null)
  // Deleting a tile is not undoable and the tiles are user-entered, so the trash
  // icon arms a confirm rather than deleting on the first click.
  const [pendingDelete, setPendingDelete] = useState<string | null>(null)
  const [linkError, setLinkError] = useState<string | null>(null)
  const [appSearch, setAppSearch] = useState('')
  const [appView, setAppView] = useState<'all' | 'knowledge' | 'ai' | 'home' | 'tools' | 'system' | 'favorites'>(() => {
    const filter = new URLSearchParams(window.location.search).get('category')
    return filter === 'home' || filter === 'knowledge' || filter === 'ai' || filter === 'tools' ? filter : 'all'
  })
  const [favorites, setFavorites] = useState<string[]>([])
  const [readiness, setReadiness] = useState<{ remote?: boolean; files?: number; ragOnline?: boolean }>({})
  useEffect(() => {
    const controller = new AbortController()
    Promise.allSettled([
      fetch('/api/ollama/remote-status', { signal: controller.signal }).then(async (res) => {
        if (!res.ok) throw new Error('Remote unavailable')
        return res.json()
      }),
      fetch('/api/rag/files', { signal: controller.signal }).then(async (res) => {
        if (!res.ok) throw new Error('Knowledge files unavailable')
        return res.json()
      }),
      fetch('/api/rag/health', { signal: controller.signal }).then(async (res) => {
        if (!res.ok) throw new Error('RAG unavailable')
        return res.json()
      }),
    ]).then(([remote, files, rag]) => {
      if (controller.signal.aborted) return
      setReadiness({
        remote: remote.status === 'fulfilled' ? !!remote.value.connected : undefined,
        files: files.status === 'fulfilled' && Array.isArray(files.value.files) ? files.value.files.length : undefined,
        ragOnline: rag.status === 'fulfilled' ? !!rag.value.online : undefined,
      })
    })
    return () => controller.abort()
  }, [])
  useEffect(() => {
    try {
      const data = JSON.parse(window.localStorage.getItem('nomad.dashboard.favorites.v1') || '[]')
      if (Array.isArray(data)) setFavorites(data.filter((x): x is string => typeof x === 'string'))
    } catch { /* Storage may be unavailable */ }
  }, [])
  const toggleFavorite = (url: string) => {
    setFavorites((prev) => {
      const next = prev.includes(url) ? prev.filter((x) => x !== url) : [...prev, url]
      try { window.localStorage.setItem('nomad.dashboard.favorites.v1', JSON.stringify(next)) } catch {}
      return next
    })
  }

  const refreshServices = () => router.reload({ only: ['system'] })

  const handleDeleteTile = async (serviceName: string) => {
    const result = await api.deleteLinkTile(serviceName)
    setPendingDelete(null)
    if (!result?.success) {
      setLinkError('Failed to remove this link.')
      return
    }
    refreshServices()
  }


  const handleDismissRerunBanner = async () => {
    await api.updateSetting('benchmark.rerunBannerDismissed', true)
    queryClient.invalidateQueries({ queryKey: BENCHMARK_RERUN_BANNER_QUERY_KEY })
  }

  // Check if user has visited Easy Setup
  const { data: easySetupVisited } = useSystemSetting({
    key: 'ui.hasVisitedEasySetup'
  })
  const shouldHighlightEasySetup = easySetupVisited?.value ? String(easySetupVisited.value) !== 'true' : false

  // Add installed services (non-dependency services only). Link tiles are user-added
  // shortcuts with no container behind them, so they are collected separately below
  // and rendered with their own treatment.
  props.system.services
    .filter(
      (service) =>
        service.installed && (service.ui_location || service.custom_url) && !service.is_link_tile
    )
    .forEach((service) => {
      items.push({
        group: groupFor(service.service_name, service.category || ''),
        status: service.status,
        // Inject custom AI Assistant name if this is the chat service
        label: service.service_name === SERVICE_NAMES.OLLAMA && aiAssistantName ? aiAssistantName : (service.friendly_name || service.service_name),
        to:
          service.ui_location || service.custom_url
            ? getServiceLink(service.ui_location || '', service.custom_url)
            : '#',
        target: '_blank',
        description:
          service.description ||
          `Access the ${service.friendly_name || service.service_name} application`,
        icon: service.icon ? (
          <DynamicIcon icon={service.icon as DynamicIconName} className="!size-12" />
        ) : (
          <IconWifiOff size={48} />
        ),
        installed: service.installed,
        displayOrder: service.display_order ?? 100,
        poweredBy: service.powered_by ?? null,
      })
    })

  // User-added link tiles: shortcuts to things NOMAD does not manage.
  props.system.services
    .filter((service) => service.is_link_tile && service.custom_url)
    .forEach((service) => {
      items.push({
        group: groupFor(service.service_name, service.category || ''),
        label: service.friendly_name || service.service_name,
        to: getServiceLink('', service.custom_url),
        target: '_blank',
        description: service.description || 'Opens in a new tab',
        icon: <DynamicIcon icon={service.icon as DynamicIconName} className="!size-12" />,
        installed: true,
        displayOrder: service.display_order ?? 90,
        poweredBy: null,
        linkTile: service,
      })
    })

  // Kiwix collections are content inside the existing Kiwix service, not new
  // Docker apps. Surface their *purpose* in the NOMAD dashboard.
  items.push({
    group: 'knowledge',
    label: 'Éducation · 5 ans au Bac',
    to: library('ecole_diy_nomad_fr_2026'),
    target: '_blank',
    description: 'Parcours par âge, leçons, exercices corrigés, Manuels Libres, Kolibri, PhET et annales 2026.',
    icon: <IconSchool size={48} />,
    installed: true,
    displayOrder: 2,
    poweredBy: 'Kiwix / Kolibri',
  })
  items.push({
    group: 'knowledge',
    label: 'Autonomie et survie',
    to: library('resilience_civile_fr_2026'),
    target: '_blank',
    description: 'Eau potable, premiers secours, énergie, alimentation, réparations et gestes de sécurité. Guides officiels et low-tech.',
    icon: <IconShieldCheck size={48} />,
    installed: true,
    displayOrder: 3,
    poweredBy: 'Kiwix',
  })

  // Reference knowledge and the curriculum are separate destinations.
  items.push({
    group: 'knowledge',
    label: 'Savoir · Encyclopédie',
    to: library('wikipedia_fr_all_maxi_2026-05'),
    target: '_blank',
    description: 'Wikipédia en français, consultable hors connexion.',
    icon: <IconBooks size={48} />,
    installed: true,
    displayOrder: 4,
    poweredBy: 'Kiwix',
  })

  // Add Maps as a Core Capability
  items.push(MAPS_ITEM)

  // Add the offline medical-reference tiles only once the FDA drug dataset is
  // installed (or installing) via the curated Medicine tier. Both tiles read the
  // same drug_labels table, so they gate together off one server-computed flag.
  if (props.drugReferenceInstalled) {
    items.push(DRUG_REFERENCE_ITEM)
  }

  // Add system items
  items.push(...SYSTEM_ITEMS)

  // Sort all items by display order
  items.sort((a, b) => a.displayOrder - b.displayOrder)
  const visibleItems = items.filter((item) => {
    const group = item.linkTile ? 'links' : item.target === '_blank' ? 'applications' : 'system'
    if (appView === 'favorites' && !favorites.includes(item.to)) return false
    if (appView !== 'all' && appView !== 'favorites' && item.group !== appView) return false
    const query = appSearch.trim().toLocaleLowerCase()
    return !query || [t(item.label), t(item.description)].join(' ').toLocaleLowerCase().includes(query)
  })

  const matchingUrl = (...terms: string[]) =>
    items.find((item) => terms.some((term) => (item.label + ' ' + item.to).toLowerCase().includes(term)))?.to

  // Kiwix is an existing native NOMAD service. When the separate openFDA dataset
  // is not installed, use the already-mounted offline medical encyclopaedia
  // instead of sending a medical quick action to the generic app catalogue.
  // No hostname or ZIM filename is hardcoded: this remains portable upstream.
  const kiwixService = props.system.services.find(
    (service) => service.service_name === SERVICE_NAMES.KIWIX && service.installed
  )
  const kiwixLibraryUrl = kiwixService
    ? getServiceLink(kiwixService.ui_location || '', kiwixService.custom_url)
    : null
  const medicalGuideHref = props.drugReferenceInstalled
    ? '/drug-reference'
    : kiwixLibraryUrl ? library('wikipedia_fr_medicine_maxi_2026-07') : '/supply-depot'

  const missions = [
    { id: 'knowledge', title: 'Éducation', subtitle: '5 ans → Bac · Cours · Exercices', description: 'Ouvrir le parcours pédagogique, les manuels et les annales', icon: IconSchool, href: library('ecole_diy_nomad_fr_2026'), status: 'ÉTUDIER', detail: 'École à domicile' },
    { id: 'savoir', title: 'Savoir', subtitle: 'Encyclopédie · Références', description: 'Explorer Wikipédia hors ligne', icon: IconBooks, href: library('wikipedia_fr_all_maxi_2026-05'), status: 'CONSULTER', detail: 'Encyclopédie générale' },
    { id: 'firstaid', title: 'Premiers secours', subtitle: 'Urgence · Gestes sûrs', description: 'Ouvrir les fiches de premiers secours hors ligne', icon: IconFirstAidKit, href: library('premiers_secours_fr_2026'), status: 'CONSULTER', detail: 'Guides de premiers secours' },
    { id: 'ai', title: 'Assistant IA local', subtitle: 'Recherche · Planification', description: 'Assistant via OmniRoute', icon: IconCpu, href: '/chat', status: readiness.remote === true ? 'CONNECTÉ' : readiness.remote === false ? 'INDISPONIBLE' : 'À VÉRIFIER', detail: 'Modèles selon disponibilité' },
    { id: 'maps', title: 'Cartes & navigation', subtitle: 'Cartographie hors ligne', description: 'Consulter les zones installées', icon: IconMap2, href: '/maps', status: 'OUVRIR', detail: 'Cartes locales' },
    { id: 'medical', title: 'Référence médicale', subtitle: 'Médicaments · Précautions', description: 'Consulter la documentation', icon: IconMedicalCross, href: medicalGuideHref, status: props.drugReferenceInstalled ? 'FDA DISPONIBLE' : kiwixLibraryUrl ? 'KIWIX DISPONIBLE' : 'À CONFIGURER', detail: props.drugReferenceInstalled ? 'Fiches de médicaments' : kiwixLibraryUrl ? 'Encyclopédie médicale française' : 'Installer une source médicale' },
    { id: 'home', title: 'Systèmes maison', subtitle: 'Homebox · Équipements', description: 'Inventaire et services locaux', icon: IconHome2, href: matchingUrl('homebox') || '/supply-depot', status: matchingUrl('homebox') ? 'ACCÉDER' : 'À CONFIGURER', detail: 'Domotique · Maison' },
    { id: 'media', title: 'Médias & archives', subtitle: 'Vidéo · Livres · Références', description: 'Médiathèque auto-hébergée', icon: IconPhotoVideo, href: matchingUrl('jellyfin') || '/supply-depot', status: matchingUrl('jellyfin') ? 'ACCÉDER' : 'À CONFIGURER', detail: 'Bibliothèques' },
    { id: 'power', title: 'Énergie & système', subtitle: 'Consommation · Température', description: 'État du système et réglages', icon: IconBolt, href: '/settings/system', status: 'NON MESURÉ', detail: 'Aucune batterie détectée' },
    { id: 'comms', title: 'Communications', subtitle: 'Mesh · Réseaux locaux', description: 'Messagerie et coordination', icon: IconAntennaBars5, href: matchingUrl('meshtastic') || '/supply-depot', status: matchingUrl('meshtastic') ? 'ACCÉDER' : 'À CONFIGURER', detail: 'Réseaux mesh' },
  ] as const
  const quickActions = [
    { text: 'Ouvrir les cartes', href: '/maps', icon: IconMap2 },
    { text: 'Guide médical', href: medicalGuideHref, icon: IconMedicalCross },
    { text: 'Premiers secours', href: library('premiers_secours_fr_2026'), icon: IconFirstAidKit },
    { text: 'Ouvrir l’IA', href: '/chat', icon: IconCpu },
    { text: 'État du système', href: '/settings/system', icon: IconBolt },
    { text: 'Homebox', href: matchingUrl('homebox') || '/supply-depot', icon: IconHome2 },
  ] as const

  return (
    <AppLayout compact>
      <Head title={t('Command Center')} />
      {
        updateInfo?.updateAvailable && (
          <div className='flex justify-center items-center p-4 w-full'>
            <Alert
              title="An update is available for Project NOMAD!"
              type="info-inverted"
              variant="solid"
              className="w-full"
              buttonProps={{
                variant: 'primary',
                children: 'Go to Settings',
                icon: 'IconSettings',
                onClick: () => router.visit('/settings/update'),
              }}
            />
          </div>
        )
      }
      <WhatsNewBanner />
      {
        rerunBanner?.show && (
          <div className='flex justify-center items-center px-4 pt-4 w-full'>
            <Alert
              title="Your benchmark can be re-scored with Score v2"
              message="We've upgraded the benchmark scoring system. Re-run your benchmark to get an updated Score v2 result on the community leaderboard."
              type="info-inverted"
              variant="solid"
              className="w-full"
              dismissible
              onDismiss={handleDismissRerunBanner}
              buttonProps={{
                variant: 'primary',
                children: 'Re-run benchmark',
                icon: 'IconRefresh',
                onClick: () => router.visit('/settings/benchmark'),
              }}
            />
          </div>
        )
      }
      <div className="nomad-aero-home">
      <section className="nomad-resilience-hero" aria-label="Centre de contrôle résilient">
        <div className="nomad-resilience-hero-picture" aria-hidden="true" />
        <div className="nomad-resilience-hero-content">
          <div className="nomad-hero-eyebrow">LOCAL / AUTONOMIE / SAVOIR</div>
          <h1>Project <strong>NOMAD</strong> <em>///</em></h1>
          <p className="nomad-hero-heading">Centre de contrôle résilient</p>
          <p className="nomad-hero-tagline">Connaissance · IA · Maison · Navigation · Indépendance</p>
        </div>
      </section>
      <div className="nomad-resilience-dashboard">
        <div className="nomad-resilience-dashboard-primary">
          <section className="nomad-missions" aria-label="Fonctions essentielles">
            {missions.map((mission) => (
              <a key={mission.id} className={'nomad-mission-card nomad-mission-' + mission.id} href={mission.href}>
                <div className="nomad-mission-art" aria-hidden="true" />
                <mission.icon size={32} strokeWidth={1.7} aria-hidden="true"/>
                <h2>{mission.title}</h2>
                <p>{mission.subtitle}</p>
                <span className="nomad-mission-description">{mission.description}</span>
                <div className="nomad-mission-bottom"><strong>{mission.status}</strong><small>{mission.detail}</small></div>
              </a>
            ))}
          </section>
          <section className="nomad-quick-actions" aria-label="Actions rapides">
            <h2><span aria-hidden="true">///</span> ACTIONS RAPIDES / URGENCE</h2>
            <div className="nomad-quick-grid">
              {quickActions.map(({ text, href, icon: Icon }) => (
                <a key={text} href={href} className="nomad-quick-action"><Icon size={25}/><span>{text}</span></a>
              ))}
            </div>
          </section>
        </div>
        <aside className="nomad-resilience-situation" aria-label="Situation">
          <section className="nomad-situation-panel">
            <h2><IconWifiOff size={19}/> SITUATION</h2>
            <div className="nomad-situation-row"><span><IconShieldCheck size={24}/> Interface NOMAD</span><strong>ACCESSIBLE</strong></div>
            <div className="nomad-situation-row"><span><IconCpu size={24}/> Assistant IA</span><strong>{readiness.remote === true ? 'CONNECTÉ' : readiness.remote === false ? 'HORS LIGNE' : 'EN TEST'}</strong></div>
            <div className="nomad-situation-row"><span><IconBook size={24}/> Base documentaire</span><strong>{readiness.files === undefined ? 'NON MESURÉE' : readiness.files + ' fichier(s)'}</strong></div>
            <div className="nomad-situation-row"><span><IconBolt size={24}/> Réserve d’énergie</span><strong>NON MESURÉE</strong></div>
            <div className="nomad-situation-row"><span><IconSettings size={24}/> Espace disque</span><strong>NON MESURÉ</strong></div>
          </section>
          <section className="nomad-situation-panel nomad-emergency-status">
            <h2><IconShieldCheck size={21}/> PRÉPARATION D’URGENCE</h2>
            <p className="nomad-emergency-indeterminate">À vérifier</p>
            <p>Les services présents ne prouvent pas à eux seuls leur disponibilité hors réseau ni leur autonomie électrique.</p>
            <Link href="/easy-setup">Vérifier la configuration</Link>
          </section>
        </aside>
      </div>
      <div className="nomad-resilience-setup-actions">
        <div><strong>CONFIGURATION / CONNEXIONS</strong><p>Raccorder les applications déjà installées ou un fournisseur IA, sans modifier leurs conteneurs.</p></div>
        <div className="nomad-setup-buttons">
          <button type="button" onClick={() => { setEditingTile(null); setLinkModalOpen(true) }}><IconPlus size={19}/> Raccorder une application</button>
          <Link href="/settings/models"><IconCpu size={19}/> Fournisseur IA / API</Link>
          <Link href="/supply-depot"><IconSettings size={19}/> Catalogue</Link>
        </div>
      </div>
      <section className="px-4 pt-7 sm:px-6" aria-label="Navigation des applications">
        <div className="nomad-aero-toolbar flex flex-col gap-4 rounded-2xl border border-border-default bg-surface-primary p-5 shadow-sm md:flex-row md:items-center md:justify-between sm:p-6">
          <div>
            <h2 className="text-xl font-semibold text-text-primary">Explorer les applications</h2>
            <p className="text-sm text-text-secondary">{visibleItems.length} raccourcis disponibles</p>
          </div>
          <input
            type="search"
            aria-label="Rechercher une application"
            placeholder="Rechercher une application ou un outil…"
            value={appSearch}
            onChange={(event) => setAppSearch(event.target.value)}
            className="nomad-aero-search w-full rounded-xl border border-border-default bg-surface-secondary px-4 py-3 text-sm text-text-primary outline-none focus:border-desert-green focus-visible:ring-2 focus-visible:ring-desert-green md:max-w-sm"
          />
        </div>
        <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Filtrer les raccourcis">
          {([
            ['all', 'Tous'],
            ['favorites', 'Favoris'],
            ['knowledge', 'Bibliothèque'],
            ['ai', 'IA'],
            ['home', 'Maison'],
            ['tools', 'Outils'],
            ['system', 'NOMAD'],
          ] as const).map(([value, label]) => (
            <button
              key={value}
              type="button"
              aria-pressed={appView === value}
              onClick={() => setAppView(value)}
              className={appView === value
                ? 'nomad-aero-filter rounded-full border border-desert-green bg-desert-green px-4 py-2 text-sm font-semibold text-white'
                : 'nomad-aero-filter rounded-full border border-border-default bg-surface-primary px-4 py-2 text-sm font-medium text-text-primary hover:border-desert-green'}
            >
              {label}
            </button>
          ))}
        </div>
      </section>
      <div className="nomad-aero-grid mx-auto grid max-w-7xl grid-cols-1 gap-5 p-4 pt-6 sm:grid-cols-2 sm:px-6 xl:grid-cols-3">
        {visibleItems.map((item) => {
          const isEasySetup = item.label === 'Easy Setup'
          const shouldHighlight = isEasySetup && shouldHighlightEasySetup

          const isLinkTile = Boolean(item.linkTile)
          // A flat surface color read as a stark white card next to the filled
          // app tiles. Tint from the brand palette instead, user-chosen.
          const tileColor = linkTileColor(item.linkTile?.link_color)

          // Link tiles are deliberately not styled like managed apps: outlined
          // rather than filled, with an external-link marker. If they looked the
          // same, users would expect Start/Stop/Update and file bugs when those
          // controls are not there.
          const tileContent = (
            <div
              className={
                isLinkTile
                  ? `nomad-aero-card nomad-aero-shortcut relative rounded-3xl border border-dashed ${tileColor.border} ${tileColor.bg} text-text-primary shadow-sm min-h-64 flex flex-col items-center justify-center cursor-pointer text-center px-7 py-8 sm:px-8`
                  : 'nomad-aero-card relative rounded-3xl border border-border-default bg-surface-primary text-text-primary shadow-sm min-h-64 flex flex-col items-center justify-center cursor-pointer text-center px-7 py-8 sm:px-8'
              }
            >
              {isLinkTile && (
                <span
                  className={`absolute top-4 left-4 ${tileColor.marker}`}
                  title="A shortcut you added. NOMAD does not manage this."
                >
                  <IconExternalLink size={16} />
                </span>
              )}
              {shouldHighlight && (
                <span className="absolute top-2 right-2 flex items-center justify-center">
                  <span
                    className="animate-ping absolute inline-flex w-16 h-6 rounded-full bg-desert-orange-light opacity-75"
                    style={{ animationDuration: '1.5s' }}
                  ></span>
                  <span className="relative inline-flex items-center rounded-full px-2.5 py-1 bg-desert-orange-light text-xs font-semibold text-white shadow-sm">
                    Start here!
                  </span>
                </span>
              )}
              <div className="nomad-aero-icon mb-4 flex size-16 shrink-0 items-center justify-center rounded-[1.35rem] bg-desert-green/10 text-desert-green [&_svg]:!size-9">{item.icon}</div>
              <h3 className="max-w-full break-words px-2 text-lg font-semibold tracking-tight sm:text-xl">{t(item.label)}</h3>
              {item.poweredBy && <p className="text-sm opacity-80">Powered by {item.poweredBy}</p>}
              <p className="mt-2 line-clamp-3 max-w-[30ch] text-sm leading-relaxed text-text-secondary">{t(item.description)}</p>
              {item.status && item.group !== 'system' && !item.linkTile && (
                <span className="mt-2 rounded-full bg-surface-secondary px-2.5 py-0.5 text-xs text-text-secondary">
                  {item.status === 'running' ? 'Démarré' : item.status === 'stopped' ? 'Arrêté' : item.status}
                </span>
              )}
            </div>
          )

          if (isLinkTile) {
            const tile = item.linkTile!
            const confirming = pendingDelete === tile.service_name

            return (
              <div key={item.label} className="group relative">
                <a href={item.to} target="_blank" rel="noopener noreferrer">
                  {tileContent}
                </a>

                <button type="button" onClick={() => toggleFavorite(item.to)}
                  aria-label={favorites.includes(item.to) ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                  aria-pressed={favorites.includes(item.to)}
                  className="nomad-aero-favorite absolute bottom-3 right-3 rounded-xl border border-border-default bg-surface-primary p-2.5 text-desert-green shadow-sm hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-2">
                  <IconStar size={17} fill={favorites.includes(item.to) ? 'currentColor' : 'none'} />
                </button>
                {confirming ? (
                  <div className="absolute top-3 right-3 flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleDeleteTile(tile.service_name)}
                      className="rounded bg-desert-red px-2 py-1 text-xs font-medium text-white hover:brightness-110"
                    >
                      Remove
                    </button>
                    <button
                      type="button"
                      onClick={() => setPendingDelete(null)}
                      className="rounded border border-border-default bg-surface-primary px-2 py-1 text-xs text-text-secondary hover:bg-surface-secondary"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="absolute top-3 right-3 flex items-center gap-2 rounded-xl bg-surface-primary/90 p-1 opacity-100 transition-opacity lg:opacity-0 group-hover:opacity-100 group-focus-within:opacity-100">
                    <button
                      type="button"
                      onClick={() => {
                        setEditingTile(tile)
                        setLinkModalOpen(true)
                      }}
                      title="Edit this link"
                      aria-label="Edit this link"
                      className="rounded p-1 text-text-muted hover:bg-surface-secondary hover:text-text-primary"
                    >
                      <IconPencil size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setPendingDelete(tile.service_name)}
                      title="Remove this link"
                      aria-label="Remove this link"
                      className="rounded p-1 text-text-muted hover:bg-surface-secondary hover:text-desert-red"
                    >
                      <IconTrash size={16} />
                    </button>
                  </div>
                )}
              </div>
            )
          }

          return (
            <div key={item.to} className="group relative">
              {item.target === '_blank'
                ? <a href={item.to} target="_blank" rel="noopener noreferrer" className="block rounded-2xl focus-visible:outline focus-visible:outline-2">{tileContent}</a>
                : <Link href={item.to} className="block rounded-2xl focus-visible:outline focus-visible:outline-2">{tileContent}</Link>}
              <button type="button" onClick={() => toggleFavorite(item.to)}
                aria-label={favorites.includes(item.to) ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                aria-pressed={favorites.includes(item.to)}
                className="nomad-aero-favorite absolute right-3 top-3 rounded-xl border border-border-default bg-surface-primary p-2.5 text-desert-green shadow-sm hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-2">
                <IconStar size={17} fill={favorites.includes(item.to) ? 'currentColor' : 'none'} />
              </button>
            </div>
          )
        })}

        {visibleItems.length === 0 && (
          <p className="col-span-full rounded-lg border border-dashed border-border-default p-8 text-center text-text-secondary">
            Aucun résultat. Modifie la recherche ou le filtre.
          </p>
        )}
        {/* Add-a-link affordance, last in the grid so it never displaces an app. */}
        {(appView === 'all' || appView === 'tools') && !appSearch.trim() && <button
          type="button"
          onClick={() => {
            setEditingTile(null)
            setLinkModalOpen(true)
          }}
          className="nomad-aero-card nomad-aero-add rounded-3xl border border-dashed border-border-default bg-surface-primary text-text-secondary hover:border-desert-green hover:text-text-primary min-h-64 flex flex-col items-center justify-center cursor-pointer text-center px-7 py-8"
        >
          <IconPlus size={40} />
          <h3 className="font-bold text-xl mt-2">Add a Link</h3>
          <p className="text-sm mt-1">Ajouter un raccourci vers un autre service</p>
        </button>}
      </div>
      </div>

      {linkError && (
        <div className="px-4 pb-4">
          <Alert title={linkError} type="error" variant="solid" className="w-full" />
        </div>
      )}

      <LinkTileModal
        open={linkModalOpen}
        tile={editingTile}
        onClose={() => setLinkModalOpen(false)}
        onSaved={() => {
          setLinkModalOpen(false)
          refreshServices()
        }}
        showError={(msg) => setLinkError(msg)}
      />
    </AppLayout>
  )
}
