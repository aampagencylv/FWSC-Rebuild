import React from 'react';

const tones = {
  danger: { fg: 'var(--status-danger)', bg: 'var(--status-danger-bg)', bd: 'var(--status-danger)', label: 'Danger' },
  caution: { fg: 'var(--status-caution)', bg: 'var(--status-caution-bg)', bd: 'var(--status-caution)', label: 'Caution' },
  clear: { fg: 'var(--status-clear)', bg: 'var(--status-clear-bg)', bd: 'var(--status-clear)', label: 'All clear' },
  info: { fg: 'var(--status-info)', bg: 'var(--status-info-bg)', bd: 'var(--status-info)', label: 'Notice' },
};

export function Alert({ tone = 'info', title, children, action, style }) {
  const t = tones[tone] || tones.info;
  return (
    <div
      role="alert"
      style={{
        display: 'flex', gap: '14px', alignItems: 'flex-start',
        background: t.bg, borderTop: `3px solid ${t.bd}`, border: `1px solid ${t.bd}`, borderTopWidth: '3px',
        borderRadius: 'var(--radius-sm)', padding: '14px 18px',
        fontFamily: 'var(--font-sans)', color: 'var(--text-body)',
        ...style,
      }}
    >
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: t.fg, marginBottom: title || children ? '4px' : 0 }}>
          {t.label}
        </div>
        {title && <div style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-base)', color: 'var(--text-heading)', marginBottom: children ? '3px' : 0 }}>{title}</div>}
        {children && <div style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-body)' }}>{children}</div>}
      </div>
      {action && <div style={{ flex: 'none' }}>{action}</div>}
    </div>
  );
}
