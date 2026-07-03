'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import styles from './directory.module.css'
import { OPERATORS } from '@/lib/operators'

const COUNTIES = ['All', 'Orange', 'Hillsborough', 'Duval', 'Pinellas', 'Miami-Dade']
const WATERWAYS = ['All', 'Lake Eustis', 'Tampa Bay', 'St Johns River', 'Gulf of Mexico', 'Biscayne Bay']
const CERT_LEVELS = ['All', 'I', 'II', 'III']
const VESSEL_TYPES = ['Pontoon', 'Jet ski', 'Kayak / SUP', 'Charter']

const DirectoryMap = dynamic(() => import('@/components/DirectoryMap'), { ssr: false })

export default function Directory() {
  const [search, setSearch] = useState('')
  const [county, setCounty] = useState('All')
  const [waterway, setWaterway] = useState('All')
  const [certLevel, setCertLevel] = useState('All')
  const [selectedVessels, setSelectedVessels] = useState<string[]>([])
  const [selectedOperator, setSelectedOperator] = useState<number | null>(null)

  const toggleVessel = (vessel: string) => {
    setSelectedVessels(prev =>
      prev.includes(vessel) ? prev.filter(v => v !== vessel) : [...prev, vessel]
    )
  }

  const filtered = useMemo(() => {
    return OPERATORS.filter(op => {
      if (search && !op.name.toLowerCase().includes(search.toLowerCase())) return false
      if (county !== 'All' && op.county !== county) return false
      if (waterway !== 'All' && op.waterway !== waterway) return false
      if (certLevel !== 'All' && op.certLevel !== certLevel) return false
      if (selectedVessels.length > 0 && !selectedVessels.some(v => op.vesselTypes.includes(v))) return false
      return true
    })
  }, [search, county, waterway, certLevel, selectedVessels])

  return (
    <div className={styles.page}>
      {/* Page header */}
      <div className={styles.header}>
        <p className={styles.eyebrow}>Member directory</p>
        <h1>Certified Operators of the Coalition</h1>
        <p className={styles.subtitle}>Explore certified water-sport liveries and rental operators across Florida.</p>
      </div>

      {/* Two-column body with map + listings */}
      <div className={styles.twoColumnBody}>
        {/* Left: Map */}
        <div className={styles.mapSection}>
          <DirectoryMap operators={filtered} selectedId={selectedOperator} />
        </div>

        {/* Right: Filters + Listings */}
        <div className={styles.rightSection}>
          {/* Filters */}
          <div className={styles.filtersContainer}>
            <input
              type="text"
              placeholder="Search operators…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className={styles.searchInput}
            />

            <div className={styles.filterRow}>
              <select value={county} onChange={e => setCounty(e.target.value)} className={styles.filterSelect}>
                {COUNTIES.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>

              <select value={waterway} onChange={e => setWaterway(e.target.value)} className={styles.filterSelect}>
                {WATERWAYS.map(w => (
                  <option key={w} value={w}>{w}</option>
                ))}
              </select>

              <select value={certLevel} onChange={e => setCertLevel(e.target.value)} className={styles.filterSelect}>
                {CERT_LEVELS.map(level => (
                  <option key={level} value={level}>Level {level}</option>
                ))}
              </select>
            </div>

            <div className={styles.vesselFilters}>
              {VESSEL_TYPES.map(vessel => (
                <label key={vessel} className={styles.vesselCheckbox}>
                  <input
                    type="checkbox"
                    checked={selectedVessels.includes(vessel)}
                    onChange={() => toggleVessel(vessel)}
                  />
                  <span>{vessel}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Listings grid */}
          <div className={styles.listingsSection}>
            {filtered.length > 0 ? (
              <div className={styles.operatorGrid}>
                {filtered.map(op => (
                  <Link
                    key={op.id}
                    href={`/directory/${op.id}`}
                    className={styles.operatorGridCard}
                    onMouseEnter={() => setSelectedOperator(op.id)}
                    onMouseLeave={() => setSelectedOperator(null)}
                  >
                    <div className={styles.gridCardHeader}>
                      <h3>{op.name}</h3>
                      <span className={`${styles.levelBadge} ${styles[`level${op.certLevel}`]}`}>
                        {op.certLevel}
                      </span>
                    </div>

                    {op.address && (
                      <p className={styles.gridCardMeta}>
                        {op.address}
                      </p>
                    )}

                    <p className={styles.gridCardMeta}>
                      {op.county} • {op.waterway}
                    </p>

                    <p className={styles.gridCardMeta}>
                      {op.vesselTypes.join(', ')}
                    </p>

                    {op.contactPhone && (
                      <p className={styles.gridCardPhone}>
                        {op.contactPhone}
                      </p>
                    )}

                    {op.website && (
                      <p className={styles.gridCardWebsite}>
                        {op.website}
                      </p>
                    )}

                    <div className={styles.gridCardFooter}>
                      <span className={styles.viewLink}>View profile</span>
                      {op.insuranceVerified && <span className={styles.verified}>✓ Verified</span>}
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className={styles.noResults}>
                <p>No operators match your filters. Try adjusting your search.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Join CTA */}
      <div className={styles.ctaBand}>
        <h2>Operate a livery?</h2>
        <a href="/membership" className={styles.button}>
          Join the coalition
        </a>
      </div>
    </div>
  )
}
