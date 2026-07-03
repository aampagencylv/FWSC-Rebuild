'use client'

import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.seal}>
            <img
              src="/assets/fwsc-seal.png"
              alt="FWSC Seal"
              width={72}
              height={72}
            />
          </div>

          <div className={styles.mission}>
            <p>
              The Florida Water Sports Coalition is a coalition of boat liveries and water-sport operators working to make Florida's waterways safer for passengers and the public through shared safety standards, operator certification, and partnership with state agencies.
            </p>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Florida Water Sports Coalition
            </p>
          </div>

          <nav className={styles.column}>
            <h3>Coalition</h3>
            <Link href="/">Home</Link>
            <Link href="/membership">Membership</Link>
            <Link href="/directory">Operator Directory</Link>
          </nav>

          <nav className={styles.column}>
            <h3>Safety</h3>
            <Link href="/safety-framework">Safety Framework</Link>
            <Link href="/partnerships">Partnerships</Link>
            <a href="mailto:info@fwsc.org">Contact us</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
