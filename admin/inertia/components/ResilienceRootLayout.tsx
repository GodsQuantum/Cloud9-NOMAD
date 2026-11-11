import { useI18n } from '~/context/I18nProvider'
import ResilienceShell from '~/components/ResilienceShell'
export default function ResilienceRootLayout({ children }: { children: React.ReactNode }) {
  const { locale, setLocale } = useI18n()
  const localeToggle = (
    <button type="button" className="nomad-locale-toggle"
      onClick={() => {
        const next = locale === 'en' ? 'fr' : 'en'
        try { window.localStorage.setItem('nomad.ui.locale', next) } catch {}
        setLocale(next)
        window.location.reload()
      }}
      aria-label={locale === 'en' ? 'Passer en français' : 'Switch to English'}
    >{locale === 'en' ? 'FR' : 'EN'}</button>
  )
  return <ResilienceShell localeToggle={localeToggle}>{children}</ResilienceShell>
}
