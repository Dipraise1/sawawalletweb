'use client'

import { useState } from 'react'
import './desktop-story.css'

const STEPS = [
  { title: 'Choose your person.', description: 'Find a familiar name in your contacts. A phone number is all you need.', label: 'Your people, already here.' },
  { title: 'Make it personal.', description: 'Choose an amount and add a note. For lunch, for home, or just because.', label: 'A little something from you.' },
  { title: 'Review. Then send.', description: 'Check the recipient and transfer details before you send. You’re in control.', label: 'One last look. Then it’s theirs.' },
]

function Arrow({ back = false }: { back?: boolean }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" style={back ? { transform: 'rotate(180deg)' } : undefined}><path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function Check() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m5 12 4 4L19 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export default function DesktopStorySection() {
  const [step, setStep] = useState(0)

  return (
    <section className="sawa-story-desktop" aria-labelledby="sawa-story-heading">
      <div className="container-custom sawa-story-container">
        <header className="sawa-story-header">
          <div>
            <p className="sawa-story-eyebrow">THE SAWA WAY</p>
            <h2 id="sawa-story-heading">A familiar face.<br /><span>A simpler way to send.</span></h2>
          </div>
          <p>Money is personal. Sending it should feel that way too. From your contacts to their wallet, in a few simple steps.</p>
        </header>

        <div className="sawa-story-layout">
          <div className="sawa-story-steps">
            <p className="sawa-story-step-label">FROM “HEY” TO “SENT”</p>
            <div className="sawa-story-step-buttons" role="group" aria-label="Explore the sending steps">
              {STEPS.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  className="sawa-story-step"
                  aria-pressed={step === index}
                  aria-controls="sawa-story-preview"
                  onClick={() => setStep(index)}
                >
                  <span className="sawa-story-step-number">0{index + 1}</span>
                  <span className="sawa-story-step-copy"><strong>{item.title}</strong><span>{item.description}</span></span>
                  <Arrow />
                </button>
              ))}
            </div>
            <div className="sawa-story-signoff"><span aria-hidden="true"><Check /></span>Your people. Your money. Your move.</div>
          </div>

          <div className="sawa-story-stage">
            <div className="sawa-story-contour sawa-story-contour-one" aria-hidden="true" />
            <div className="sawa-story-contour sawa-story-contour-two" aria-hidden="true" />
            <div className="sawa-story-stage-top"><span>A LITTLE CLOSER, WITH SAWA</span><span>0{step + 1} / 03</span></div>
            <div id="sawa-story-preview" className="sawa-story-preview" role="region" aria-label="Illustrative Sawa transfer" aria-live="polite" aria-atomic="true">
              <div className="sawa-story-preview-content" key={step}>
                <div className="sawa-story-app-heading"><span>Sawa</span><span>Send with a phone number</span></div>
                {step === 0 && (
                  <>
                    <h3>Who’s it for?</h3>
                    <p className="sawa-story-app-description">Good things start with someone you know.</p>
                    <div className="sawa-story-search"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="10" cy="10" r="6" /><path d="m15 15 5 5" strokeLinecap="round" /></svg>Name or phone number</div>
                    <p className="sawa-story-contact-label">YOUR CONTACTS</p>
                    <div className="sawa-story-contact sawa-story-contact-selected"><span className="sawa-story-avatar">M</span><div><strong>Mom</strong><span>Saved in your contacts</span></div><span className="sawa-story-selected-check"><Check /></span></div>
                    <div className="sawa-story-contact"><span className="sawa-story-avatar sawa-story-avatar-sage">A</span><div><strong>Ada</strong><span>Saved in your contacts</span></div></div>
                    <div className="sawa-story-contact"><span className="sawa-story-avatar sawa-story-avatar-lilac">D</span><div><strong>David</strong><span>Saved in your contacts</span></div></div>
                  </>
                )}
                {step === 1 && (
                  <>
                    <h3>For the little things.</h3>
                    <p className="sawa-story-app-description">A little support. A lot of love.</p>
                    <div className="sawa-story-recipient"><span className="sawa-story-avatar">M</span><div><span>Sending to</span><strong>Mom</strong></div><Check /></div>
                    <div className="sawa-story-amount"><span>YOU SEND</span><p>50<span>USDC</span></p></div>
                    <div className="sawa-story-note"><span>A NOTE FOR MOM</span><p>Something for the weekend ♡</p></div>
                  </>
                )}
                {step === 2 && (
                  <>
                    <h3>Ready when you are.</h3>
                    <p className="sawa-story-app-description">The right person. The right amount.</p>
                    <div className="sawa-story-review-recipient"><span className="sawa-story-avatar">M</span><strong>50 <span>USDC</span></strong><p>To Mom · From your contacts</p></div>
                    <dl className="sawa-story-review-details"><div><dt>Recipient</dt><dd>Mom</dd></div><div><dt>Your note</dt><dd>For the weekend ♡</dd></div></dl>
                    <p className="sawa-story-review-help"><Check />Review fees and details in the app before sending.</p>
                  </>
                )}
              </div>
            </div>
            <div className="sawa-story-stage-bottom"><p>{STEPS[step].label}</p><span>ILLUSTRATIVE PREVIEW</span></div>
          </div>
        </div>
        <footer className="sawa-story-footer"><p>Less copying. <span>More connecting.</span></p><a href="#download">Find your people on Sawa <Arrow /></a></footer>
      </div>
    </section>
  )
}
