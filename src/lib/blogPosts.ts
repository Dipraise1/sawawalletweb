export type BlogSection = {
  heading?: string
  paragraphs?: string[]
  list?: string[]
  callout?: string
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string // ISO
  readTime: string
  sections: BlogSection[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-to-buy-usdc-in-nigeria',
    title: 'How to Buy USDC in Nigeria: The 2026 Guide',
    excerpt:
      'Bank transfer in, digital dollars out. A practical, hype-free guide to buying USDC in Nigeria — what it costs, how long it takes, and the mistakes to avoid.',
    category: 'Guides',
    date: '2026-07-01',
    readTime: '6 min read',
    sections: [
      {
        paragraphs: [
          'If you earn, save, or get paid in naira, you already know why stablecoins matter: they let you hold value in digital dollars without opening a domiciliary account or queuing for scarce USD. USDC — a fully-reserved stablecoin redeemable 1:1 for US dollars — has become the default way millions of Africans protect their savings and get paid across borders.',
          'This guide walks through buying USDC in Nigeria the practical way, what it actually costs, and the traps that catch first-timers.',
        ],
      },
      {
        heading: 'What you need before you start',
        list: [
          'A wallet that supports USDC — ideally non-custodial, so you hold the keys',
          'A Nigerian bank account or mobile money for the transfer',
          'Identity verification (BVN/NIN-based KYC is standard on regulated rails)',
        ],
        paragraphs: [
          'The wallet choice matters more than people think. With a custodial exchange, the platform holds your crypto and you hold an IOU. With a non-custodial wallet like Sawa, the USDC sits on-chain under keys only you control — the platform facilitates the purchase, but the asset is yours from the second it settles.',
        ],
      },
      {
        heading: 'The steps',
        list: [
          'Download the wallet and create your account (in Sawa, your phone number is your identity — no seed phrase ceremony to start).',
          'Complete identity verification. This unlocks the bank-transfer on-ramp and is required by Nigerian AML rules on any legitimate service.',
          'Enter how much naira you want to convert. You’ll see a full quote: the USDC you’ll receive, the platform fee, and the exchange rate — before you commit.',
          'Make the bank transfer to the account shown. On Sawa’s own rails, your USDC lands in your wallet automatically once the transfer confirms — typically within minutes.',
        ],
      },
      {
        heading: 'What it costs',
        paragraphs: [
          'Expect two components on any honest service: a platform fee (Sawa charges 1%) and an exchange-rate spread. Beware platforms advertising “zero fees” — the fee is almost always hidden in an inflated rate. The number that matters is simple: how much USDC lands per naira you send. Compare that, not the fee line.',
        ],
      },
      {
        heading: 'Mistakes to avoid',
        list: [
          'Buying through P2P chat groups or “agents” on WhatsApp — this is where most scams and frozen accounts happen.',
          'Leaving large balances on custodial exchanges. Not your keys, not your coins.',
          'Ignoring the rate. Always compare the final USDC amount across platforms.',
          'Sending your first large amount without a small test transaction.',
        ],
        callout:
          'Rule of thumb: if a platform can’t show you the exact USDC you’ll receive before you pay, use a different platform.',
      },
    ],
  },
  {
    slug: 'what-is-a-non-custodial-wallet',
    title: 'What Is a Non-Custodial Wallet — and Why Should You Care?',
    excerpt:
      'The single most important word in crypto isn’t “blockchain” — it’s “custody.” Here’s what non-custodial actually means, minus the jargon.',
    category: 'Basics',
    date: '2026-06-24',
    readTime: '5 min read',
    sections: [
      {
        paragraphs: [
          'Every crypto wallet answers one question: who holds the keys? Get that answer wrong and nothing else about the product matters.',
          'A custodial wallet works like a bank: the company holds your crypto and promises to give it back when you ask. A non-custodial wallet works like cash in your hand: cryptographic keys on your device control the money directly, and no company sits between you and your funds.',
        ],
      },
      {
        heading: 'Why custody decides everything',
        paragraphs: [
          'History is blunt about this. When custodial platforms fail — through hacks, fraud, or bankruptcy — users lose funds they thought were theirs. FTX customers weren’t careless people; they just held IOUs instead of assets.',
          'With a non-custodial wallet, a platform failure is an inconvenience, not a catastrophe. Your assets live on a public blockchain under your keys. If the app disappeared tomorrow, you could recover everything from any compatible wallet.',
        ],
      },
      {
        heading: 'The old trade-off: security vs. usability',
        paragraphs: [
          'Non-custodial used to mean scary: 24-word seed phrases written on paper, no password resets, one mistake and your money is gone forever. That trade-off kept most people in custodial apps.',
          'Modern embedded wallets changed the math. Sawa uses Privy’s embedded wallet infrastructure: keys are generated and secured on your device, protected by your login and PIN, with recovery flows that don’t require you to be your own bank vault. You get self-custody without the ceremony.',
        ],
      },
      {
        heading: 'Questions to ask any wallet',
        list: [
          'If this company shut down tomorrow, could I still access my funds? (Non-custodial: yes.)',
          'Can an employee or hacker at the company move my money? (Non-custodial: no.)',
          'Can I export my keys and leave whenever I want? (If not, you’re renting, not owning.)',
        ],
        callout:
          'Not your keys, not your coins — but with the right wallet, holding your keys no longer requires a computer science degree.',
      },
    ],
  },
  {
    slug: 'stablecoins-explained-usdc',
    title: 'Stablecoins 101: Why USDC Feels Like Dollars in Your Pocket',
    excerpt:
      'Digital dollars that move like text messages. How stablecoins work, why USDC is the one to know, and what makes them useful in high-inflation economies.',
    category: 'Basics',
    date: '2026-06-17',
    readTime: '5 min read',
    sections: [
      {
        paragraphs: [
          'Bitcoin proved money could move without banks. But you can’t price rent in an asset that swings 10% in a weekend. Stablecoins solved that: cryptocurrencies pegged to a stable asset — almost always the US dollar — so one coin is always worth one dollar.',
          'For anyone living with a volatile local currency, that’s not a crypto curiosity. It’s a savings account the inflation can’t reach.',
        ],
      },
      {
        heading: 'How USDC keeps its peg',
        paragraphs: [
          'USDC is issued by Circle, a regulated US financial company. For every USDC in circulation, Circle holds one dollar in cash or short-term US Treasuries, verified in monthly attestations by independent accountants. When you hold USDC, you hold a claim on a real dollar — one that happens to move at internet speed.',
          'That’s the key difference from algorithmic stablecoins (like the collapsed UST), which tried to hold their peg with financial engineering instead of actual dollars. Full reserves are boring, and boring is exactly what you want from money.',
        ],
      },
      {
        heading: 'What people actually use it for',
        list: [
          'Savings: holding value in dollars when the local currency is losing ground',
          'Getting paid: freelancers and remote workers invoicing international clients without wire fees or week-long delays',
          'Remittances: sending money home in minutes for cents, instead of 7–10% through legacy corridors',
          'Business: importers paying suppliers across borders at settlement speeds banks can’t match',
        ],
      },
      {
        heading: 'The practical bit',
        paragraphs: [
          'On a fast chain like Solana, sending USDC costs a fraction of a cent and settles in seconds. Wrapped in a wallet like Sawa, the crypto plumbing disappears entirely: you send digital dollars to a phone number, and the person on the other end sees money — quoted in their local currency — not hexadecimal addresses.',
        ],
        callout:
          'Stablecoins are the first crypto product whose pitch needs no ideology: dollars, but faster and cheaper.',
      },
    ],
  },
  {
    slug: 'send-money-across-africa-phone-number',
    title: 'How to Send Money Across Africa with Just a Phone Number',
    excerpt:
      'Cross-border transfers in Africa average 7–8% in fees and days in delays. Stablecoin rails cut that to minutes and cents — here’s how it works in practice.',
    category: 'Guides',
    date: '2026-06-10',
    readTime: '6 min read',
    sections: [
      {
        paragraphs: [
          'Sending money between African countries is famously harder than sending it to London or New York. Fragmented banking systems, scarce correspondent relationships, and double currency conversions mean a Lagos-to-Accra transfer can cost more than the bus ticket between them.',
          'Stablecoin rails collapse that entire stack: value moves on-chain in seconds, and only the first and last steps — local currency in, local currency out — touch the legacy system.',
        ],
      },
      {
        heading: 'The old way vs. the new way',
        paragraphs: [
          'A traditional remittance hops through multiple intermediaries, each taking a cut and adding delay: your bank, a correspondent bank, an FX desk, the recipient’s bank. The World Bank puts average Sub-Saharan remittance costs around 7–8% — the highest of any region on earth.',
          'The stablecoin route has three steps: convert local currency to USDC, send the USDC (seconds, fractions of a cent), and the recipient converts to their local currency or simply keeps digital dollars. Total cost on honest rails: typically 1–3% end to end.',
        ],
      },
      {
        heading: 'Where phone numbers come in',
        paragraphs: [
          'The last usability wall was the address. Crypto addresses look like `7xKXtg2CW87...` — one typo and money is gone forever. It’s the single biggest reason people who need these rails most never use them.',
          'Sawa’s answer: your phone number is your address. Pick a contact, type an amount in naira, cedis, or shillings, and send. Under the hood it’s USDC settling on-chain; on the surface it’s as familiar as airtime. If your recipient doesn’t have Sawa yet, the money waits for them to claim it when they sign up.',
        ],
      },
      {
        heading: 'A real example',
        list: [
          'Ada in Lagos owes her supplier in Accra ₵2,000.',
          'She buys the equivalent USDC with a naira bank transfer (1% + spread, quoted upfront).',
          'She sends it to the supplier’s phone number. Settlement: seconds.',
          'The supplier cashes out to mobile money in cedis, or keeps the USDC as dollar savings.',
        ],
        callout:
          'Total time: minutes. Total cost: a fraction of the legacy corridor. No forms, no queues, no “allow 3–5 business days.”',
      },
    ],
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}
