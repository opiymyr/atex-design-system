import type { ReactNode } from 'react';
import './Cell.css';

type Props = {
  width?: number | 'fill';
  header?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
};

export function Cell({ width, header, loading, icon, children }: Props) {
  const style = width === 'fill' ? { flex: 1, minWidth: 0 } : { width: width ?? 158, flexShrink: 0 };
  const cls = ['cell', header && 'cell--header', loading && 'cell--loading'].filter(Boolean).join(' ');

  return (
    <div className={cls} style={style}>
      {!loading && children && <span className="cell__text">{children}</span>}
      {!loading && icon && <span className="cell__icon">{icon}</span>}
    </div>
  );
}