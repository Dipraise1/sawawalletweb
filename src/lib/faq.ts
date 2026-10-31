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
      'Sending and receiving crypto works anywhere — transfers settle on-chain, so all your recipient needs is a phone. Buying with a bank transfer and cashing out to a local bank are live in Nigeria (NGN) today; other corridors are in build. The app displays balances in 19 local currencies and 7 languages wherever you are.',
  },
  {
    question: 'Is Sawa Wallet safe and non-custodial?',
    answer:
      'Yes. Sawa is non-custodial, which means you own your private keys and your funds — not us. Optional identity verification unlocks higher limits whenever you need them.',
  },
  {
    question: 'Which cryptocurrencies and blockchains does Sawa support?',
    answer:
      'You can hold and send USDC, USDT, SOL, ETH, SUI and Bitcoin across Solana, Ethereum, Base, Polygon, BNB Chain, Arbitrum, Optimism, Hyperliquid, Robinhood Chain and Sui — all from a single wallet with one login.',
  },
  {
    question: 'Can I swap tokens inside Sawa Wallet?',
    answer:
      'Yes. Sawa has built-in swaps at the best available rates on Solana and EVM chains, including cross-chain swaps — trade tokens in seconds without leaving the app or using an exchange.',
  },
  {
    question: 'Can I buy US stocks with Sawa Wallet?',
    answer:
      'Yes. Sawa offers over 50 US stocks and ETFs — including Apple, Tesla, NVIDIA and the S&P 500 — as tokenized stocks (xStocks issued by Backed Finance) on Solana, bought with USDC from about $1. They track the share price but carry no voting or shareholder rights, and they are not available to US persons.',
  },
  {
    question: 'Can I save in gold or dollars with Sawa?',
    answer:
      'Yes. You can hold PAXG, a Paxos token backed by one troy ounce of physical gold, and USDY, an Ondo Finance token backed by short-term US Treasuries whose value grows as interest accrues. USDY is not a stablecoin or a bank deposit, and it is not available to US persons. Both carry a 0.5% platform fee.',
  },
  {
    question: 'How does Sawa protect me from crypto scams?',
    answer:
      'Before you send, Sawa checks the address against the wallets you already pay and warns you if it only looks familiar — a common trick called address poisoning — and it blocks sends to token contract addresses, where money would be lost. Before you buy a token, Sawa flags red flags such as fake copies of real tokens, creators who can freeze or mint more of it, and too little liquidity to sell.',
  },
  {
    question: 'Does Sawa Wallet offer virtual cards?',
    answer:
      'Virtual USD Mastercard cards are rolling out — create a card from your USDC balance, fund it, reveal details securely, and freeze or unfreeze it anytime. Cards require identity verification.',
  },
  {
    question: 'What languages does Sawa Wallet support?',
    answer:
      'Sawa speaks 7 languages — English, Nigerian Pidgin, Yoruba, Igbo, Hausa, French and Swahili — and can display your balance in 19 local currencies, including Naira, Cedi, Shilling and Rand.',
  },
  {
    question: 'Can I buy crypto and cash out to my bank with Sawa?',
    answer:
      'Yes, in Nigeria today — buy with a local bank transfer and cash out straight to your bank account. Sawa runs its own ramp, so the order engine, treasury and rates are ours; the bank leg is executed by our licensed payment partner, Korapay. Other countries are not open yet.',
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
