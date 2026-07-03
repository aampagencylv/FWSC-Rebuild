import styles from './partnerships.module.css'

const PARTNERS = [
  {
    title: 'Florida Fish and Wildlife Conservation Commission',
    description: 'The FWC regulates recreational boating, establishes waterway safety standards, and coordinates with the Coalition on public safety initiatives. Members benefit from direct liaison access to agency expertise.',
  },
  {
    title: 'Insurance Partners',
    description: 'Coalition members receive preferred rates and tailored coverage from leading maritime insurance providers. Partnership programs reduce risk and provide competitive pricing based on FWSC certification levels.',
  },
  {
    title: 'Licensing Agencies',
    description: 'State and local licensing authorities recognize FWSC certification as evidence of operational excellence. Coalition members streamline permit renewal and demonstrate regulatory compliance.',
  },
]

export default function Partnerships() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <p className={styles.eyebrow}>Partnerships</p>
        <h1>Working With the Agencies That Keep Florida Boating Safe</h1>
      </div>

      {/* Partners */}
      <section className={styles.partnersSection}>
        <div className={styles.container}>
          <div className={styles.partnersList}>
            {PARTNERS.map((partner, i) => (
              <div key={i} className={styles.partnerCard}>
                <div className={styles.logo}>
                  <div />
                </div>

                <div className={styles.content}>
                  <h3>{partner.title}</h3>
                  <p>{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Interested?</p>
          <h2>Become a partner</h2>
          <a href="mailto:info@fwsc.org" className={styles.button}>
            Contact the coalition
          </a>
        </div>
      </section>
    </div>
  )
}
