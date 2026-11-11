import { Link, usePage } from '@inertiajs/react'
import { offlineLibraryUrl } from '~/lib/navigation'
import { useEffect, useState } from 'react'
import {
  IconActivityHeartbeat, IconAntennaBars5, IconBolt, IconBook, IconCpu, IconDatabase,
  IconHome, IconLayoutDashboard, IconMap, IconMedicalCross, IconMenu2, IconSettings,
  IconShieldCheck, IconTool, IconWifi, IconX, IconSchool, IconBooks, IconFirstAidKit,
} from '@tabler/icons-react'

type ConnectionStatus = 'checking' | 'connected' | 'offline'
type NavLink = { label: string; href: string; icon: typeof IconHome; external?: boolean }
const navigation = (kiwixNavLocation?: string | null): NavLink[] => [
  { label: 'Accueil', href: '/home', icon: IconLayoutDashboard },
  { label: 'Savoir', href: offlineLibraryUrl('wikipedia_fr_all_maxi_2026-05', kiwixNavLocation), icon: IconBooks, external: true },
  { label: 'Éducation', href: offlineLibraryUrl('ecole_diy_nomad_fr_2026', kiwixNavLocation), icon: IconSchool, external: true },
  { label: 'Guide NOMAD', href: '/docs/home', icon: IconBook },
  { label: 'Autonomie pratique', href: offlineLibraryUrl('resilience_civile_fr_2026', kiwixNavLocation), icon: IconShieldCheck, external: true },
  { label: 'Intelligence artificielle', href: '/chat', icon: IconCpu },
  { label: 'Cartes', href: '/maps', icon: IconMap },
  { label: 'Maison', href: '/home?category=home', icon: IconHome },
  { label: 'Outils', href: '/supply-depot', icon: IconTool },
  { label: 'Communications', href: '/home?category=tools', icon: IconAntennaBars5 },
  { label: 'Médical', href: offlineLibraryUrl('wikipedia_fr_medicine_maxi_2026-07', kiwixNavLocation), icon: IconMedicalCross, external: true },
  { label: 'Premiers secours', href: offlineLibraryUrl('premiers_secours_fr_2026', kiwixNavLocation), icon: IconFirstAidKit, external: true },
  { label: 'Énergie & système', href: '/settings/system', icon: IconBolt },
]

function useSystemStatus() {
  const [connection, setConnection] = useState<ConnectionStatus>('checking')
  useEffect(() => {
    const controller = new AbortController()
    const verify = async () => {
      try {
        const response = await fetch('/api/ollama/remote-status', { signal: controller.signal })
        if (!response.ok) throw new Error('Unreachable')
        const result = await response.json()
        setConnection(result.connected ? 'connected' : 'offline')
      } catch {
        if (!controller.signal.aborted) setConnection('offline')
      }
    }
    verify()
    return () => controller.abort()
  }, [])
  return connection
}

export default function ResilienceShell({
  children,
  localeToggle,
}: {
  children: React.ReactNode
  localeToggle: React.ReactNode
}) {
  const { kiwixNavLocation } = usePage<{ kiwixNavLocation?: string | null }>().props
  const [open, setOpen] = useState(false)
  const connection = useSystemStatus()
  const pathname = typeof window === 'undefined' ? '/home' : window.location.pathname

  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', close)
    document.body.classList.add('nomad-resilience-body')
    return () => { window.removeEventListener('keydown', close); document.body.classList.remove('nomad-resilience-body') }
  }, [])

  return (
    <div className="nomad-resilience min-h-screen" data-nomad-shell="resilience">
      <a className="nomad-skip-link" href="#nomad-main">Aller au contenu</a>
      <header className="nomad-resilience-topbar" aria-label="Statut NOMAD">
        <button type="button" className="nomad-menu-toggle" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
        <Link href="/home" className="nomad-top-brand">
          <img src="/nomad-primary.svg" alt="" width={35} height={35} />
          <span><small>PROJECT</small><strong>NOMAD</strong></span>
        </Link>
        <div className="nomad-top-statuses">
          <div className="nomad-top-status"><IconShieldCheck size={23} /><span><strong>Centre local</strong><small>Interface accessible</small></span></div>
          <div className="nomad-top-status"><IconCpu size={23} /><span><strong>{connection === 'connected' ? 'IA connectée' : connection === 'offline' ? 'IA non disponible' : 'Vérification IA'}</strong><small>Via OmniRoute</small></span></div>
          <div className="nomad-top-status"><IconWifi size={23} /><span><strong>Accès réseau</strong><small>Serveur auto-hébergé</small></span></div>
          <div className="nomad-top-status"><IconDatabase size={23} /><span><strong>Stockage</strong><small>Mesure indisponible</small></span></div>
        </div>
        <div className="nomad-top-energy"><IconBolt size={22}/><span><strong>ÉNERGIE</strong><small>Non mesurée</small></span></div>
        <div className="nomad-top-locale">{localeToggle}</div>
      </header>
      <div className="nomad-resilience-frame">
        {open && <button type="button" className="nomad-nav-scrim" aria-label="Fermer la navigation" onClick={() => setOpen(false)} />}
        <aside className={'nomad-resilience-sidebar ' + (open ? 'nomad-nav-open' : '')} aria-label="Navigation principale">
          <div className="nomad-nav-subtitle">NAVIGATION / LOCAL</div>
          <nav aria-label="Navigation principale">
            {navigation(kiwixNavLocation).map(({ label, href, icon: Icon, external }) => {
              const active = !external && (pathname === href || pathname.startsWith(href + '/'))
              const content = <><Icon size={21} strokeWidth={1.85} /><span>{label}</span></>
              return external
                ? <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="nomad-nav-item" onClick={() => setOpen(false)}>{content}</a>
                : <Link key={label} href={href} className={'nomad-nav-item ' + (active ? 'nomad-nav-active' : '')} aria-current={active ? 'page' : undefined} onClick={() => setOpen(false)}>{content}</Link>
            })}
          </nav>
          <div className="nomad-nav-footer">
            <IconActivityHeartbeat size={19} /><span>LOCAL-FIRST</span>
            <small>Autonomie. Savoir. Résilience.</small>
          </div>
        </aside>
        <main id="nomad-main" className="nomad-resilience-main" tabIndex={-1}>
          {children}
        </main>
      </div>
      <footer className="nomad-resilience-footer"><span><IconShieldCheck size={17}/> NOMAD • Local-first</span><span>Contenus hors ligne selon les modules installés</span><span><IconSettings size={17}/> Autohébergé</span></footer>
    </div>
  )
}
