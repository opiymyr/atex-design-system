import type { ButtonHTMLAttributes } from 'react';
import { CheckCircleIcon, InfoIcon, TrashIcon } from '../icons/icons';
import '../SecondaryButton/SecondaryButton.css';

const icons = {
  info: InfoIcon,
  success: CheckCircleIcon,
  danger: TrashIcon,
  warning: InfoIcon,
  white: InfoIcon,
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof icons;
};

export function SecondaryButton({ variant = 'info', children, ...rest }: Props) {
  const Icon = icons[variant];

  return (
    <button type="button" className={`secondary-button secondary-button-${variant}`} {...rest}>
      <Icon />
      {children}
    </button>
  );
}