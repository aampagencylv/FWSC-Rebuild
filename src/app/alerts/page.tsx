'use client'

import { useState, useEffect } from 'react'
import styles from './alerts.module.css'

interface WeatherData {
  location: { name: string; county: string; waterway: string }
  temp: number
  feelsLike: number
  condition: string
  windSpeed: number
  windGust?: number
  humidity: number
  icon: string
  alert: boolean
  alertType?: 'caution' | 'warning'
  emoji: string
}

export default function AlertsPage() {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadWeather = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/weather')

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`)
        }

        const data = await response.json()
        setWeatherData(data)
        setError(null)
      } catch (err) {
        setError('Unable to load weather data. Please try again later.')
        console.error('Weather fetch error:', err)
      } finally {
        setLoading(false)
      }
    }

    loadWeather()
    // Refresh every 15 minutes
    const interval = setInterval(loadWeather, 15 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const alerts = weatherData.filter(w => w.alert)
  const dangerAlerts = alerts.filter(w => w.alertType === 'warning')
  const cautionAlerts = alerts.filter(w => w.alertType === 'caution')

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <p className={styles.eyebrow}>Safety Alerts</p>
        <h1>Florida Waterways Weather Alerts</h1>
        <p className={styles.subtitle}>
          Real-time weather conditions across major Florida water destinations. Check conditions before departing.
        </p>
      </div>

      <div className={styles.container}>
        {/* Active Alerts Summary */}
        {(dangerAlerts.length > 0 || cautionAlerts.length > 0) && (
          <section className={styles.alertsSummary}>
            <h2>Active Alerts</h2>
            {dangerAlerts.length > 0 && (
              <div className={`${styles.alertBand} ${styles.danger}`}>
                <span className={styles.icon}>⚠️</span>
                <div>
                  <strong>WARNING:</strong> Hazardous conditions reported at {dangerAlerts.map(a => a.location.name).join(', ')}
                </div>
              </div>
            )}
            {cautionAlerts.length > 0 && (
              <div className={`${styles.alertBand} ${styles.caution}`}>
                <span className={styles.icon}>⚡</span>
                <div>
                  <strong>CAUTION:</strong> Inclement weather at {cautionAlerts.map(a => a.location.name).join(', ')}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Scrolling Weather Widget */}
        <section className={styles.scrollSection}>
          <h2>Conditions Across Florida</h2>
          {loading ? (
            <div className={styles.loading}>Loading weather data...</div>
          ) : error ? (
            <div className={styles.error}>{error}</div>
          ) : (
            <div className={styles.scrollContainer}>
              {weatherData.map((weather, index) => (
                <div
                  key={index}
                  className={`${styles.weatherCard} ${
                    weather.alert ? styles[`alert_${weather.alertType}`] : ''
                  }`}
                >
                  <div className={styles.cardHeader}>
                    <h3>{weather.location.name}</h3>
                    <span className={styles.emoji}>{weather.emoji}</span>
                  </div>

                  <div className={styles.cardContent}>
                    <div className={styles.stat}>
                      <span className={styles.label}>Temp</span>
                      <span className={styles.value}>{weather.temp}°F</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.label}>Feels Like</span>
                      <span className={styles.value}>{weather.feelsLike}°F</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.label}>Wind</span>
                      <span className={styles.value}>{weather.windSpeed} mph</span>
                    </div>
                    {weather.windGust && (
                      <div className={styles.stat}>
                        <span className={styles.label}>Gust</span>
                        <span className={styles.value}>{weather.windGust} mph</span>
                      </div>
                    )}
                    <div className={styles.stat}>
                      <span className={styles.label}>Humidity</span>
                      <span className={styles.value}>{weather.humidity}%</span>
                    </div>
                  </div>

                  <div className={styles.condition}>{weather.condition}</div>

                  {weather.alert && (
                    <div className={`${styles.alertLabel} ${styles[weather.alertType!]}`}>
                      {weather.alertType === 'warning' ? 'WARNING' : 'CAUTION'}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          <p className={styles.hint}>← Scroll to see more locations →</p>
        </section>

        {/* Safety Tips */}
        <section className={styles.tips}>
          <h2>Safe Boating Guidelines</h2>
          <div className={styles.tipsList}>
            <div className={styles.tip}>
              <strong>Wind ≤ 10 mph:</strong> Ideal conditions for most vessels
            </div>
            <div className={styles.tip}>
              <strong>Wind 10-20 mph:</strong> Safe for experienced operators; exercise caution
            </div>
            <div className={styles.tip}>
              <strong>Wind 20-30 mph:</strong> Caution advised; consider postponing rentals
            </div>
            <div className={styles.tip}>
              <strong>Wind ≥ 30 mph:</strong> Hazardous; operations should cease
            </div>
            <div className={styles.tip}>
              <strong>Always check:</strong> Wind speed, gusts, precipitation, and humidity before departing
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
