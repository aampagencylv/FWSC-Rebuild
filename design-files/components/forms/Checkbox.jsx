import React from 'react';

function boxLabel(children) {
  return (
    <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--text-body)', lineHeight: 1.4 }}>
      {children}
    </span>
  );
}

export function Checkbox({ checked, defaultChecked = false, onChange, disabled, children, style }) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const isOn = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(!isOn);
    onChange && onChange(!isOn);
  };
  return (
    <label style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, ...style }}>
      <input type="checkbox" checked={isOn} disabled={disabled} onChange={toggle} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span
        aria-hidden="true"
        style={{
          width: '18px', height: '18px', flex: 'none', marginTop: '1px',
          border: `1.5px solid ${isOn ? 'var(--navy-800)' : 'var(--ink-400)'}`,
          borderRadius: 'var(--radius-sm)',
          background: isOn ? 'var(--navy-800)' : 'var(--white)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background-color 120ms ease-out',
        }}
      >
        {isOn && (
          <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
            <path d="M1 4.5L4 7.5L10 1" stroke="var(--gold-400)" strokeWidth="2" strokeLinecap="square" />
          </svg>
        )}
      </span>
      {children && boxLabel(children)}
    </label>
  );
}
