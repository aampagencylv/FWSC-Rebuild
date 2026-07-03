'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Header.module.css'

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/alerts', label: 'Weather Alerts' },
  { href: '/safety-framework', label: 'Safety Framework' },
  { href: '/partnerships', label: 'Partnerships' },
  { href: '/directory', label: 'Member Directory' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <>
      {/* Notice band */}
      <div className={styles.noticeBand}>
        <p>An official coalition of Florida boat liveries and water-sport operators</p>
      </div>

      {/* Masthead */}
      <header className={styles.masthead}>
        <Link href="/" className={styles.logo}>
          <img
            src="/assets/fwsc-seal.png"
            alt="FWSC Seal"
            width={56}
            height={56}
            className={styles.seal}
          />
          <div className={styles.titleBlock}>
            <h1 className={styles.title}>FLORIDA WATER SPORTS COALITION</h1>
            <p className={styles.subtitle}>Safer Vessels · Safer Waters</p>
          </div>
        </Link>

        <nav className={styles.nav}>
          {navigation.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navItem} ${pathname === item.href ? styles.active : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/membership" className={styles.cta}>
          Become a member
        </Link>
      </header>
    </>
  )
}
