import React from 'react';

export function Tag({ children, onRemove, style }) {
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '7px',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)',
        color: 'var(--navy-800)', background: 'var(--white)',
        border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)',
        padding: '4px 10px', lineHeight: 1.3, whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {children}
      {onRemove && (
        <button
          onClick={onRemove}
          aria-label="Remove"
          style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--ink-400)', padding: 0, fontSize: '13px', lineHeight: 1 }}
        >
          ✕
        </button>
      )}
    </span>
  );
}
