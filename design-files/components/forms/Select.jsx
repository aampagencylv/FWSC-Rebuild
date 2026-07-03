import React from 'react';
import { Field } from './Input.jsx';

export function Select({ label, hint, error, required, options = [], style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const control = (
    <span style={{ position: 'relative', display: 'block' }}>
      <select
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: '100%',
          boxSizing: 'border-box',
          appearance: 'none',
          WebkitAppearance: 'none',
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-base)',
          color: 'var(--text-body)',
          background: 'var(--surface-input)',
          border: `1px solid ${error ? 'var(--status-danger)' : focus ? 'var(--navy-800)' : 'var(--border-default)'}`,
          borderRadius: 'var(--rad-sm, var(--radius-sm))',
          padding: '10px 34px 10px 12px',
          minHeight: '40px',
          outline: focus ? '2px solid var(--focus-ring)' : 'none',
          outlineOffset: '1px',
          cursor: 'pointer',
          ...style,
        }}
        {...rest}
      >
        {options.map((o) => {
          const opt = typeof o === 'string' ? { value: o, label: o } : o;
          return <option key={opt.value} value={opt.value}>{opt.label}</option>;
        })}
      </select>
      <span aria-hidden="true" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-58%)', pointerEvents: 'none', color: 'var(--navy-800)', fontSize: '11px' }}>▾</span>
    </span>
  );
  if (!label && !hint && !error) return control;
  return <Field label={label} hint={hint} error={error} required={required}>{control}</Field>;
}
