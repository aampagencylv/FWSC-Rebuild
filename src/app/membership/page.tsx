'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import styles from './membership.module.css'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

const TIERS = [
  {
    id: 'skipper',
    name: 'Skipper',
    price: 350,
    fleetRange: '1–5 vessels',
    benefits: [
      'Directory listing',
      'Safety framework access',
      'Advocacy participation',
    ],
  },
  {
    id: 'fleet',
    name: 'Fleet',
    price: 750,
    fleetRange: '6–25 vessels',
    badge: 'Most common',
    benefits: [
      'Directory listing',
      'Safety framework access',
      'Insurance partner rates',
      '4 staff training seats',
      'Advocacy participation',
    ],
    default: true,
  },
  {
    id: 'harbor',
    name: 'Harbor',
    price: 1500,
    fleetRange: '26+ vessels or multi-site',
    benefits: [
      'Directory listing',
      'Safety framework access',
      'Insurance partner rates',
      'Unlimited staff training',
      'FWC liaison priority',
      'Board eligibility',
      'Advocacy participation',
    ],
  },
]

const APP_FEE = 100

export default function Membership() {
  const [selectedTier, setSelectedTier] = useState('fleet')
  const [formData, setFormData] = useState({
    businessName: '',
    county: '',
    waterway: '',
    fleetSize: '',
    vesselTypes: '',
    insuranceCarrier: '',
    policyNumber: '',
    contactName: '',
    contactEmail: '',
    cardName: '',
    cardZip: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const tier = TIERS.find(t => t.id === selectedTier)!
  const total = tier.price + APP_FEE

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Auto-select tier based on fleet size
    if (name === 'fleetSize') {
      if (value.includes('1') || value.includes('2') || value.includes('3') || value.includes('4') || value.includes('5')) {
        if (!value.includes('26') && !value.includes('25')) setSelectedTier('skipper')
      } else if (value.includes('6') || value.includes('7') || value.includes('8') || value.includes('9') || value.includes('10') || value.includes('15') || value.includes('20') || value.includes('25')) {
        setSelectedTier('fleet')
      } else if (value.includes('26') || value.includes('50') || value.includes('100')) {
        setSelectedTier('harbor')
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      // Create checkout session
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tier: selectedTier,
          email: formData.contactEmail,
          company: formData.businessName,
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to create checkout session')
      }

      const { sessionId } = await response.json()

      // Redirect to Stripe checkout
      const stripe = await stripePromise
      if (!stripe) throw new Error('Stripe failed to load')

      const result = await stripe.redirectToCheckout({ sessionId })
      if (result.error) {
        throw new Error(result.error.message)
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An error occurred'
      setError(message)
      console.error('Checkout error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <p className={styles.eyebrow}>Membership</p>
        <h1>Choose Your Membership</h1>
        <p className={styles.subtitle}>
          Annual dues scale by fleet size. All tiers include the certification path, framework access, and a directory listing.
        </p>
      </div>

      <div className={styles.container}>
        {/* Tier cards */}
        <div className={styles.tiersGrid}>
          {TIERS.map(t => (
            <div
              key={t.id}
              className={`${styles.tierCard} ${selectedTier === t.id ? styles.selected : ''}`}
            >
              {t.badge && <div className={styles.badge}>{t.badge}</div>}

              <h3 className={styles.tierName}>{t.name}</h3>

              <div className={styles.price}>
                <span className={styles.amount}>${t.price}</span>
                <span className={styles.period}>/ year</span>
              </div>

              <p className={styles.fleetRange}>{t.fleetRange}</p>

              <ul className={styles.benefits}>
                {t.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedTier(t.id)}
                className={`${styles.selectBtn} ${selectedTier === t.id ? styles.selectedBtn : ''}`}
              >
                {selectedTier === t.id ? `Selected` : `Select ${t.name}`}
              </button>
            </div>
          ))}
        </div>

        {/* Form + Order Summary */}
        <form onSubmit={handleSubmit} className={styles.formLayout}>
          {/* Business Details */}
          <div className={styles.card}>
            <h3>Business Details</h3>
            <div className={styles.formGrid}>
              <div className={styles.field}>
                <label htmlFor="businessName">Business name*</label>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="county">County*</label>
                <select
                  id="county"
                  name="county"
                  value={formData.county}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select county</option>
                  <option>Orange</option>
                  <option>Hillsborough</option>
                  <option>Duval</option>
                  <option>Pinellas</option>
                  <option>Miami-Dade</option>
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="waterway">Primary waterway</label>
                <input
                  id="waterway"
                  name="waterway"
                  type="text"
                  value={formData.waterway}
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="fleetSize">Fleet size*</label>
                <select
                  id="fleetSize"
                  name="fleetSize"
                  value={formData.fleetSize}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select fleet size</option>
                  <option value="1-5 vessels">1–5 vessels (Skipper)</option>
                  <option value="6-25 vessels">6–25 vessels (Fleet)</option>
                  <option value="26+ vessels">26+ vessels (Harbor)</option>
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="vesselTypes">Vessel types</label>
                <input
                  id="vesselTypes"
                  name="vesselTypes"
                  type="text"
                  placeholder="Example: pontoon, jet ski, kayak"
                  value={formData.vesselTypes}
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="insuranceCarrier">Insurance carrier*</label>
                <input
                  id="insuranceCarrier"
                  name="insuranceCarrier"
                  type="text"
                  value={formData.insuranceCarrier}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="policyNumber">Policy number*</label>
                <input
                  id="policyNumber"
                  name="policyNumber"
                  type="text"
                  value={formData.policyNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contactName">Contact name*</label>
                <input
                  id="contactName"
                  name="contactName"
                  type="text"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contactEmail">Contact email*</label>
                <input
                  id="contactEmail"
                  name="contactEmail"
                  type="email"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Payment Card */}
          <div className={styles.card}>
            <h3>Billing Information</h3>
            {error && (
              <div style={{
                padding: '12px',
                marginBottom: '16px',
                backgroundColor: '#fee',
                border: '1px solid #fcc',
                borderRadius: '4px',
                color: '#c33',
                fontSize: '14px'
              }}>
                {error}
              </div>
            )}
            <div className={styles.formGrid}>
              <div className={`${styles.field} ${styles.fullWidth}`}>
                <label htmlFor="cardName">Billing contact*</label>
                <input
                  id="cardName"
                  name="cardName"
                  type="text"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={`${styles.field} ${styles.fullWidth}`}>
                <label htmlFor="cardZip">Billing ZIP*</label>
                <input
                  id="cardZip"
                  name="cardZip"
                  type="text"
                  value={formData.cardZip}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <aside className={styles.orderSummary}>
            <h3 className={styles.summaryTitle}>Order summary</h3>

            <div className={styles.summaryItems}>
              <div className={styles.summaryLine}>
                <span>{tier.name} membership</span>
                <span>${tier.price}</span>
              </div>
              <div className={styles.summaryLine}>
                <span>Application fee (one-time)</span>
                <span>${APP_FEE}</span>
              </div>
            </div>

            <div className={styles.summaryRule} />

            <div className={styles.summaryTotal}>
              <span>Due today</span>
              <span>${total}</span>
            </div>

            <button type="submit" className={styles.submitBtn} disabled={isLoading}>
              {isLoading ? 'Processing...' : 'Pay and submit application'}
            </button>

            <p className={styles.finePrint}>
              Membership is pending your safety audit. If your application is not approved, dues are refunded in full.
            </p>
          </aside>
        </form>
      </div>
    </div>
  )
}
