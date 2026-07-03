import styles from './safety-framework.module.css'

const PILLARS = [
  {
    title: 'Vessel Readiness',
    description: 'All vessels meet Coast Guard and state regulations. Regular inspections ensure safety equipment is present, accessible, and functional. Engines, electrical systems, and structural integrity are maintained to current standards.',
  },
  {
    title: 'Renter Briefing',
    description: 'Every passenger receives a mandatory briefing covering vessel operation, safety procedures, emergency protocols, and local waterway rules. Briefing scripts are standardized across the Coalition and documented for every outing.',
  },
  {
    title: 'Staff Training',
    description: 'Operators maintain current First Aid/CPR certification. Annual recurrent training covers passenger safety, emergency response, weather protocols, and waterway regulations. Senior staff mentor newer team members.',
  },
  {
    title: 'Insurance and Records',
    description: 'Comprehensive general liability and commercial maritime insurance requirements. Complete records of maintenance, inspections, passenger manifests, and incident reports are maintained and available for audit.',
  },
]

export default function SafetyFramework() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <p className={styles.eyebrow}>Safety framework</p>
        <h1>The FWSC Standard for Livery Operations</h1>
        <p className={styles.subtitle}>
          Aligned with F.S. §327.54 and FWC guidance. Adopted by every certified member of the Coalition.
        </p>
      </div>

      {/* Pillars */}
      <section className={styles.pillarsSection}>
        <div className={styles.container}>
          <div className={styles.pillarsGrid}>
            {PILLARS.map((pillar, i) => (
              <div key={i} className={styles.pillarCard}>
                <div className={styles.pillarNumber}>{i + 1}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className={styles.downloadsSection}>
        <div className={styles.container}>
          <div className={styles.sectionRule}>
            <h2>Resources</h2>
          </div>

          <div className={styles.downloadLinks}>
            <a href="#" className={styles.downloadChip}>
              <span className={styles.icon}>📄</span>
              <span>Vessel Inspection Checklist (PDF)</span>
            </a>
            <a href="#" className={styles.downloadChip}>
              <span className={styles.icon}>📄</span>
              <span>Renter Briefing Script (PDF)</span>
            </a>
            <a href="#" className={styles.downloadChip}>
              <span className={styles.icon}>📄</span>
              <span>Full Safety Framework (PDF)</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Ready to adopt the framework?</h2>
          <a href="/membership" className={styles.button}>
            Get certified
          </a>
        </div>
      </section>
    </div>
  )
}
