'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { fetchAllWeather, WeatherData } from '@/lib/weather'
import styles from './WeatherBanner.module.css'

export default function WeatherBanner() {
  const [alerts, setAlerts] = useState<WeatherData[]>([])
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkWeather = async () => {
      try {
        const data = await fetchAllWeather()
        const alertData = data.filter(w => w.alert)
        setAlerts(alertData)
        setShow(alertData.length > 0)
      } catch (err) {
        console.error('Error checking weather:', err)
      } finally {
        setLoading(false)
      }
    }

    checkWeather()
    // Check every 15 minutes
    const interval = setInterval(checkWeather, 15 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (loading || !show || alerts.length === 0) {
    return null
  }

  const hasWarning = alerts.some(a => a.alertType === 'warning')
  const locations = alerts.map(a => a.location.name).join(', ')

  return (
    <div className={`${styles.banner} ${styles[hasWarning ? 'warning' : 'caution']}`}>
      <div className={styles.content}>
        <span className={styles.icon}>{hasWarning ? '⚠️' : '⚡'}</span>
        <div className={styles.text}>
          <strong>{hasWarning ? 'WEATHER WARNING' : 'WEATHER ALERT'}:</strong>
          {' '}Inclement conditions at {locations}.{' '}
          <Link href="/alerts" className={styles.link}>
            View full alerts →
          </Link>
        </div>
      </div>
      <button
        className={styles.close}
        onClick={() => setShow(false)}
        aria-label="Close alert"
      >
        ✕
      </button>
    </div>
  )
}
