import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { icon?: ReactNode };

export function Button({ icon, children, ...rest }: Props) {
  return (
    <button type="button" className="button" {...rest}>
      {icon}
      {children}
    </button>
  );
}