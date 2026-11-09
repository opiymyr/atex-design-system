import type { ButtonHTMLAttributes } from 'react';
import { PenIcon } from '../icons/icons';
import './DropdownItem.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  error?: boolean;
  selected?: boolean;
};

export function DropdownItem({ error, selected, children, ...rest }: Props) {
  const cls = ['dropdown-item', error && 'dropdown-item--error', selected && 'dropdown-item--selected']
    .filter(Boolean)
    .join(' ');

  return (
    <button type="button" className={cls} {...rest}>
      <PenIcon />
      {children}
    </button>
  );
}