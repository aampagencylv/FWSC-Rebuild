import React from 'react';

const base = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 'var(--weight-semibold)',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-sm)',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  lineHeight: 1,
  transition: 'background-color 140ms ease-out, color 140ms ease-out, border-color 140ms ease-out',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
};

const sizes = {
  sm: { fontSize: 'var(--text-sm)', padding: '8px 14px', minHeight: '32px' },
  md: { fontSize: 'var(--text-base)', padding: '10px 18px', minHeight: '40px' },
  lg: { fontSize: 'var(--text-md)', padding: '13px 24px', minHeight: '48px' },
};

const variants = {
  primary: {
    rest: { background: 'var(--action-primary)', color: 'var(--text-on-navy)' },
    hover: { background: 'var(--action-primary-hover)' },
    active: { background: 'var(--action-primary-active)' },
  },
  accent: {
    rest: { background: 'var(--action-accent)', color: 'var(--navy-900)' },
    hover: { background: 'var(--action-accent-hover)' },
    active: { background: 'var(--gold-700)', color: 'var(--white)' },
  },
  secondary: {
    rest: { background: 'transparent', color: 'var(--navy-800)', borderColor: 'var(--navy-800)' },
    hover: { background: 'var(--navy-050)' },
    active: { background: 'var(--navy-100)' },
  },
  ghost: {
    rest: { background: 'transparent', color: 'var(--navy-800)' },
    hover: { background: 'var(--navy-050)' },
    active: { background: 'var(--navy-100)' },
  },
  danger: {
    rest: { background: 'var(--status-danger)', color: 'var(--white)' },
    hover: { background: '#8E2A19' },
    active: { background: '#761F10' },
  },
};

export function Button({ variant = 'primary', size = 'md', disabled = false, children, style, ...rest }) {
  const [state, setState] = React.useState('rest');
  const v = variants[variant] || variants.primary;
  const dyn = state === 'active' ? { ...v.rest, ...v.hover, ...v.active } : state === 'hover' ? { ...v.rest, ...v.hover } : v.rest;
  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setState('hover')}
      onMouseLeave={() => setState('rest')}
      onMouseDown={() => setState('active')}
      onMouseUp={() => setState('hover')}
      style={{
        ...base,
        ...sizes[size],
        ...dyn,
        ...(disabled ? { opacity: 0.45, cursor: 'not-allowed' } : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
