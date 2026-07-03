import { Metadata } from 'next'
import styles from './alerts.module.css'
import { WEATHER_LOCATIONS, getWeatherEmoji } from '@/lib/weather'

export const metadata: Metadata = {
  title: 'Weather Alerts | Florida Waterways | FWSC',
  description: 'Real-time weather alerts and conditions for Florida waterways. Current temperature, wind, and safety alerts for water sports operations.',
  openGraph: {
    title: 'Weather Alerts | FWSC',
    description: 'Real-time Florida waterway weather and conditions',
    type: 'website',
  },
}

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

async function fetchWeatherData(): Promise<WeatherData[]> {
  try {
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY

    if (!apiKey) {
      console.error('[Alerts] Weather API key not configured')
      return []
    }

    const weatherPromises = WEATHER_LOCATIONS.map(async (location) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&units=imperial`,
          { next: { revalidate: 60 } }
        )

        if (!response.ok) {
          console.error(`[Alerts] Weather API error for ${location.name}: ${response.status}`)
          return null
        }

        const data = await response.json()

        // Determine alert status
        const condition = data.weather[0].main.toLowerCase()
        const windSpeed = data.wind.speed
        let alertType: 'caution' | 'warning' | undefined

        if (windSpeed > 25) alertType = 'caution'
        if (windSpeed > 35) alertType = 'warning'
        if (['thunderstorm', 'tornado', 'hurricane'].some(c => condition.includes(c))) alertType = 'warning'
        if (['rain', 'drizzle', 'mist'].some(c => condition.includes(c))) alertType = 'caution'

        return {
          location,
          temp: Math.round(data.main.temp),
          feelsLike: Math.round(data.main.feels_like),
          condition: data.weather[0].main,
          windSpeed: Math.round(data.wind.speed),
          windGust: data.wind.gust ? Math.round(data.wind.gust) : undefined,
          humidity: data.main.humidity,
          icon: data.weather[0].icon,
          alert: !!alertType,
          alertType,
          emoji: getWeatherEmoji(data.weather[0].icon),
        }
      } catch (error) {
        console.error(`[Alerts] Error fetching weather for ${location.name}:`, error)
        return null
      }
    })

    const results = await Promise.all(weatherPromises)
    const weatherData = results.filter((w) => w !== null)

    return weatherData
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.error('[Alerts] Fetch failed:', message)
    return []
  }
}

export default async function AlertsPage() {
  const weatherData = await fetchWeatherData()

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
          {weatherData.length > 0 ? (
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
          ) : (
            <div className={styles.error}>No weather data available</div>
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
