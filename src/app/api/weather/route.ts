import { NextResponse } from 'next/server'
import { WEATHER_LOCATIONS, getWeatherEmoji } from '@/lib/weather'

export const revalidate = 60 // Cache for 1 minute

export async function GET() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY

    if (!apiKey) {
      console.error('OpenWeatherMap API key not configured')
      return NextResponse.json(
        { error: 'Weather API not configured' },
        { status: 500 }
      )
    }

    const weatherPromises = WEATHER_LOCATIONS.map(async (location) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&units=imperial`,
          { next: { revalidate: 60 } }
        )

        if (!response.ok) {
          console.error(`Weather API error for ${location.name}: ${response.status}`)
          return null
        }

        const data = await response.json()

        // Determine alert status based on conditions
        const condition = data.weather[0].main.toLowerCase()
        const windSpeed = data.wind.speed
        let alertType: 'caution' | 'warning' | undefined

        // Alert logic: high winds or severe weather
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
        console.error(`Error fetching weather for ${location.name}:`, error)
        return null
      }
    })

    const results = await Promise.all(weatherPromises)
    const weatherData = results.filter((w) => w !== null)

    return NextResponse.json(weatherData)
  } catch (error) {
    console.error('Weather API route error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch weather data' },
      { status: 500 }
    )
  }
}
