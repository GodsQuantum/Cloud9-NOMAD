import KVStore from '#models/kv_store'
import Service from '#models/service'
import { SERVICE_NAMES } from '../constants/service_names.js'
import { SystemService } from '#services/system_service'
import { defineConfig } from '@adonisjs/inertia'
import type { InferSharedProps } from '@adonisjs/inertia/types'

let _assistantNameCache: { value: string; expiresAt: number } | null = null

export function invalidateAssistantNameCache() {
  _assistantNameCache = null
}

const inertiaConfig = defineConfig({
  /**
   * Path to the Edge view that will be used as the root view for Inertia responses
   */
  rootView: 'inertia_layout',

  /**
   * Data that should be shared with all rendered pages
   */
  sharedData: {
    appVersion: () => SystemService.getAppVersion(),
    // Use the configured Kiwix link (including an HTTPS reverse proxy) on every
    // page. Do not reconstruct a port from the NOMAD dashboard's hostname.
    kiwixNavLocation: async () => {
      try {
        const service = await Service.query()
          .where('service_name', SERVICE_NAMES.KIWIX)
          .where('installed', true)
          .select('custom_url', 'ui_location')
          .first()
        return service?.custom_url || service?.ui_location || null
      } catch {
        return null
      }
    },
    environment: process.env.NODE_ENV || 'production',
    aiAssistantName: async () => {
      const now = Date.now()
      if (_assistantNameCache && now < _assistantNameCache.expiresAt) {
        return _assistantNameCache.value
      }
      const customName = await KVStore.getValue('ai.assistantCustomName')
      const value = (customName && customName.trim()) ? customName : 'AI Assistant'
      _assistantNameCache = { value, expiresAt: now + 60_000 }
      return value
    },
  },

  /**
   * Options for the server-side rendering
   */
  ssr: {
    enabled: false,
    entrypoint: 'inertia/app/ssr.tsx'
  }
})

export default inertiaConfig

declare module '@adonisjs/inertia/types' {
  export interface SharedProps extends InferSharedProps<typeof inertiaConfig> {}
}