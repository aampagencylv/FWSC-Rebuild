import React from 'react';

export function Switch({ checked, defaultChecked = false, onChange, disabled, children, style }) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const isOn = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(!isOn);
    onChange && onChange(!isOn);
  };
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, fontFamily: 'var(--font-sans)', ...style }}>
      <input type="checkbox" role="switch" checked={isOn} disabled={disabled} onChange={toggle} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span
        aria-hidden="true"
        style={{
          width: '38px', height: '22px', flex: 'none', borderRadius: 'var(--radius-pill)',
          background: isOn ? 'var(--navy-800)' : 'var(--ink-400)',
          position: 'relative',
          transition: 'background-color 140ms ease-out',
        }}
      >
        <span style={{
          position: 'absolute', top: '3px', left: isOn ? '19px' : '3px',
          width: '16px', height: '16px', borderRadius: '50%',
          background: isOn ? 'var(--gold-400)' : 'var(--white)',
          transition: 'left 140ms ease-out, background-color 140ms ease-out',
          boxShadow: '0 1px 2px rgba(14,26,52,.3)',
        }}></span>
      </span>
      {children && <span style={{ fontSize: 'var(--text-base)', color: 'var(--text-body)' }}>{children}</span>}
    </label>
  );
}
