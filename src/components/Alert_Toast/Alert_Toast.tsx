import { useState } from 'react';
import { BadgeIcon, CloseIcon } from '../icons/icons';
import './Alert_Toast.css';

type Props = {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title: string;
  text?: string;
  compact?: boolean;
  onClose?: () => void;
};

export function Alert({ variant = 'info', title, text, compact, onClose }: Props) {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  const close = () => {
    setOpen(false);
    onClose?.();
  };

  return (
    <div className={`alert alert-${variant}${compact ? ' alert-toast' : ''}`}>
      <span className="alert_icon">
        <BadgeIcon />
      </span>
      <div className="alert_body">
        <div className="alert_title">{title}</div>
        {text && <div className="alert_text">{text}</div>}
      </div>
      <button type="button" className="alert_close" onClick={close}>
        <CloseIcon />
      </button>
    </div>
  );
}

export const Toast = (props: Omit<Props, 'text' | 'compact'>) => <Alert {...props} compact />;