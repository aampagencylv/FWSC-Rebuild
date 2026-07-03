import React from 'react';
import { Button } from './Button.jsx';

export function IconButton({ label, children, variant = 'ghost', size = 'md', style, ...rest }) {
  const dims = { sm: 32, md: 40, lg: 48 };
  const d = dims[size] || 40;
  return (
    <Button
      variant={variant}
      size={size}
      aria-label={label}
      title={label}
      style={{ width: d, minWidth: d, height: d, minHeight: d, padding: 0, ...style }}
      {...rest}
    >
      {children}
    </Button>
  );
}
