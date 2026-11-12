import type { ReactNode } from 'react';
import './Badge.css';

type Props = {
  variant?: 'blue' | 'green' | 'orange' | 'red' | 'purple';
  children: ReactNode;
};

export function Badge({ variant = 'blue', children }: Props) {
  return <span className={`badge badge-${variant}`}>{children}</span>;
}