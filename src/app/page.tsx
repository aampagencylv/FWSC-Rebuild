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
          <img
            src="/hero-family-boat.jpg"
            alt="Family enjoying a boat day on Florida waterways"
            className={styles.heroImg}
          />
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
            <h3>Insurance and Platform Partnerships</h3>
            <p>Access preferred rates and coverage options, plus partnership benefits from leading platforms and agencies.</p>
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

      {/* Where your money goes */}
      <section className={styles.pathToCert}>
        <div className={styles.sectionRule}>
          <p className={styles.eyebrow}>Transparency</p>
          <h2>Where Your Money Goes</h2>
        </div>

        <div className={styles.stepsGrid}>
          {[1, 2, 3, 4].map(step => (
            <div key={step} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step}</div>
              <h3>{['Lobbying and Advocacy', 'Insurance Partnerships', 'Coalition Operations', 'Safety Initiatives'][step - 1]}</h3>
              <p>{['Government advocacy for waterway safety policy and regulatory standards', 'Negotiated rates and coverage options for Coalition members', 'Administration, member directory, and partnership coordination', 'Safety training, framework development, and public education programs'][step - 1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted Partners */}
      <section className={styles.partnersSection}>
        <div className={styles.sectionRule}>
          <p className={styles.eyebrow}>Trusted by industry leaders</p>
          <h2>Our Partners</h2>
        </div>

        <div className={styles.partnersGrid}>
          <div className={styles.partnerCard}>
            <img src="/logo-granite-insurance.png" alt="Granite Insurance" className={styles.partnerLogo} />
          </div>
          <div className={styles.partnerCard}>
            <img src="/logo-tmbt.jpg" alt="Take My Boat Test" className={styles.partnerLogo} />
          </div>
          <div className={styles.partnerCard}>
            <img src="/logo-fwc.jpg" alt="Florida Fish and Wildlife" className={styles.partnerLogo} />
          </div>
          <div className={styles.partnerCard}>
            <img src="/logo-nasbla.png" alt="NASBLA" className={styles.partnerLogo} />
          </div>
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
