'use client'

import dynamic from 'next/dynamic'

const OperatorMap = dynamic(() => import('./OperatorMap'), { ssr: false })

interface OperatorMapWrapperProps {
  name: string
  lat: number
  lon: number
  waterway: string
}

export default function OperatorMapWrapper({ name, lat, lon, waterway }: OperatorMapWrapperProps) {
  return <OperatorMap name={name} lat={lat} lon={lon} waterway={waterway} />
}
