import { useState } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './NavigationItem.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
  selected?: boolean;
};

export function NavigationItem({ icon, selected, onClick, children, ...rest }: Props) {
  const [own, setOwn] = useState(false);
  const active = selected ?? own;

  return (
    <button
      type="button"
      aria-selected={active}
      className={active ? 'navig navig--selected' : 'navig'}
      onClick={(e) => {
        setOwn(!own);
        onClick?.(e);
      }}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}