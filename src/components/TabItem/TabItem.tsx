import { useState } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import '../Tabs/Tabs.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
  selected?: boolean;
};

export function TabItem({ icon, selected, onClick, children, ...rest }: Props) {
  const [own, setOwn] = useState(false);
  const active = selected ?? own;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      className={active ? 'tab tab--selected' : 'tab'}
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