import React from 'react';
import { Button } from '../forms/Button.jsx';

export function Dialog({ open, onClose, eyebrow, title, children, actions, width = 480 }) {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(14, 26, 52, 0.55)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px',
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--surface-card)', borderRadius: 'var(--radius-md)',
          borderTop: '3px solid var(--gold-500)',
          boxShadow: 'var(--shadow-overlay)',
          width: '100%', maxWidth: width,
          padding: 'var(--space-6)',
          fontFamily: 'var(--font-sans)',
        }}
      >
        {eyebrow && (
          <div style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--gold-700)', marginBottom: '8px' }}>
            {eyebrow}
          </div>
        )}
        {title && (
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-bold)', color: 'var(--text-heading)', lineHeight: 'var(--leading-snug)', marginBottom: '12px' }}>
            {title}
          </div>
        )}
        <div style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-body)', color: 'var(--text-body)' }}>{children}</div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: 'var(--space-5)' }}>
          {actions || <Button variant="primary" onClick={onClose}>Close</Button>}
        </div>
      </div>
    </div>
  );
}
