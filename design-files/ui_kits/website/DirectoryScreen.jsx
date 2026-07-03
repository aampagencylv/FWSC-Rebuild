const { Button, Badge, Tag, Input, Select, Dialog } = window.FWSCDesignSystem_db6c3e;

const OPERATORS = [
  { name: 'Gulf Breeze Boat Rentals', city: 'Pensacola', region: 'Panhandle', vessels: ['Pontoon', 'Jet ski'], status: 'clear', since: 2026 },
  { name: 'Bay Pirate Watersports', city: 'St. Petersburg', region: 'Tampa Bay', vessels: ['Jet ski', 'Kayak'], status: 'clear', since: 2026 },
  { name: 'Crystal River Adventure Co.', city: 'Crystal River', region: 'Nature Coast', vessels: ['Pontoon', 'Kayak'], status: 'clear', since: 2026 },
  { name: 'Islamorada Livery & Charters', city: 'Islamorada', region: 'Florida Keys', vessels: ['Pontoon', 'Skiff'], status: 'caution', since: 2026 },
  { name: 'Intracoastal Watercraft LLC', city: 'Fort Lauderdale', region: 'Southeast', vessels: ['Jet ski'], status: 'clear', since: 2026 },
  { name: 'St. Johns River Outfitters', city: 'DeLand', region: 'Northeast', vessels: ['Kayak', 'Canoe'], status: 'clear', since: 2026 },
];

const statusLabel = { clear: 'Certified', caution: 'Under review' };

function DirectoryScreen() {
  const [q, setQ] = React.useState('');
  const [region, setRegion] = React.useState('All regions');
  const [sel, setSel] = React.useState(null);
  const rows = OPERATORS.filter((o) =>
    (region === 'All regions' || o.region === region) &&
    (q === '' || (o.name + o.city).toLowerCase().includes(q.toLowerCase()))
  );
  return (
    <main style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '48px 24px 0' }}>
      <SectionRule eyebrow="Member Directory" title="Certified operators" />
      <div style={{ display: 'flex', gap: 14, alignItems: 'flex-end', margin: '0 0 20px', maxWidth: 640 }}>
        <div style={{ flex: 2 }}><Input label="Search" placeholder="Operator or city" value={q} onChange={(e) => setQ(e.target.value)} /></div>
        <div style={{ flex: 1 }}><Select label="Region" value={region} onChange={(e) => setRegion(e.target.value)} options={['All regions', 'Panhandle', 'Tampa Bay', 'Nature Coast', 'Northeast', 'Southeast', 'Florida Keys']} /></div>
      </div>
      <div style={{ background: 'var(--white)', border: '1px solid var(--line-300)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-card)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-sans)', fontSize: 14.5 }}>
          <thead>
            <tr style={{ background: 'var(--parchment-200)' }}>
              {['Operator', 'Location', 'Vessels', 'Status', ''].map((h) => (
                <th key={h} style={{ textAlign: 'left', padding: '11px 16px', fontSize: 11.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--navy-800)', borderBottom: '1px solid var(--line-300)' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((o) => (
              <tr key={o.name} style={{ borderBottom: '1px solid var(--line-200)' }}>
                <td style={{ padding: '13px 16px', fontWeight: 600, color: 'var(--navy-800)' }}>{o.name}</td>
                <td style={{ padding: '13px 16px', color: 'var(--ink-600)' }}>{o.city} · {o.region}</td>
                <td style={{ padding: '13px 16px' }}><span style={{ display: 'inline-flex', gap: 6 }}>{o.vessels.map((v) => <Tag key={v}>{v}</Tag>)}</span></td>
                <td style={{ padding: '13px 16px' }}><Badge tone={o.status}>{statusLabel[o.status]}</Badge></td>
                <td style={{ padding: '13px 16px', textAlign: 'right' }}><Button size="sm" variant="ghost" onClick={() => setSel(o)}>View</Button></td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr><td colSpan="5" style={{ padding: '28px 16px', textAlign: 'center', color: 'var(--ink-400)' }}>No operators match your search.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <Dialog open={!!sel} onClose={() => setSel(null)} eyebrow="Certified Operator" title={sel && sel.name}
        actions={<Button onClick={() => setSel(null)}>Close</Button>}>
        {sel && (
          <div style={{ display: 'grid', gap: 8 }}>
            <div><b>Location:</b> {sel.city} · {sel.region}</div>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}><b>Vessels:</b> {sel.vessels.map((v) => <Tag key={v}>{v}</Tag>)}</div>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}><b>Status:</b> <Badge tone={sel.status}>{statusLabel[sel.status]}</Badge></div>
            <div><b>Member since:</b> {sel.since}</div>
          </div>
        )}
      </Dialog>
    </main>
  );
}

Object.assign(window, { DirectoryScreen });
