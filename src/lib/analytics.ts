// Lightweight wrapper around Google Analytics' gtag. Safe to call anywhere —
// it no-ops on the server or before GA has loaded, so components don't need to
// know whether analytics is configured.
export function trackEvent(name: string, params?: Record<string, string | number | boolean>) {
  if (typeof window !== 'undefined' && typeof (window as { gtag?: (...a: unknown[]) => void }).gtag === 'function') {
    (window as unknown as { gtag: (...a: unknown[]) => void }).gtag('event', name, params || {})
  }
}
