'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import styles from './OperatorMap.module.css'

interface OperatorMapProps {
  name: string
  lat: number
  lon: number
  waterway: string
}

export default function OperatorMap({ name, lat, lon, waterway }: OperatorMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return

    // Initialize map
    mapInstance.current = L.map(mapRef.current).setView([lat, lon], 11)

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(mapInstance.current)

    // Add marker
    const customIcon = L.icon({
      iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCAzMiA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iNDgiIHJ4PSI0IiBmaWxsPSIjMTQyNjRFIi8+PHRleHQgeD0iMTYiIHk9IjI0IiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgZmlsbD0id2hpdGUiPuKzsCDi5LDvuI88L3RleHQ+PC9zdmc+',
      iconSize: [32, 48],
      iconAnchor: [16, 48],
      popupAnchor: [0, -48],
    })

    const marker = L.marker([lat, lon], { icon: customIcon }).addTo(mapInstance.current)
    marker.bindPopup(`<div class="${styles.popup}"><strong>${name}</strong><br/>${waterway}</div>`)

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove()
        mapInstance.current = null
      }
    }
  }, [lat, lon, name, waterway])

  return (
    <div className={styles.container}>
      <div ref={mapRef} className={styles.map} />
    </div>
  )
}
