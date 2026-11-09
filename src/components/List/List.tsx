import type { ReactNode } from 'react';
import './List.css';

type Props = { children: ReactNode; footer?: ReactNode };

export function List({ children, footer }: Props) {
  return (
    <div className="list">
      {children}
      {footer && <div className="list__footer">{footer}</div>}
    </div>
  );
}