import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80 border-t border-gray-800 py-8">
      <div className="container-custom px-4 text-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-4 text-xs font-medium">
          <Link href="/privacy-policy" className="hover:text-luxury-gold transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-luxury-gold transition-colors">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:text-luxury-gold transition-colors">
            Contact
          </Link>
          <Link href="/delete-data" className="hover:text-luxury-gold transition-colors">
            Delete My Data
          </Link>
          <a href="mailto:support@sawawallet.com" className="hover:text-luxury-gold transition-colors">
            Support
          </a>
        </div>
        <p className="text-[10px] text-gray-500">
          © {new Date().getFullYear()} Sawa Wallet. Made with for Africa.
        </p>
      </div>
    </footer>
  )
}