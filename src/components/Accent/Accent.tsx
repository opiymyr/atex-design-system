import type { ReactNode } from 'react';

export const Accent = ({ children }: { children: ReactNode }) => (
  <span style={{ color: 'var(--color-primary)' }}>{children}</span>
);