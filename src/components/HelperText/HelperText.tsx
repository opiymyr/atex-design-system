import type { ReactNode } from 'react';
import './HelperText.css';

type HelperTextProps = {
  variant?: 'success' | 'error';
  children: ReactNode;
};

export function HelperText({ variant = 'success', children }: HelperTextProps) {
  return <span className={`helper-text helper-text-${variant}`}>{children}</span>;
}