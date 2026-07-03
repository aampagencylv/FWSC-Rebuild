'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './WeatherBanner.module.css'

interface WeatherData {
  location: { name: string }
  alert: boolean
  alertType?: 'caution' | 'warning'
}

export default function WeatherBanner() {
  const [alerts, setAlerts] = useState<WeatherData[]>([])
  const [show, setShow] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const hasRunRef = useRef(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || hasRunRef.current) return

    hasRunRef.current = true

    const checkWeather = async () => {
      try {
        const response = await fetch('/api/weather', { next: { revalidate: 900 } })
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        const data = await response.json()
        const alertData = data.filter((w: WeatherData) => w.alert)
        setAlerts(alertData)
        setShow(alertData.length > 0)
      } catch (err) {
        console.error('Weather banner error:', err)
        setShow(false)
      }
    }

    checkWeather()
    const interval = setInterval(checkWeather, 15 * 60 * 1000)
    return () => clearInterval(interval)
  }, [isMounted])

  if (!isMounted || !show || alerts.length === 0) {
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
