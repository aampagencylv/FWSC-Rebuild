'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import styles from './success.module.css'

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!sessionId) {
      setError('No session found')
      setLoading(false)
      return
    }

    async function verifyPayment() {
      try {
        const response = await fetch(`/api/members?session_id=${sessionId}`)
        if (!response.ok) {
          throw new Error('Failed to verify payment')
        }
        const data = await response.json()
        setPaymentInfo(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Payment verification failed')
      } finally {
        setLoading(false)
      }
    }

    verifyPayment()
  }, [sessionId])

  if (loading) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <p>Verifying your payment...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.error}>
            <h2>Payment Verification Failed</h2>
            <p>{error}</p>
            <Link href="/membership" className={styles.button}>
              Back to Membership
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const tier = paymentInfo?.metadata?.tier
  const company = paymentInfo?.metadata?.company
  const email = paymentInfo?.customer_email
  const amount = paymentInfo?.amount_paid ? `$${(paymentInfo.amount_paid / 100).toFixed(2)}` : null

  return (
    <>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Application Submitted</p>
        <h1>Welcome to the Coalition</h1>
        <p className={styles.subtitle}>
          Thank you for joining the Florida Water Sports Coalition.
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.successCard}>
          <div className={styles.checkmark}>✓</div>

          <h2>Payment Received</h2>

          {company && (
            <div className={styles.detail}>
              <p className={styles.label}>Business</p>
              <p className={styles.value}>{company}</p>
            </div>
          )}

          {tier && (
            <div className={styles.detail}>
              <p className={styles.label}>Membership Tier</p>
              <p className={styles.value}>{tier.charAt(0).toUpperCase() + tier.slice(1)}</p>
            </div>
          )}

          {amount && (
            <div className={styles.detail}>
              <p className={styles.label}>Amount Paid</p>
              <p className={styles.value}>{amount}</p>
            </div>
          )}

          {email && (
            <div className={styles.detail}>
              <p className={styles.label}>Confirmation Email</p>
              <p className={styles.value}>{email}</p>
            </div>
          )}

          <div className={styles.nextSteps}>
            <h3>What's Next?</h3>
            <ol className={styles.stepsList}>
              <li>
                <strong>Review & Approval:</strong> Our team will review your application and insurance documentation within 1-2 business days.
              </li>
              <li>
                <strong>Safety Audit:</strong> Schedule a compliance review with our safety team (required for membership activation).
              </li>
              <li>
                <strong>Directory Listing:</strong> Once approved, your business will appear in our member directory.
              </li>
              <li>
                <strong>Member Benefits Unlock:</strong> Access to training resources, partner discounts, and coalition updates.
              </li>
            </ol>
          </div>

          <p className={styles.contactNote}>
            You'll receive a confirmation email at <strong>{email}</strong> with next steps and our team's contact information.
          </p>

          <div className={styles.actions}>
            <Link href="/directory" className={styles.buttonPrimary}>
              View Member Directory
            </Link>
            <Link href="/" className={styles.buttonSecondary}>
              Return to Home
            </Link>
          </div>
        </div>

        <div className={styles.infoBand}>
          <h3>Member Resources</h3>
          <p>As a member, you'll have access to:</p>
          <ul>
            <li>Safety certification and training programs</li>
            <li>Insurance partner discounts</li>
            <li>FWC compliance guidance</li>
            <li>Operational best practices</li>
            <li>Coalition member network</li>
          </ul>
        </div>
      </div>
    </>
  )
}

interface PaymentInfo {
  success: boolean
  customer_email?: string
  metadata?: {
    tier?: string
    company?: string
  }
  amount_paid?: number
}

function SuccessPageLoading() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <p>Verifying your payment...</p>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <div className={styles.page}>
      <Suspense fallback={<SuccessPageLoading />}>
        <SuccessContent />
      </Suspense>
    </div>
  )
}
