import React from 'react';

const tones = {
  neutral: { bg: 'var(--navy-050)', fg: 'var(--navy-800)', bd: 'var(--navy-100)' },
  gold: { bg: 'var(--gold-100)', fg: 'var(--gold-700)', bd: 'var(--gold-200)' },
  danger: { bg: 'var(--status-danger-bg)', fg: 'var(--status-danger)', bd: '#EACDC6' },
  caution: { bg: 'var(--status-caution-bg)', fg: 'var(--status-caution)', bd: '#EEDCA8' },
  clear: { bg: 'var(--status-clear-bg)', fg: 'var(--status-clear)', bd: '#C4E0CF' },
  info: { bg: 'var(--status-info-bg)', fg: 'var(--status-info)', bd: '#C6D8F0' },
};

export function Badge({ tone = 'neutral', children, style }) {
  const t = tones[tone] || tones.neutral;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xs)',
        fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase',
        color: t.fg, background: t.bg, border: `1px solid ${t.bd}`,
        borderRadius: 'var(--radius-pill)', padding: '4px 11px', lineHeight: 1.2, whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {children}
    </span>
  );
}
