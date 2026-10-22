import HeroScrollPhone from '@/components/HeroScrollPhone'
import './hero.css'

function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function HeroSection() {
  return (
    <section className="sawa-hero" aria-labelledby="hero-heading">
      <div className="container-custom">
        <div className="sawa-hero-grid">
          <div className="sawa-hero-copy">
            <p className="sawa-hero-eyebrow reveal">
              <span aria-hidden="true" /> A little more human. A lot more Sawa.
            </p>
            <h1 id="hero-heading" className="sawa-hero-heading reveal reveal-1">
              Send money.<br />
              <span>Like a text.</span>
            </h1>
            <p className="sawa-hero-description reveal reveal-2">
              From your wallet to your people. Send crypto with just a phone
              number, and keep your everyday money in one simple app.
            </p>

            <div className="sawa-hero-downloads reveal reveal-2">
              <a
                href="https://testflight.apple.com/join/5CT6rA8q"
                target="_blank"
                rel="noopener noreferrer"
                className="sawa-store-link sawa-store-link-primary"
                aria-label="Join the Sawa Wallet iOS beta on TestFlight"
              >
                <svg width="25" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <span><small>Join the beta on</small><strong>iOS · TestFlight</strong></span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.sawawallet.app"
                target="_blank"
                rel="noopener noreferrer"
                className="sawa-store-link sawa-store-link-secondary"
                aria-label="Download Sawa Wallet for Android on Google Play"
              >
                <svg width="24" height="27" viewBox="0 0 24 27" fill="none" aria-hidden="true">
                  <path d="m2 1 13 12.5L2 26V1Z" fill="#4285F4" />
                  <path d="m2 1 16 9-3 3.5L2 1Z" fill="#34A853" />
                  <path d="m2 26 16-9-3-3.5L2 26Z" fill="#EA4335" />
                  <path d="m18 10 4.5 2.5a1.1 1.1 0 0 1 0 2L18 17l-3-3.5 3-3.5Z" fill="#FBBC04" />
                </svg>
                <span><small>Get it on</small><strong>Google Play</strong></span>
              </a>
            </div>

            <div className="sawa-hero-reassurance reveal reveal-3">
              <span>
                <svg width="16" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" strokeLinejoin="round" />
                  <path d="m8 12 3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Your keys. Your control.
              </span>
              <a href="#how-it-works">See how it works <Arrow /></a>
            </div>
          </div>

          <div className="sawa-hero-visual reveal reveal-2">
            <div className="sawa-hero-arch" aria-hidden="true">
              <div className="sawa-hero-orbit sawa-hero-orbit-one" />
              <div className="sawa-hero-orbit sawa-hero-orbit-two" />
              <span className="sawa-hero-spark">✳</span>
            </div>
            <HeroScrollPhone className="sawa-hero-phone" />
            <div className="sawa-contact-note">
              <span className="sawa-contact-avatar" aria-hidden="true">M</span>
              <div><small>Someone you know</small><strong>Mom, in your contacts</strong></div>
              <span className="sawa-contact-check" aria-hidden="true">✓</span>
            </div>
            <div className="sawa-message-note">
              <span className="sawa-message-icon" aria-hidden="true"><Arrow /></span>
              <div><strong>A phone number.<br />And you’re connected.</strong><p>Money made personal.</p></div>
            </div>
            <p className="sawa-hero-visual-caption">YOUR WORLD. IN ONE WALLET.</p>
          </div>
        </div>
        <div className="sawa-hero-footer reveal reveal-3">
          <p>Less friction.<br /><span>More living.</span></p>
          <ul aria-label="Sawa Wallet features">
            <li><span>01</span> Send to a phone number</li>
            <li><span>02</span> Hold your favourite crypto</li>
            <li><span>03</span> Pay for the everyday</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
