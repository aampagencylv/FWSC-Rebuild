'use client'

import { useState } from 'react'
import styles from './contact.module.css'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '', // Still in state for API submission
    phone: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSuccess(true)
      setFormData({ name: '', email: '', phone: '', message: '' }) // Clear form but keep email in state
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Get in touch</p>
        <h1>Contact Us</h1>
        <p className={styles.subtitle}>
          Have questions about membership, partnerships, or the Coalition? Reach out and we'll get back to you promptly.
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Contact Info */}
          <div className={styles.info}>
            <h2>Get in Touch</h2>
            <div className={styles.method}>
              <h3>Phone</h3>
              <a href="tel:+13053936465" className={styles.link}>
                (305) 393-6465
              </a>
            </div>
          </div>

          {/* Form */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us what you'd like to discuss..."
                rows={6}
              />
            </div>

            {success && (
              <div className={styles.success}>
                Message sent! We'll be in touch soon.
              </div>
            )}

            {error && (
              <div className={styles.error}>
                {error}
              </div>
            )}

            <button type="submit" className={styles.submit} disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
