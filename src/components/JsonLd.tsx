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
          url: 'https://sawawallet.com/logo.png', // Fallback or actual logo URL if available
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
          areaServed: ['NG', 'KE', 'GH', 'ZA', 'RW', 'UG'], // Major African markets
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
        description: 'Send and receive crypto instantly using just a phone number. Sawa Wallet is the multi-chain, non-custodial wallet built for real human connections.',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '1250',
        },
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
