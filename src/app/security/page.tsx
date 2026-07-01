import Link from 'next/link'

export const metadata = {
  title: 'Security',
  description:
    'How Sawa Wallet protects your money: non-custodial keys, server-side PIN lockouts, screenshot protection, and a responsible disclosure program.',
  alternates: {
    canonical: 'https://sawawallet.org/security',
  },
  openGraph: {
    title: 'Security - Sawa Wallet',
    description:
      'Non-custodial by design. Your keys never leave your control — here is exactly how we keep it that way.',
    url: 'https://sawawallet.org/security',
  },
  robots: { index: true, follow: true },
}

const CANT_DO = [
  {
    title: 'We can’t move your money',
    body: 'Your private keys are generated and secured on your device through Privy embedded wallets. Sawa’s servers never see them — so no employee, hacker, or court order pointed at us can transfer your funds.',
  },
  {
    title: 'We can’t read your seed phrase',
    body: 'Your recovery phrase is displayed once, on your device, behind PIN and screenshot protection. It is never transmitted to or stored on our servers.',
  },
  {
    title: 'We can’t freeze your wallet',
    body: 'Because the wallet is non-custodial, your assets live on-chain under your keys. Even if Sawa disappeared tomorrow, you could export your keys and access everything from any standard wallet.',
  },
]

const PROTECTIONS = [
  {
    k: '01',
    title: 'Server-authoritative PIN',
    body: 'Your transaction PIN is verified against a salted hash on our servers — never stored in plain text, never checkable offline by an attacker. Repeated wrong guesses trigger an escalating lockout, and your PIN protects your account across every device you sign in on.',
  },
  {
    k: '02',
    title: 'Screenshot & screen-recording protection',
    body: 'Screens that display your seed phrase or other secrets block screenshots and screen recording on Android, and blank themselves in the app switcher. What’s secret stays on your screen only.',
  },
  {
    k: '03',
    title: 'Per-user authenticated API',
    body: 'Every request to our backend is authenticated with a short-lived cryptographic token tied to your login. One user can never read or act on another user’s data.',
  },
  {
    k: '04',
    title: 'Hardened build pipeline',
    body: 'Production builds strip debug logging so codes, tokens, and personal data never leak into device logs. Sensitive values are redacted at the source.',
  },
  {
    k: '05',
    title: 'Rate limiting & abuse monitoring',
    body: 'Login, OTP, and transaction endpoints are rate-limited and monitored, so brute-force and enumeration attacks hit a wall long before they hit you.',
  },
  {
    k: '06',
    title: 'Encrypted in transit',
    body: 'All traffic between your device and our servers is encrypted with TLS. Webhooks and internal services authenticate each other with signed secrets.',
  },
]

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        {/* soft radial atmosphere */}
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-forest-green/[0.06] blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-20 right-[8%] w-64 h-64 rounded-full bg-luxury-gold/[0.08] blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="container-custom relative z-10 pt-24 pb-16 sm:pt-32 sm:pb-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-luxury-gold mb-6">
              Security at Sawa
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-semibold text-charcoal leading-[1.05] tracking-tight mb-8">
              Your keys.{' '}
              <span className="text-gradient-green italic">Your money.</span>
              <br />
              Our obsession.
            </h1>
            <p className="text-body-lg text-gray-600 max-w-2xl">
              Sawa is non-custodial by design. That isn&apos;t a marketing word — it&apos;s an
              architecture decision that means we <em>couldn&apos;t</em> touch your funds even
              if we wanted to. Here is exactly how it works.
            </p>
          </div>
        </div>
      </section>

      {/* ===== What we can't do ===== */}
      <section className="section-padding bg-charcoal text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
          aria-hidden="true"
        />
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-luxury-gold mb-4">
              The honest list
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">
              Three things Sawa <span className="italic text-luxury-gold">cannot</span> do
            </h2>
            <p className="text-gray-400 mt-4 leading-relaxed">
              The strongest security promise isn&apos;t what a company says it won&apos;t do —
              it&apos;s what the architecture makes impossible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {CANT_DO.map((item, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:border-luxury-gold/30 transition-colors"
              >
                <div className="font-display text-5xl font-semibold text-luxury-gold/25 leading-none mb-6">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== How we protect you ===== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-luxury-gold mb-4">
              Defense in depth
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal leading-tight">
              What we actively protect
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl">
            {PROTECTIONS.map((p) => (
              <div key={p.k} className="flex gap-5">
                <div className="font-display text-sm font-semibold text-luxury-gold pt-1 shrink-0">
                  {p.k}
                </div>
                <div className="border-l border-luxury-gold/25 pl-5">
                  <h3 className="font-bold text-charcoal mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Your part ===== */}
      <section className="pb-8">
        <div className="container-custom">
          <div className="max-w-5xl rounded-3xl bg-sand border border-luxury-gold/20 p-8 sm:p-12">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-charcoal mb-4">
              Non-custodial means you hold real power — use it well
            </h2>
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 text-sm text-gray-700">
              <li className="flex gap-2"><span className="text-forest-green font-bold">→</span> Write your recovery phrase on paper. Never screenshot it, never paste it anywhere.</li>
              <li className="flex gap-2"><span className="text-forest-green font-bold">→</span> Sawa staff will never ask for your seed phrase, PIN, or OTP. Anyone who does is a scammer.</li>
              <li className="flex gap-2"><span className="text-forest-green font-bold">→</span> Use a PIN you don&apos;t use anywhere else, and enable your device biometrics.</li>
              <li className="flex gap-2"><span className="text-forest-green font-bold">→</span> Only download Sawa from the official app stores or links on sawawallet.org.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Responsible disclosure ===== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-luxury-gold mb-4">
              Responsible disclosure
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal mb-6">
              Found something? Tell us first.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              We welcome good-faith security research. If you believe you&apos;ve found a
              vulnerability in Sawa Wallet, our website, or our APIs, email us with enough
              detail to reproduce it. We&apos;ll acknowledge within 72 hours, keep you updated
              as we fix it, and credit you if you&apos;d like. Please don&apos;t access other
              users&apos; data, disrupt the service, or disclose publicly before we&apos;ve
              had a reasonable chance to remediate.
            </p>
            <a
              href="mailto:security@sawawallet.org"
              className="btn-primary inline-flex"
            >
              security@sawawallet.org
            </a>
            <p className="text-xs text-gray-400 mt-8">
              Questions about privacy instead? See our{' '}
              <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-gray-600">
                Privacy Policy
              </Link>{' '}
              or{' '}
              <Link href="/aml-policy" className="underline underline-offset-2 hover:text-gray-600">
                AML statement
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
