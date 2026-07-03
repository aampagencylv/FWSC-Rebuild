'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import type { Operator } from '@/lib/operators'
import 'leaflet/dist/leaflet.css'

interface DirectoryMapProps {
  operators: Operator[]
  selectedId?: number | null
}

const defaultIcon = L.icon({
  iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI4IiBmaWxsPSIjMTQyNjRFIi8+PC9zdmc+',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12],
})

const selectedIcon = L.icon({
  iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI4IiBmaWxsPSIjQzlBMjNFIi8+PC9zdmc+',
  iconSize: [28, 28],
  iconAnchor: [14, 14],
  popupAnchor: [0, -14],
})

export default function DirectoryMap({ operators, selectedId }: DirectoryMapProps) {
  if (operators.length === 0) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#FAF6EC',
        color: '#4A5265',
        fontSize: '14px',
      }}>
        No operators to display
      </div>
    )
  }

  const bounds = L.latLngBounds(operators.map(op => [op.lat, op.lon]))
  const center = bounds.getCenter()

  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={7}
      style={{ height: '100%', width: '100%' }}
      bounds={bounds}
      boundsOptions={{ padding: [50, 50] }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      {operators.map(op => (
        <Marker
          key={op.id}
          position={[op.lat, op.lon]}
          icon={selectedId === op.id ? selectedIcon : defaultIcon}
        >
          <Popup>
            <div style={{ minWidth: '200px' }}>
              <strong>{op.name}</strong>
              <p style={{ margin: '4px 0', fontSize: '12px' }}>
                {op.county} · {op.waterway}
              </p>
              <p style={{ margin: '4px 0', fontSize: '12px', color: '#666' }}>
                Level {op.certLevel}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
