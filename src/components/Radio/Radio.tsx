import type { InputHTMLAttributes } from 'react';
import { CheckIcon } from '../icons/icons';
import '../Radio/Radio.css';

type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label?: string;
};

export function Radio({ label, ...rest }: RadioProps) {
  return (
    <label className="radio">
      <input type="radio" className="radio_input" {...rest} />
      <span className="radio_circle">
        <CheckIcon />
      </span>
      {label && <span className="radio_label">{label}</span>}
    </label>
  );
}