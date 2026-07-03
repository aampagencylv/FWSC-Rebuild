const { Button, Badge } = window.FWSCDesignSystem_db6c3e;

function SiteHeader({ page, onNav }) {
  const items = [
    ['home', 'Home'],
    ['advisories', 'Advisories'],
    ['directory', 'Operator Directory'],
  ];
  return (
    <header>
      <div style={{ background: 'var(--navy-900)', color: 'var(--gold-400)', fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', textAlign: 'center', padding: '7px 16px' }}>
        An official coalition of Florida boat liveries and water-sport operators
      </div>
      <div style={{ background: 'var(--navy-800)', borderBottom: '3px solid var(--gold-500)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
          <img src="../../assets/fwsc-seal.png" alt="FWSC seal" style={{ width: 56, height: 56, borderRadius: '50%', flex: 'none' }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 19, letterSpacing: '0.06em', color: '#F5EFDF' }}>FLORIDA WATER SPORTS COALITION</div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold-400)', marginTop: 3 }}>Safer Vessels · Safer Waters</div>
          </div>
          <nav style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            {items.map(([key, label]) => (
              <button key={key} onClick={() => onNav(key)} style={{
                background: page === key ? 'var(--navy-700)' : 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: page === key ? 600 : 500,
                color: page === key ? '#FFFFFF' : '#C8D2E4', padding: '10px 14px', borderRadius: 'var(--radius-sm)',
                borderBottom: page === key ? '2px solid var(--gold-500)' : '2px solid transparent',
              }}>{label}</button>
            ))}
            <Button variant="accent" size="sm" style={{ marginLeft: 10 }}>Become a member</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer style={{ background: 'var(--navy-900)', color: '#8FA0C2', marginTop: 64 }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '40px 24px', display: 'flex', gap: 48, alignItems: 'flex-start' }}>
        <img src="../../assets/fwsc-seal.png" alt="" style={{ width: 72, height: 72, borderRadius: '50%', flex: 'none' }} />
        <div style={{ fontSize: 13, lineHeight: 1.7, maxWidth: 380 }}>
          The Florida Water Sports Coalition is a voluntary association of boat liveries and water-sport operators dedicated to passenger safety on Florida waterways.
          <div style={{ marginTop: 12, color: '#5F719A' }}>© 2026 Florida Water Sports Coalition · Tallahassee, FL</div>
        </div>
        <div style={{ display: 'flex', gap: 48, marginLeft: 'auto', fontSize: 13.5 }}>
          <div style={{ display: 'grid', gap: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold-400)' }}>Coalition</span>
            <a href="#" style={{ color: '#C8D2E4', textDecoration: 'none' }}>About</a>
            <a href="#" style={{ color: '#C8D2E4', textDecoration: 'none' }}>Membership</a>
            <a href="#" style={{ color: '#C8D2E4', textDecoration: 'none' }}>Bylaws</a>
          </div>
          <div style={{ display: 'grid', gap: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold-400)' }}>Safety</span>
            <a href="#" style={{ color: '#C8D2E4', textDecoration: 'none' }}>Advisories</a>
            <a href="#" style={{ color: '#C8D2E4', textDecoration: 'none' }}>Report an incident</a>
            <a href="#" style={{ color: '#C8D2E4', textDecoration: 'none' }}>F.S. §327 resources</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SectionRule({ eyebrow, title }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold-700)' }}>{eyebrow}</div>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 700, color: 'var(--navy-800)', margin: '6px 0 12px' }}>{title}</div>
      <div style={{ borderTop: '2px solid var(--gold-500)', paddingTop: 3 }}><div style={{ borderTop: '1px solid var(--line-300)' }}></div></div>
    </div>
  );
}

Object.assign(window, { SiteHeader, SiteFooter, SectionRule });
