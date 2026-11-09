import type { InputHTMLAttributes } from 'react';
import { CheckIcon } from '../icons/icons';
import './Checkbox.css';

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label?: string;
};

export function Checkbox({ label, ...rest }: CheckboxProps) {
  return (
    <label className="checkbox">
      <input type="checkbox" className="checkbox_input" {...rest} />
      <span className="checkbox_box">
        <CheckIcon />
      </span>
      {label && <span className="checkbox_label">{label}</span>}
    </label>
  );
}