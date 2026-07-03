import { notFound } from 'next/navigation'
import Link from 'next/link'
import { OPERATORS } from '@/lib/operators'
import OperatorMapWrapper from '@/components/OperatorMapWrapper'
import styles from './profile.module.css'

export default async function OperatorProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const operator = OPERATORS.find(op => op.id === parseInt(id))

  if (!operator) {
    notFound()
  }

  const certLevelLabels = {
    'I': 'Level I - Basic Compliance',
    'II': 'Level II - Safety Certified',
    'III': 'Level III - Advanced Certification',
  }

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <Link href="/directory" className={styles.backLink}>
          ← Back to directory
        </Link>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <div />
          </div>
          <div className={styles.titleSection}>
            <h1>{operator.name}</h1>
            <div className={styles.badges}>
              <span className={`${styles.badge} ${styles[`level${operator.certLevel}`]}`}>
                Certified · {certLevelLabels[operator.certLevel]}
              </span>
              {operator.insuranceVerified && (
                <span className={styles.badge} style={{ backgroundColor: '#1F6B3E', color: 'white' }}>
                  Insurance Verified
                </span>
              )}
            </div>
            <p className={styles.meta}>
              {operator.county} County · {operator.waterway}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.container}>
        <div className={styles.mainContent}>
          {/* About */}
          <section className={styles.section}>
            <h2>About</h2>
            <p>{operator.description}</p>
          </section>

          {/* Map */}
          <section className={styles.section}>
            <h2>Location</h2>
            <OperatorMapWrapper
              name={operator.name}
              lat={operator.lat}
              lon={operator.lon}
              waterway={operator.waterway}
            />
          </section>

          {/* Operations */}
          <section className={styles.section}>
            <h2>Operations</h2>
            <div className={styles.grid}>
              <div>
                <h3>Operating Hours</h3>
                <p>{operator.operatingHours}</p>
              </div>
              <div>
                <h3>Fleet Size</h3>
                <p>{operator.fleetSize}</p>
              </div>
              <div>
                <h3>Vessel Types</h3>
                <p>{operator.vesselTypes.join(', ')}</p>
              </div>
              <div>
                <h3>Member Since</h3>
                <p>{operator.memberSince}</p>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className={styles.section}>
            <h2>Services Offered</h2>
            <ul className={styles.servicesList}>
              {operator.services.map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
          </section>

          {/* Contact */}
          <section className={styles.section}>
            <h2>Get in Touch</h2>
            <div className={styles.contactGrid}>
              <div>
                <p className={styles.label}>Contact Person</p>
                <p>{operator.contactName}</p>
              </div>
              <div>
                <p className={styles.label}>Email</p>
                <a href={`mailto:${operator.contactEmail}`}>{operator.contactEmail}</a>
              </div>
              <div>
                <p className={styles.label}>Phone</p>
                <a href={`tel:${operator.contactPhone}`}>{operator.contactPhone}</a>
              </div>
              {operator.website && (
                <div>
                  <p className={styles.label}>Website</p>
                  <a href={`https://${operator.website}`} target="_blank" rel="noopener noreferrer">
                    {operator.website}
                  </a>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.card}>
            <h3>Certification Details</h3>
            <div className={styles.detail}>
              <span className={styles.label}>Level</span>
              <span>{certLevelLabels[operator.certLevel]}</span>
            </div>
            <div className={styles.detail}>
              <span className={styles.label}>Member Since</span>
              <span>{operator.memberSince}</span>
            </div>
            <div className={styles.detail}>
              <span className={styles.label}>Insurance</span>
              <span>{operator.insuranceVerified ? '✓ Verified' : 'Pending'}</span>
            </div>
          </div>

          <div className={styles.card}>
            <h3>Location</h3>
            <p className={styles.location}>{operator.county} County</p>
            <p className={styles.location}>{operator.waterway}</p>
          </div>

          <div className={styles.card}>
            <a href={`mailto:${operator.contactEmail}`} className={styles.contactButton}>
              Contact Business
            </a>
            {operator.website && (
              <a href={`https://${operator.website}`} target="_blank" rel="noopener noreferrer" className={styles.contactButton}>
                Visit Website
              </a>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}
