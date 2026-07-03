const { Button, Alert, Badge, Tabs, Tag } = window.FWSCDesignSystem_db6c3e;

const ADVISORIES = [
  { tone: 'danger', title: 'Boat ramp closed — Matanzas Inlet', body: 'Storm damage to the north ramp. Use Bings Landing until further notice.', region: 'Northeast', issued: 'Jul 2, 2026', kind: 'Closures' },
  { tone: 'caution', title: 'Small craft advisory — Tampa Bay', body: 'Winds 20–25 kt through 6 PM EDT. Restrict rentals to protected waters.', region: 'Tampa Bay', issued: 'Jul 3, 2026', kind: 'Advisories' },
  { tone: 'caution', title: 'Manatee zone enforcement — Crystal River', body: 'FWC increasing idle-speed enforcement through Labor Day. Brief all renters.', region: 'Nature Coast', issued: 'Jun 28, 2026', kind: 'Advisories' },
  { tone: 'info', title: 'Updated briefing standard effective Aug 1', body: 'Revision 4 of the Passenger Briefing Standard adds kill-switch lanyard checks.', region: 'Statewide', issued: 'Jun 20, 2026', kind: 'Notices' },
  { tone: 'clear', title: 'Red tide advisory lifted — Sarasota', body: 'Water quality has returned to normal levels. Normal operations may resume.', region: 'Southwest', issued: 'Jun 18, 2026', kind: 'Notices' },
];

function AdvisoriesScreen() {
  const [tab, setTab] = React.useState('All');
  const rows = ADVISORIES.filter((a) => tab === 'All' || a.kind === tab);
  return (
    <main style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '48px 24px 0' }}>
      <SectionRule eyebrow="Official Notices" title="Waterway advisories" />
      <p style={{ fontSize: 15.5, lineHeight: 1.6, color: 'var(--ink-600)', maxWidth: 640, marginTop: -8 }}>
        Active advisories affecting member liveries and their passengers. Members are notified by email when an advisory is issued for their region.
      </p>
      <Tabs tabs={['All', 'Advisories', 'Closures', 'Notices']} value={tab} onChange={setTab} style={{ margin: '20px 0 24px' }} />
      <div style={{ display: 'grid', gap: 14 }}>
        {rows.map((a) => (
          <Alert key={a.title} tone={a.tone} title={a.title}
            action={<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}><Tag>{a.region}</Tag><span style={{ fontSize: 12, color: 'var(--ink-400)' }}>Issued {a.issued}</span></div>}>
            {a.body}
          </Alert>
        ))}
      </div>
    </main>
  );
}

Object.assign(window, { AdvisoriesScreen });
