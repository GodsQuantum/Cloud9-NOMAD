import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import fr from '~/locales/fr.json'
import generatedFr from '~/locales/fr-auto.json'
export type Locale = 'en' | 'fr'
const key = 'nomad.ui.locale'
function detect(): Locale {
  if (typeof window === 'undefined') return 'en'
  try { const stored = window.localStorage.getItem(key); if (stored === 'fr' || stored === 'en') return stored } catch {}
  return window.navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}
type State = { locale: Locale; setLocale: (v: Locale) => void; t: (s: string) => string }

// Cloud9 full-UI local translation bridge: translates only vetted static UI strings,
// never user-supplied notes, editable fields, code blocks or arbitrary content.
const allFrench: Record<string,string> = {...generatedFr, ...fr}
const excluded = 'script,style,textarea,pre,code,[contenteditable="true"],[translate="no"]'
const originalText = new WeakMap<Text, string>()
const originalAttrs = new WeakMap<Element, Map<string,string>>()

function translateVisibleUi(root: Node, locale: Locale) {
  const visit = (node: Node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node as Text
      if (text.parentElement?.closest(excluded)) return
      const current = text.nodeValue || ''
      const remembered = originalText.get(text)
      if (locale === 'en') {
        if (remembered !== undefined) {
          if (current !== remembered) text.nodeValue = remembered
          originalText.delete(text)
        }
        return
      }
      let raw = current
      if (remembered !== undefined) {
        const existingKey = remembered.trim().replace(/\s+/g, ' ')
        const expected = allFrench[existingKey]
        const pref = remembered.match(/^\s*/)?.[0] ?? ''
        const tail = remembered.match(/\s*$/)?.[0] ?? ''
        if (current === remembered || (expected && current === pref + expected + tail)) {
          raw = remembered
        } else {
          originalText.delete(text)
        }
      }
      const key = raw.trim().replace(/\s+/g, ' ')
      const translated = allFrench[key]
      if (!translated || translated === key) return
      const prefix = raw.match(/^\s*/)?.[0] ?? ''
      const suffix = raw.match(/\s*$/)?.[0] ?? ''
      const next = prefix + translated + suffix
      originalText.set(text, raw)
      if (current !== next) text.nodeValue = next
      return
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return
    const el = node as Element
    if (el.matches(excluded) || el.closest('[translate="no"]')) return
    let attrs = originalAttrs.get(el)
    for (const attr of ['aria-label','title','placeholder','alt']) {
      const current = el.getAttribute(attr)
      const prior = attrs?.get(attr)
      if (locale === 'en') {
        if (prior !== undefined) el.setAttribute(attr,prior)
        continue
      }
      if (!current) continue
      const original = prior !== undefined && (current === prior || current === allFrench[prior]) ? prior : current
      const target = allFrench[original]
      if (target && target !== original) {
        if (!attrs) { attrs = new Map(); originalAttrs.set(el,attrs) }
        attrs.set(attr,original)
        if (current !== target) el.setAttribute(attr,target)
      }
    }
    if (locale === 'en' && attrs) originalAttrs.delete(el)
    for (const child of Array.from(el.childNodes)) visit(child)
  }
  visit(root)
}

const Context = createContext<State | null>(null)
export function I18nProvider({children}: {children: ReactNode}) {
  const [locale,setLocale] = useState<Locale>(detect)
  useEffect(() => {
    if (document.body) translateVisibleUi(document.body,locale)
    if (locale!=='fr') return
    // The command center uses React and creates modals/menus dynamically.
    // Observe only affected nodes; never poll and never translate editable content.
    let pending = false
    const observer=new MutationObserver((changes) => {
      if(pending)return
      pending=true
      queueMicrotask(() => {
        pending=false
        for(const change of changes) {
          if(change.type==='childList') {
            for(const node of Array.from(change.addedNodes))translateVisibleUi(node,locale)
          } else if(change.type==='characterData') {
            translateVisibleUi(change.target,locale)
          } else if(change.type==='attributes') {
            translateVisibleUi(change.target,locale)
          }
        }
      })
    })
    if(document.body) {
      observer.observe(document.body,{
        subtree:true,childList:true,characterData:true,
        attributes:true,attributeFilter:['placeholder','title','aria-label','alt'],
      })
    }
    return ()=>observer.disconnect()
  },[locale])

  useEffect(() => { document.documentElement.lang = locale; try { window.localStorage.setItem(key,locale) } catch {} },[locale])
  const state = useMemo<State>(()=>({locale,setLocale,t: (s)=>locale==='fr' ? (fr as Record<string,string>)[s] ?? s : s}),[locale])
  return <Context.Provider value={state}>{children}</Context.Provider>
}
export function useI18n() { const c = useContext(Context); if (!c) throw new Error('I18nProvider missing'); return c }
