'use client'

import { useState } from 'react'
import styles from './membership.module.css'

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
    insuranceCarrier: '',
    policyNumber: '',
    contactName: '',
    contactEmail: '',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: '',
    cardZip: '',
  })

  const tier = TIERS.find(t => t.id === selectedTier)!
  const total = tier.price + APP_FEE

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Stripe integration
    alert(`Application submitted for ${tier.name} tier. Stripe checkout coming soon.`)
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
                <label htmlFor="fleetSize">Fleet size and vessel types*</label>
                <input
                  id="fleetSize"
                  name="fleetSize"
                  type="text"
                  placeholder="Example: 12 vessels — pontoon, jet ski"
                  value={formData.fleetSize}
                  onChange={handleInputChange}
                  required
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
            <h3>Payment Information</h3>
            <div className={styles.formGrid}>
              <div className={`${styles.field} ${styles.fullWidth}`}>
                <label htmlFor="cardName">Name on card*</label>
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
                <label htmlFor="cardNumber">Card number*</label>
                <input
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="cardExpiry">Expiration*</label>
                <input
                  id="cardExpiry"
                  name="cardExpiry"
                  type="text"
                  placeholder="MM / YY"
                  value={formData.cardExpiry}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="cardCVC">CVC*</label>
                <input
                  id="cardCVC"
                  name="cardCVC"
                  type="text"
                  placeholder="000"
                  value={formData.cardCVC}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className={styles.field}>
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

            <button type="submit" className={styles.submitBtn}>
              Pay and submit application
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
