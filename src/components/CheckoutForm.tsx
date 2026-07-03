'use client'

import { useState } from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import styles from './CheckoutForm.module.css'

interface CheckoutFormProps {
  formData: any
  tier: any
  total: number
  onBack: () => void
}

export default function CheckoutForm({ formData, tier, total, onBack }: CheckoutFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!stripe || !elements) {
      setError('Stripe not loaded')
      return
    }

    setIsLoading(true)

    try {
      // Create payment intent on server
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tier: tier.id,
          email: formData.contactEmail,
          company: formData.businessName,
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to create checkout session')
      }

      const { sessionId } = await response.json()

      // Redirect to hosted checkout
      const { error: stripeError } = await stripe.redirectToCheckout({ sessionId })

      if (stripeError) {
        throw new Error(stripeError.message)
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Payment failed'
      setError(message)
      console.error('Payment error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Secure Payment</p>
        <h1>Complete Your Payment</h1>
        <p className={styles.subtitle}>
          Your membership application is ready. Secure payment processing by Stripe.
        </p>
      </div>

      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.formLayout}>
          {/* Payment Card */}
          <div className={styles.card}>
            <h3>Payment Details</h3>

            {error && (
              <div className={styles.error}>
                {error}
              </div>
            )}

            <div className={styles.formSection}>
              <label className={styles.fieldLabel}>Card details</label>
              <div className={styles.cardElement}>
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: '15px',
                        color: '#222',
                        fontFamily: '"Public Sans", sans-serif',
                        '::placeholder': {
                          color: '#999',
                        },
                      },
                      invalid: {
                        color: '#dc3545',
                      },
                    },
                    hidePostalCode: false,
                  }}
                />
              </div>
            </div>

            <div className={styles.formSection}>
              <label htmlFor="cardName" className={styles.fieldLabel}>Cardholder name</label>
              <input
                id="cardName"
                type="text"
                placeholder="Name on card"
                value={formData.cardName || ''}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formSection}>
              <label htmlFor="cardZip" className={styles.fieldLabel}>Billing postal code</label>
              <input
                id="cardZip"
                type="text"
                placeholder="Postal code"
                value={formData.cardZip || ''}
                className={styles.input}
                required
              />
            </div>

            <button
              type="button"
              onClick={onBack}
              className={styles.backBtn}
              disabled={isLoading}
            >
              ← Back
            </button>
          </div>

          {/* Order Summary Sidebar */}
          <aside className={styles.orderSummary}>
            <h3 className={styles.summaryTitle}>Order summary</h3>

            <div className={styles.businessInfo}>
              <p className={styles.infoLabel}>Business</p>
              <p className={styles.infoValue}>{formData.businessName}</p>
            </div>

            <div className={styles.businessInfo}>
              <p className={styles.infoLabel}>Contact email</p>
              <p className={styles.infoValue}>{formData.contactEmail}</p>
            </div>

            <div className={styles.summaryItems}>
              <div className={styles.summaryLine}>
                <span>{tier.name} membership</span>
                <span>${tier.price}</span>
              </div>
              <div className={styles.summaryLine}>
                <span>Application fee</span>
                <span>$100</span>
              </div>
            </div>

            <div className={styles.summaryRule} />

            <div className={styles.summaryTotal}>
              <span>Total</span>
              <span>${total}</span>
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isLoading || !stripe || !elements}
            >
              {isLoading ? (
                <>
                  <span className={styles.spinner} />
                  Processing...
                </>
              ) : (
                `Pay $${total}`
              )}
            </button>

            <p className={styles.finePrint}>
              This is a test transaction using Stripe's test card. Your membership is pending safety audit. If not approved, dues are refunded in full.
            </p>

            <p className={styles.testCards}>
              <strong>Test card:</strong> 4242 4242 4242 4242 | Any future date | Any CVC
            </p>
          </aside>
        </form>
      </div>
    </div>
  )
}
