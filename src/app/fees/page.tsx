import Link from 'next/link'

export const metadata = {
  title: 'Fees & Limits',
  description:
    'Sawa Wallet pricing, in plain language: free to receive, 0.5% to send, 1% + spread to buy or cash out. Every fee is shown before you confirm.',
  alternates: {
    canonical: 'https://sawawallet.org/fees',
  },
  openGraph: {
    title: 'Fees & Limits - Sawa Wallet',
    description:
      'No hidden fees, ever. See exactly what Sawa charges for sending, buying, and cashing out crypto.',
    url: 'https://sawawallet.org/fees',
  },
  robots: { index: true, follow: true },
}

const FEES = [
  {
    action: 'Receive money',
    fee: 'Free',
    detail:
      'Receiving crypto from another Sawa user or any external wallet costs nothing. Always.',
    highlight: true,
  },
  {
    action: 'Send to a Sawa user',
    fee: '0.5%',
    detail:
      'Send to any phone number on Sawa. The fee is calculated on the amount and shown before you hit confirm.',
  },
  {
    action: 'Buy crypto (bank transfer)',
    fee: '1% + spread',
    detail:
      'Our on-ramp charges a 1% platform fee plus a small exchange-rate spread. The exact rate and total are quoted upfront — what you see is what you pay.',
  },
  {
    action: 'Cash out to bank / mobile money',
    fee: '1% + spread',
    detail:
      'Same transparent structure on the way out: 1% platform fee plus the quoted spread, with your payout amount locked in before you confirm.',
  },
  {
    action: 'Send to an external wallet',
    fee: 'Network fee',
    detail:
      'Withdrawing to a wallet outside Sawa costs only the blockchain network fee, passed through at cost. On Solana this is typically a fraction of a cent.',
  },
  {
    action: 'Bills & airtime',
    fee: 'Small service fee',
    detail:
      'Pay bills and buy airtime with your balance. Any service fee is itemized in the quote before you pay.',
  },
]

const PRINCIPLES = [
  {
    title: 'Quoted before you confirm',
    body: 'Every transaction shows the full breakdown — amount, fee, rate, and what the recipient gets — before you approve it. No surprises on the receipt.',
  },
  {
    title: 'No spread games',
    body: 'Our exchange rate is the live market rate plus a disclosed spread. We don’t inflate rates quietly and call the transaction "zero fee".',
  },
  {
    title: 'No account fees',
    body: 'No monthly charges, no minimum balance, no dormancy fees, no charge to download or hold.',
  },
]

export default function FeesPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        <div
          className="absolute -top-32 right-[10%] w-[500px] h-[400px] rounded-full bg-luxury-gold/[0.07] blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="container-custom relative z-10 pt-24 pb-14 sm:pt-32 sm:pb-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-luxury-gold mb-6">
              Fees &amp; limits
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-semibold text-charcoal leading-[1.05] tracking-tight mb-8">
              Honest pricing,
              <br />
              <span className="text-gradient-green italic">shown upfront.</span>
            </h1>
            <p className="text-body-lg text-gray-600 max-w-2xl">
              You should never have to guess what a transaction costs. Every fee below is
              quoted in the app before you confirm — the number on the screen is the number
              you pay.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Fee table ===== */}
      <section className="pb-8">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden divide-y divide-gray-100">
              {FEES.map((row, i) => (
                <div
                  key={i}
                  className={`grid sm:grid-cols-[1fr_auto] gap-x-8 gap-y-2 p-6 sm:p-8 ${
                    row.highlight ? 'bg-forest-green/[0.04]' : ''
                  }`}
                >
                  <div className="order-2 sm:order-1">
                    <h2 className="font-bold text-charcoal mb-1.5">{row.action}</h2>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
                      {row.detail}
                    </p>
                  </div>
                  <div className="order-1 sm:order-2 sm:text-right">
                    <span
                      className={`font-display text-2xl sm:text-3xl font-semibold leading-none ${
                        row.highlight ? 'text-forest-green' : 'text-charcoal'
                      }`}
                    >
                      {row.fee}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4 leading-relaxed">
              Rates current as of July 2026 and may be adjusted; the quote in the app at the
              time of your transaction is always authoritative. Blockchain network fees are
              set by the network, not by Sawa.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Principles ===== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-luxury-gold mb-4">
              Our pricing principles
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal leading-tight">
              Three promises we won&apos;t break
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            {PRINCIPLES.map((p, i) => (
              <div
                key={i}
                className="rounded-3xl bg-white border border-gray-100 p-8 shadow-sm hover:shadow-md hover:border-luxury-gold/30 transition-all"
              >
                <div className="font-display text-4xl font-semibold text-luxury-gold/30 leading-none mb-5">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-bold text-charcoal mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Limits note ===== */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="max-w-4xl rounded-3xl bg-charcoal text-white p-8 sm:p-12 relative overflow-hidden">
            <div
              className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-luxury-gold/10 blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">
                Transaction limits
              </h2>
              <p className="text-gray-300 leading-relaxed max-w-2xl mb-6">
                Buy and cash-out limits depend on your verification level and local
                regulations, and are shown in the app when you start a transaction.
                Completing identity verification unlocks higher limits. Sending and
                receiving crypto between wallets has no limit from Sawa.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Ask us about limits
                </Link>
                <Link
                  href="/aml-policy"
                  className="inline-flex items-center px-5 py-2.5 rounded-2xl border border-white/15 text-sm font-semibold hover:bg-white/5 transition-colors"
                >
                  Why we verify identity
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
