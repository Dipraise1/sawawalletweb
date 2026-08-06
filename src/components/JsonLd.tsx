import { FAQ_ITEMS } from '@/lib/faq'

export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://sawawallet.org/#organization',
        name: 'Sawa Wallet',
        url: 'https://sawawallet.org',
        logo: {
          '@type': 'ImageObject',
          url: 'https://sawawallet.org/logo.png',
          width: 512,
          height: 512,
        },
        sameAs: [
          'https://x.com/sawawallet',
          'https://www.tiktok.com/@sawa.wallet',
          'https://linkedin.com/company/sawawallet',
          'https://discord.gg/TbvR5UcG',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'support@sawawallet.org',
          contactType: 'customer support',
          areaServed: ['NG', 'KE', 'GH', 'ZA', 'RW', 'UG', 'TZ', 'ZM'],
          availableLanguage: ['English'],
        },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Sawa Wallet',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Android, iOS',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description:
          'Send and receive crypto instantly using just a phone number. Sawa Wallet is a multi-chain, non-custodial wallet supporting USDC, USDT, SOL, ETH, SUI and Bitcoin across Solana, Ethereum, Base, Polygon, BNB Chain, Arbitrum, Optimism and Sui. Buy crypto with a bank transfer, cash out to your bank or mobile money via our own rails, swap tokens in-app, pay bills with Sawa Pay, and use it in 7 languages.',
        featureList: [
          'Send crypto with a phone number',
          'Multi-chain wallet (Solana, Ethereum, Base, Polygon, BNB Chain, Arbitrum, Optimism, Sui)',
          'Bitcoin support',
          'Buy crypto with a local bank transfer',
          'Cash out to bank or mobile money',
          'In-app token swaps at the best rates, including cross-chain',
          'Sawa Pay — bills, airtime, data, electricity & cable',
          'Merchant payment links with QR checkout',
          'Virtual Visa cards (rolling out soon)',
          'Built-in SOL staking',
          'On-chain escrow for freelance and high-value deals',
          'Tokenized stocks on Solana (xStocks by Backed Finance)',
          'Prediction markets on real-world events',
          '7 languages and 19 display currencies',
          'Non-custodial — you own your keys',
        ],
        // aggregateRating is intentionally omitted until real review data is available
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://sawawallet.org/#faq',
        mainEntity: FAQ_ITEMS.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
      {
        '@type': 'WebSite',
        '@id': 'https://sawawallet.org/#website',
        url: 'https://sawawallet.org',
        name: 'Sawa Wallet',
        description: 'Crypto for People, Not Addresses',
        publisher: {
          '@id': 'https://sawawallet.org/#organization',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://sawawallet.org/?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'WebPage',
        '@id': 'https://sawawallet.org/#webpage',
        url: 'https://sawawallet.org',
        name: 'Sawa Wallet - Send Crypto with Just a Phone Number',
        isPartOf: { '@id': 'https://sawawallet.org/#website' },
        about: { '@id': 'https://sawawallet.org/#organization' },
        description:
          'The human-first crypto wallet. Send USDC and other assets instantly to anyone using just their phone number. Non-custodial, multi-chain.',
        inLanguage: 'en-US',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
