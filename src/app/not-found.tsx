import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-forest-green">404</h1>
        <h2 className="text-2xl font-semibold text-charcoal">Page Not Found</h2>
        <p className="text-gray-600 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="inline-block btn-primary"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
