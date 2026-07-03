import React from 'react';

export function Card({ variant = 'default', eyebrow, title, children, footer, style }) {
  const isNavy = variant === 'navy';
  return (
    <div
      style={{
        background: isNavy ? 'var(--surface-navy)' : 'var(--surface-card)',
        border: isNavy ? '1px solid var(--navy-900)' : '1px solid var(--border-default)',
        borderTop: variant === 'certificate' ? '3px solid var(--gold-500)' : undefined,
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-card)',
        padding: 'var(--space-5)',
        fontFamily: 'var(--font-sans)',
        color: isNavy ? 'var(--text-on-navy)' : 'var(--text-body)',
        ...style,
      }}
    >
      {eyebrow && (
        <div style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: isNavy ? 'var(--gold-400)' : 'var(--gold-700)', marginBottom: '8px' }}>
          {eyebrow}
        </div>
      )}
      {title && (
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-bold)', color: isNavy ? 'var(--white)' : 'var(--text-heading)', lineHeight: 'var(--leading-snug)', marginBottom: children ? '10px' : 0 }}>
          {title}
        </div>
      )}
      {children && <div style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-body)', color: isNavy ? 'var(--text-on-navy)' : 'var(--text-body)' }}>{children}</div>}
      {footer && (
        <div style={{ marginTop: 'var(--space-4)', paddingTop: 'var(--space-3)', borderTop: isNavy ? '1px solid var(--navy-600)' : '1px solid var(--line-200)' }}>
          {footer}
        </div>
      )}
    </div>
  );
}
