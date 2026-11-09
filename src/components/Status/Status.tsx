import type { ReactNode } from 'react';
import { StatusIcon } from '../icons/icons';
import '../Status/Status.css';

export type StatusVariant = 'blue' | 'green' | 'orange' | 'red' | 'purple';

type Props = {
  variant?: StatusVariant;
  icon?: ReactNode;
  children: ReactNode;
};

export function Status({ variant = 'blue', icon = <StatusIcon />, children }: Props) {
  return (
    <span className={`status status--${variant}`}>
      {icon}
      <span>{children}</span>
    </span>
  );
}