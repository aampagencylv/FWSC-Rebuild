import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>For livery and rental operators</p>
          <h1 className={styles.headline}>
            Stronger Together on Florida's Waterways
          </h1>
          <p className={styles.subheading}>
            The Florida Water Sports Coalition brings together liveries and water-sport operators to set shared safety standards, train staff, and earn the public's trust through certification and partnership with state agencies.
          </p>
          <div className={styles.buttons}>
            <a href="/membership" className={`${styles.button} ${styles.primary}`}>
              Join the coalition
            </a>
            <a href="/safety-framework" className={`${styles.button} ${styles.secondary}`}>
              View the safety framework
            </a>
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.placeholder}>
            Photo placeholder
          </div>
        </div>
      </section>

      {/* Why operators join */}
      <section className={styles.whyJoin}>
        <div className={styles.sectionRule}>
          <p className={styles.eyebrow}>Why you'll join</p>
          <h2>Why Operators Join</h2>
        </div>

        <div className={styles.gridCards}>
          <div className={styles.card}>
            <h3>Insurance Partnerships</h3>
            <p>Access preferred rates and coverage options designed for certified water-sport liveries.</p>
          </div>
          <div className={styles.card}>
            <h3>FWC Coordination</h3>
            <p>Work directly with the Florida Fish and Wildlife Conservation Commission on safety initiatives.</p>
          </div>
          <div className={styles.card}>
            <h3>A Mark the Public Trusts</h3>
            <p>The Coalition seal signals to customers that you meet rigorous safety and operational standards.</p>
          </div>
          <div className={styles.card}>
            <h3>One Voice in Tallahassee</h3>
            <p>Participate in shaping waterway safety policy at the state level alongside peers and agencies.</p>
          </div>
        </div>
      </section>

      {/* Path to certification */}
      <section className={styles.pathToCert}>
        <div className={styles.sectionRule}>
          <p className={styles.eyebrow}>How it works</p>
          <h2>Path to Certification</h2>
        </div>

        <div className={styles.stepsGrid}>
          {[1, 2, 3, 4].map(step => (
            <div key={step} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step}</div>
              <h3>{['Apply', 'Safety Audit', 'Staff Training', 'Certified'][step - 1]}</h3>
              <p>{['Submit your application and review the safety framework', 'We audit your vessels and operations', 'Complete required staff training modules', 'Join the Coalition and use the mark'][step - 1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className={styles.ctaBand}>
        <h2>Ready to Join?</h2>
        <p>Dues scale by fleet size. Applications are reviewed monthly.</p>
        <a href="/membership" className={`${styles.button} ${styles.primary}`}>
          Start your application
        </a>
      </section>
    </div>
  )
}
