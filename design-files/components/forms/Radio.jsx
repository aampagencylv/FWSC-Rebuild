import React from 'react';

export function Radio({ name, value, checked, onChange, disabled, children, style }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, fontFamily: 'var(--font-sans)', ...style }}>
      <input type="radio" name={name} value={value} checked={checked} disabled={disabled} onChange={() => onChange && onChange(value)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span
        aria-hidden="true"
        style={{
          width: '18px', height: '18px', flex: 'none', marginTop: '1px', borderRadius: '50%',
          border: `1.5px solid ${checked ? 'var(--navy-800)' : 'var(--ink-400)'}`,
          background: 'var(--white)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          transition: 'border-color 120ms ease-out',
        }}
      >
        {checked && <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: 'var(--navy-800)' }}></span>}
      </span>
      {children && <span style={{ fontSize: 'var(--text-base)', color: 'var(--text-body)', lineHeight: 1.4 }}>{children}</span>}
    </label>
  );
}

export function RadioGroup({ name, value, onChange, options = [], direction = 'column', style }) {
  return (
    <div role="radiogroup" style={{ display: 'flex', flexDirection: direction, gap: direction === 'column' ? '10px' : '20px', ...style }}>
      {options.map((o) => {
        const opt = typeof o === 'string' ? { value: o, label: o } : o;
        return (
          <Radio key={opt.value} name={name} value={opt.value} checked={value === opt.value} onChange={onChange}>
            {opt.label}
          </Radio>
        );
      })}
    </div>
  );
}
