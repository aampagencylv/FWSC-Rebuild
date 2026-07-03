import React from 'react';

export function Field({ label, hint, error, required, children }) {
  return (
    <label style={{ display: 'block', fontFamily: 'var(--font-sans)' }}>
      {label && (
        <span style={{ display: 'block', fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-heading)', marginBottom: '6px' }}>
          {label}{required && <span style={{ color: 'var(--status-danger)' }}> *</span>}
        </span>
      )}
      {children}
      {error ? (
        <span style={{ display: 'block', fontSize: 'var(--text-sm)', color: 'var(--status-danger)', marginTop: '5px' }}>{error}</span>
      ) : hint ? (
        <span style={{ display: 'block', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginTop: '5px' }}>{hint}</span>
      ) : null}
    </label>
  );
}

export function Input({ label, hint, error, required, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const control = (
    <input
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{
        width: '100%',
        boxSizing: 'border-box',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-base)',
        color: 'var(--text-body)',
        background: 'var(--surface-input)',
        border: `1px solid ${error ? 'var(--status-danger)' : focus ? 'var(--navy-800)' : 'var(--border-default)'}`,
        borderRadius: 'var(--radius-sm)',
        padding: '10px 12px',
        minHeight: '40px',
        outline: focus ? '2px solid var(--focus-ring)' : 'none',
        outlineOffset: '1px',
        transition: 'border-color 140ms ease-out',
        ...style,
      }}
      {...rest}
    />
  );
  if (!label && !hint && !error) return control;
  return <Field label={label} hint={hint} error={error} required={required}>{control}</Field>;
}
