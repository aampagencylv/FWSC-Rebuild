'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import styles from './directory.module.css'
import { OPERATORS } from '@/lib/operators'

const COUNTIES = ['All', 'Orange', 'Hillsborough', 'Duval', 'Pinellas', 'Miami-Dade']
const WATERWAYS = ['All', 'Lake Eustis', 'Tampa Bay', 'St Johns River', 'Gulf of Mexico', 'Biscayne Bay']
const CERT_LEVELS = ['All', 'I', 'II', 'III']
const VESSEL_TYPES = ['Pontoon', 'Jet ski', 'Kayak / SUP', 'Charter']

const ITEMS_PER_PAGE = 6

export default function Directory() {
  const [search, setSearch] = useState('')
  const [county, setCounty] = useState('All')
  const [waterway, setWaterway] = useState('All')
  const [certLevel, setCertLevel] = useState('All')
  const [selectedVessels, setSelectedVessels] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(0)

  const toggleVessel = (vessel: string) => {
    setSelectedVessels(prev =>
      prev.includes(vessel) ? prev.filter(v => v !== vessel) : [...prev, vessel]
    )
    setCurrentPage(0)
  }

  const filtered = useMemo(() => {
    return MOCK_OPERATORS.filter(op => {
      if (search && !op.name.toLowerCase().includes(search.toLowerCase())) return false
      if (county !== 'All' && op.county !== county) return false
      if (waterway !== 'All' && op.waterway !== waterway) return false
      if (certLevel !== 'All' && op.certLevel !== certLevel) return false
      if (selectedVessels.length > 0 && !selectedVessels.some(v => op.vesselTypes.includes(v))) return false
      return true
    })
  }, [search, county, waterway, certLevel, selectedVessels])

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paginatedOps = filtered.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE)

  return (
    <div className={styles.page}>
      {/* Page header */}
      <div className={styles.header}>
        <p className={styles.eyebrow}>Member directory</p>
        <h1>Certified Operators of the Coalition</h1>
        <p className={styles.subtitle}>Explore certified water-sport liveries and rental operators across Florida.</p>
      </div>

      {/* Body */}
      <div className={styles.body}>
        {/* Filter rail */}
        <aside className={styles.filterRail}>
          <h3 className={styles.filterTitle}>Filter listings</h3>

          <div className={styles.filterGroup}>
            <label>County</label>
            <select value={county} onChange={e => { setCounty(e.target.value); setCurrentPage(0); }}>
              {COUNTIES.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label>Waterway</label>
            <select value={waterway} onChange={e => { setWaterway(e.target.value); setCurrentPage(0); }}>
              {WATERWAYS.map(w => (
                <option key={w} value={w}>{w}</option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label>Vessel type</label>
            <div className={styles.checkboxGroup}>
              {VESSEL_TYPES.map(vessel => (
                <label key={vessel} className={styles.checkbox}>
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

          <div className={styles.filterGroup}>
            <label>Certification level</label>
            <select value={certLevel} onChange={e => { setCertLevel(e.target.value); setCurrentPage(0); }}>
              {CERT_LEVELS.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
        </aside>

        {/* Main content */}
        <div className={styles.main}>
          {/* Search */}
          <input
            type="text"
            placeholder="Search operators by name…"
            value={search}
            onChange={e => { setSearch(e.target.value); setCurrentPage(0); }}
            className={styles.searchInput}
          />

          {/* Operator cards */}
          <div className={styles.operatorList}>
            {paginatedOps.length > 0 ? (
              paginatedOps.map(op => (
                <Link key={op.id} href={`/directory/${op.id}`} className={styles.operatorCard}>
                  <div className={styles.logo}>
                    <div />
                  </div>

                  <div className={styles.info}>
                    <div className={styles.nameRow}>
                      <h3>{op.name}</h3>
                      <span className={`${styles.badge} ${op.certLevel === 'I' ? styles.badgeI : op.certLevel === 'II' ? styles.badgeII : styles.badgeIII}`}>
                        Certified · Level {op.certLevel}
                      </span>
                    </div>

                    <p className={styles.meta}>
                      {op.county} · {op.waterway} · {op.vesselTypes.join(', ')}
                    </p>

                    <div className={styles.links}>
                      <span className={styles.viewProfile}>View profile</span>
                      <span className={styles.separator}>·</span>
                      <span className={styles.verified}>
                        Member since {op.memberSince} · {op.insuranceVerified ? 'Insurance verified' : 'Insurance pending'}
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className={styles.noResults}>
                <p>No operators match your filters. Try adjusting your search.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button
                disabled={currentPage === 0}
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                className={styles.paginationBtn}
              >
                ‹
              </button>

              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`${styles.paginationBtn} ${i === currentPage ? styles.active : ''}`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages - 1}
                onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                className={styles.paginationBtn}
              >
                ›
              </button>
            </div>
          )}
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
