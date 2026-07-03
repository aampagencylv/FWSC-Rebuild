const { Button, Card, Alert, Badge } = window.FWSCDesignSystem_db6c3e;

function HomeScreen({ onNav }) {
  return (
    <main>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '20px 24px 0' }}>
        <Alert tone="caution" title="Small craft advisory — Tampa Bay" action={<Button size="sm" variant="ghost" onClick={() => onNav('advisories')}>All advisories</Button>}>
          Winds 20–25 kt through 6 PM EDT. Member liveries should restrict rentals to protected waters.
        </Alert>
      </div>

      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '56px 24px', display: 'flex', gap: 56, alignItems: 'center' }}>
        <div style={{ flex: 1, maxWidth: 620 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold-700)', marginBottom: 14 }}>Est. 2026 · Tallahassee, Florida</div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 44, fontWeight: 700, lineHeight: 1.15, color: 'var(--navy-800)', margin: 0 }}>Safer vessels. Safer waters.</h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-600)', margin: '18px 0 28px', textWrap: 'pretty' }}>
            A coalition of Florida boat liveries and water-sport operators committed to the safety of every passenger on our state's waterways.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <Button variant="primary" size="lg" onClick={() => onNav('directory')}>Find a certified operator</Button>
            <Button variant="secondary" size="lg" onClick={() => onNav('advisories')}>View safety advisories</Button>
          </div>
        </div>
        <img src="../../assets/fwsc-seal.png" alt="Seal of the Florida Water Sports Coalition" style={{ width: 280, height: 280, flex: 'none' }} />
      </section>

      <section style={{ background: 'var(--surface-navy)', borderTop: '1px solid var(--navy-900)', borderBottom: '3px solid var(--gold-500)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '28px 24px', display: 'flex', gap: 24, justifyContent: 'space-between' }}>
          {[['34', 'Member liveries'], ['11', 'Florida counties'], ['12,400', 'Passengers briefed in 2026'], ['0', 'Member fatalities since founding']].map(([n, l]) => (
            <div key={l} style={{ textAlign: 'center', flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: 34, fontWeight: 700, color: 'var(--gold-400)' }}>{n}</div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C8D2E4', marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '56px 24px 0' }}>
        <SectionRule eyebrow="Safety Programs" title="What the Coalition does" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
          <Card variant="certificate" eyebrow="Certification" title="Livery Safety Certification"
            footer={<Button size="sm" variant="ghost">Program details</Button>}>
            Annual vessel inspection, staff training, and pre-rental briefing standards for member operators.
          </Card>
          <Card variant="certificate" eyebrow="Education" title="Passenger Briefing Standard"
            footer={<Button size="sm" variant="ghost">Read the standard</Button>}>
            A uniform briefing every renter receives — life jackets, kill switches, and local waterway rules.
          </Card>
          <Card variant="certificate" eyebrow="Reporting" title="Incident Reporting Network"
            footer={<Button size="sm" variant="ghost">Report an incident</Button>}>
            Members report incidents within 24 hours so hazards are shared across the coalition and with the FWC.
          </Card>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { HomeScreen });
