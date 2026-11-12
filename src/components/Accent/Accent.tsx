import type { ReactNode } from 'react';

export const Accent = ({ children }: { children: ReactNode }) => (
  <span style={{ color: 'var(--color-accent)' }}>{children}</span>
);