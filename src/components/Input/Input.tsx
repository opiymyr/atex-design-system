import type { InputHTMLAttributes } from 'react';
import './Input.css';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  status?: 'success' | 'error';
  width?: number | string;
  height?: number | string;
};

export function Input({ status, width, height, style, ...rest }: Props) {
  return (
    <input
      {...rest}
      style={{ width, height, ...style }}
      className={status ? `input input-${status}` : 'input'}
    />
  );
}