import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request Data Deletion - Sawa Wallet',
  description: 'Request deletion of your personal data from Sawa Wallet. Learn about what data will be deleted and submit your deletion request.',
}

export default function DeleteDataLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
