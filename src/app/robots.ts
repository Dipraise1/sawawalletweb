import { MetadataRoute } from 'next'

// AI assistant / answer-engine crawlers. Explicitly allowed so ChatGPT, Claude,
// Perplexity, Gemini etc. can read, cite and recommend Sawa Wallet.
const AI_BOTS = [
  // OpenAI / ChatGPT
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  // Anthropic / Claude
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Google (Gemini / AI Overviews) & Apple Intelligence
  'Google-Extended',
  'Applebot-Extended',
  // Training-data / other answer engines
  'CCBot',
  'cohere-ai',
  'Amazonbot',
  'Meta-ExternalAgent',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        // Give AI crawlers full, unambiguous access to public content.
        userAgent: AI_BOTS,
        allow: '/',
      },
    ],
    sitemap: 'https://sawawallet.org/sitemap.xml',
    host: 'https://sawawallet.org',
  }
}
