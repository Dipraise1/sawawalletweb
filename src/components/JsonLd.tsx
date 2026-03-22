export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://sawawallet.com/#organization',
        name: 'Sawa Wallet',
        url: 'https://sawawallet.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://sawawallet.com/logo.png',
          width: 512,
          height: 512,
        },
        sameAs: [
          'https://twitter.com/sawawallet',
          'https://linkedin.com/company/sawawallet',
          'https://discord.gg/TbvR5UcG',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'support@sawawallet.com',
          contactType: 'customer support',
          areaServed: ['NG', 'KE', 'GH', 'ZA', 'RW', 'UG'],
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
          'Send and receive crypto instantly using just a phone number. Sawa Wallet is the multi-chain, non-custodial wallet built for real human connections.',
        // aggregateRating is intentionally omitted until real review data is available
      },
      {
        '@type': 'WebSite',
        '@id': 'https://sawawallet.com/#website',
        url: 'https://sawawallet.com',
        name: 'Sawa Wallet',
        description: 'Crypto for People, Not Addresses',
        publisher: {
          '@id': 'https://sawawallet.com/#organization',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://sawawallet.com/?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'WebPage',
        '@id': 'https://sawawallet.com/#webpage',
        url: 'https://sawawallet.com',
        name: 'Sawa Wallet - Send Crypto with Just a Phone Number',
        isPartOf: { '@id': 'https://sawawallet.com/#website' },
        about: { '@id': 'https://sawawallet.com/#organization' },
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
