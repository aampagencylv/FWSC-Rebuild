export interface WeatherLocation {
  name: string
  county: string
  waterway: string
  lat: number
  lon: number
}

export interface WeatherData {
  location: WeatherLocation
  temp: number
  condition: string
  windSpeed: number
  windGust?: number
  humidity: number
  feelsLike: number
  icon: string
  alert?: boolean
  alertType?: 'caution' | 'warning'
}

// Major Florida water destinations
export const WEATHER_LOCATIONS: WeatherLocation[] = [
  { name: 'Tampa Bay', county: 'Hillsborough', waterway: 'Tampa Bay', lat: 27.9506, lon: -82.4332 },
  { name: 'Miami / Biscayne Bay', county: 'Miami-Dade', waterway: 'Biscayne Bay', lat: 25.7907, lon: -80.13 },
  { name: 'Key West', county: 'Monroe', waterway: 'Gulf of Mexico', lat: 24.5551, lon: -81.7796 },
  { name: 'Jacksonville', county: 'Duval', waterway: 'St Johns River', lat: 30.3322, lon: -81.6557 },
  { name: 'Clearwater Beach', county: 'Pinellas', waterway: 'Gulf of Mexico', lat: 27.9759, lon: -82.6303 },
  { name: 'Fort Lauderdale', county: 'Broward', waterway: 'Atlantic Ocean', lat: 26.1224, lon: -80.1373 },
  { name: 'Destin', county: 'Okaloosa', waterway: 'Gulf of Mexico', lat: 30.3945, lon: -86.4804 },
  { name: 'Pensacola', county: 'Escambia', waterway: 'Gulf of Mexico', lat: 30.4165, lon: -87.2169 },
  { name: 'Apalachicola Bay', county: 'Franklin', waterway: 'Gulf of Mexico', lat: 29.7454, lon: -84.9915 },
  { name: 'Orlando Lakes', county: 'Orange', waterway: 'Lake Eustis', lat: 28.5421, lon: -81.3723 },
]

export async function fetchWeather(location: WeatherLocation): Promise<WeatherData | null> {
  try {
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY
    if (!apiKey) {
      console.error('OpenWeatherMap API key not found')
      return null
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&units=imperial`
    )

    if (!response.ok) {
      console.error(`Weather API error for ${location.name}:`, response.status)
      return null
    }

    const data = await response.json()

    // Determine alert status based on conditions
    const condition = data.weather[0].main.toLowerCase()
    const windSpeed = data.wind.speed
    let alert = false
    let alertType: 'caution' | 'warning' | undefined

    // Alert logic: high winds or severe weather
    if (windSpeed > 25) alertType = 'caution'
    if (windSpeed > 35) alertType = 'warning'
    if (['thunderstorm', 'tornado', 'hurricane'].some(c => condition.includes(c))) alertType = 'warning'
    if (['rain', 'drizzle', 'mist'].some(c => condition.includes(c))) alertType = 'caution'

    alert = !!alertType

    return {
      location,
      temp: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      condition: data.weather[0].main,
      windSpeed: Math.round(data.wind.speed),
      windGust: data.wind.gust ? Math.round(data.wind.gust) : undefined,
      humidity: data.main.humidity,
      icon: data.weather[0].icon,
      alert,
      alertType,
    }
  } catch (error) {
    console.error(`Error fetching weather for ${location.name}:`, error)
    return null
  }
}

export async function fetchAllWeather(): Promise<WeatherData[]> {
  const weatherData = await Promise.all(
    WEATHER_LOCATIONS.map(loc => fetchWeather(loc))
  )
  return weatherData.filter((w): w is WeatherData => w !== null)
}

export function getWeatherEmoji(iconCode: string): string {
  const iconMap: { [key: string]: string } = {
    '01d': '☀️',
    '01n': '🌙',
    '02d': '⛅',
    '02n': '🌤️',
    '03d': '☁️',
    '03n': '☁️',
    '04d': '☁️',
    '04n': '☁️',
    '09d': '🌧️',
    '09n': '🌧️',
    '10d': '🌧️',
    '10n': '🌧️',
    '11d': '⛈️',
    '11n': '⛈️',
    '13d': '❄️',
    '13n': '❄️',
    '50d': '🌫️',
    '50n': '🌫️',
  }
  return iconMap[iconCode] || '🌡️'
}
