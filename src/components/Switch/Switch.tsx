import type { InputHTMLAttributes } from 'react';
import '../Switch/Switch.css';

type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label?: string;
};

export function Switch({ label, ...rest }: SwitchProps) {
  return (
    <label className="switch">
      <input type="checkbox" role="switch" className="switch_input" {...rest} />
      <span className="switch_track">
        <span className="switch_thumb" />
      </span>
      {label && <span className="switch_label">{label}</span>}
    </label>
  );
}