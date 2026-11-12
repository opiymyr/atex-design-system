import { useState } from 'react';
import type { TextareaHTMLAttributes } from 'react';
import '../Textarea/Textarea.css';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  status?: 'success' | 'error';
  width?: number | string;
  height?: number | string;
};

export function Textarea({ status, width, height, maxLength = 450, value, defaultValue, disabled, onChange, ...rest }: Props) {
  const [inner, setInner] = useState(String(defaultValue ?? ''));
  const text = value === undefined ? inner : String(value);
  const cls = ['textarea', status && `textarea-${status}`, disabled && 'textarea-disabled']
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cls} style={{ width, height }}>
      <textarea
        {...rest}
        className="textarea_field"
        value={text}
        maxLength={maxLength}
        disabled={disabled}
        onChange={(e) => {
          setInner(e.target.value);
          onChange?.(e);
        }}
      />
      <span className="textarea_count">
        {maxLength - text.length}/{maxLength}
      </span>
    </div>
  );
}