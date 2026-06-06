// Single source of truth for the FAQ — rendered on the page AND emitted as
// FAQPage structured data, so the two never drift (a Google requirement for
// FAQ rich results: the schema must match the visible answers).

export interface FaqItem {
  question: string
  answer: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Is Sawa Wallet free to use?',
    answer:
      'Yes — downloading and using Sawa Wallet is free. You only pay a small, transparent fee when you convert between crypto and your local currency. No monthly fees, no hidden charges.',
  },
  {
    question: 'Which countries does Sawa Wallet support?',
    answer:
      'Sawa works across 50+ countries, with deep local support in Nigeria, Kenya, Ghana, South Africa, Uganda, Tanzania, Zambia and more — including cash-outs to local banks and mobile money in your own currency.',
  },
  {
    question: 'Is Sawa Wallet safe and non-custodial?',
    answer:
      'Yes. Sawa is non-custodial, which means you own your private keys and your funds — not us. Optional identity verification unlocks higher limits whenever you need them.',
  },
  {
    question: 'Which cryptocurrencies and blockchains does Sawa support?',
    answer:
      'You can hold and send USDC, USDT, SOL, ETH and Bitcoin across Solana, Ethereum, Base, Polygon and BNB Chain — all from a single wallet.',
  },
  {
    question: 'Can I buy crypto and cash out to my bank with Sawa?',
    answer:
      'Yes. Buy crypto instantly with a local bank transfer, and cash out straight to your bank account or mobile money. Sawa runs its own rails, so conversions are fast and fairly priced with no third-party middleman.',
  },
  {
    question: 'What is Sawa Pay?',
    answer:
      'Sawa Pay lets you pay bills, buy airtime and data, and settle electricity and cable TV — directly from your crypto balance, without needing any extra apps.',
  },
  {
    question: 'How do I send crypto using just a phone number?',
    answer:
      'Pick a contact, enter an amount, and send. Sawa maps phone numbers to wallets behind the scenes, so you never copy a long, scary address — sending crypto feels as easy as sending a text.',
  },
  {
    question: 'What is the Sawa Toolkit?',
    answer:
      'An open-source collection of developer primitives extracted from our production app: @sawa/phone-resolver (phone-to-Solana via Privy) and @sawa/compliance-kit (KYC/AML for 10+ African countries). The ramp/treasury service remains private/internal. Designed for Solana Foundation Developer Tooling grants and other teams building consumer-first crypto apps in Africa. See https://github.com/Dipraise1/sawa-toolkit.',
  },
]
