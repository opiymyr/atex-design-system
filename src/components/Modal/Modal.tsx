import type { ReactNode } from 'react';
import './Modal.css';

type Action = {
  label: string;
  icon: ReactNode;
  variant?: 'soft' | 'primary' | 'danger';
  onClick?: () => void;
};

type Props = {
  title: string;
  children: ReactNode;
  actions: Action[];
  height?: number;
};

export function Modal({ title, children, actions, height }: Props) {
  return (
    <div className="modal" style={{ height }}>
      <div className="modal__title">{title}</div>
      <div className="modal__text">{children}</div>
      <div className="modal__actions">
        {actions.map((a, i) => (
          <button
            key={i}
            type="button"
            className={`modal__button modal__button--${a.variant ?? 'soft'}`}
            onClick={a.onClick}
          >
            {a.icon}
            {a.label}
          </button>
        ))}
      </div>
    </div>
  );
}