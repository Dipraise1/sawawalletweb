import { BitcoinMark, EthereumMark, LetterMark, SolanaMark } from '@/components/icons/BrandMarks'
import './desktop-infrastructure.css'

const INFRASTRUCTURE: { name: string; Mark?: (props: { className?: string }) => JSX.Element }[] = [
  { name: 'Solana', Mark: SolanaMark },
  { name: 'Ethereum', Mark: EthereumMark },
  { name: 'Bitcoin', Mark: BitcoinMark },
  { name: 'Privy' },
  { name: 'Tron' },
  { name: 'Meld' },
  { name: 'Paystack' },
  { name: 'Helius' },
]

export default function DesktopInfrastructure() {
  return (
    <section className="sawa-infrastructure" aria-labelledby="sawa-infrastructure-title">
      <div className="container-custom sawa-infrastructure-inner">
        <div className="sawa-infrastructure-heading">
          <div>
            <p>THE WORK BEHIND THE SIMPLE</p>
            <h2 id="sawa-infrastructure-title">A familiar way to send.<br /><span>Built for the real world.</span></h2>
          </div>
          <p>Connecting everyday payments to the networks and services that make them possible.</p>
        </div>
        <ul className="sawa-infrastructure-list" aria-label="Networks and services behind Sawa">
          {INFRASTRUCTURE.map(({ name, Mark }) => (
            <li key={name}>
              {Mark ? <Mark className="sawa-infrastructure-mark" /> : <LetterMark letter={name[0]} className="sawa-infrastructure-mark sawa-infrastructure-letter" />}
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
