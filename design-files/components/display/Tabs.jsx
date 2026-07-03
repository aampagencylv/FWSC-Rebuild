import React from 'react';

export function Tabs({ tabs = [], value, defaultValue, onChange, style }) {
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && (typeof tabs[0] === 'string' ? tabs[0] : tabs[0].value)));
  const active = value !== undefined ? value : internal;
  const set = (v) => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return (
    <div role="tablist" style={{ display: 'flex', gap: '4px', borderBottom: '1px solid var(--border-default)', fontFamily: 'var(--font-sans)', ...style }}>
      {tabs.map((t) => {
        const tab = typeof t === 'string' ? { value: t, label: t } : t;
        const isActive = active === tab.value;
        return (
          <button
            key={tab.value}
            role="tab"
            aria-selected={isActive}
            onClick={() => set(tab.value)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)',
              fontWeight: isActive ? 'var(--weight-semibold)' : 'var(--weight-regular)',
              color: isActive ? 'var(--navy-800)' : 'var(--text-muted)',
              padding: '10px 14px', marginBottom: '-1px',
              borderBottom: isActive ? '3px solid var(--gold-500)' : '3px solid transparent',
              transition: 'color 120ms ease-out',
            }}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
