import { useState } from 'react'
import ChatButton from '~/components/chat/ChatButton'
import ChatModal from '~/components/chat/ChatModal'
import useServiceInstalledStatus from '~/hooks/useServiceInstalledStatus'
import { SERVICE_NAMES } from '../../constants/service_names'
/** Compatibility for upstream pages; global shell is an Inertia layout. */
export default function AppLayout({ children }: { children: React.ReactNode; compact?: boolean }) {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const aiAssistantInstalled = useServiceInstalledStatus(SERVICE_NAMES.OLLAMA)
  return (
    <>
      {children}
      {aiAssistantInstalled && (
        <>
          <ChatButton onClick={() => setIsChatOpen(true)} />
          <ChatModal open={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </>
      )}
    </>
  )
}
