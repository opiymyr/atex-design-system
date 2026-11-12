import { MoonIcon, SunIcon } from '../icons/icons';
import './Theme.css';

export type ThemeValue = 'light' | 'dark';

type ThemeProps = {
  value: ThemeValue;
  onChange?: (value: ThemeValue) => void;
  disabled?: boolean;
};

export function Theme({ value, onChange, disabled }: ThemeProps) {
  const options = [
    { id: 'dark', label: 'Тёмная тема', icon: <MoonIcon /> },
    { id: 'light', label: 'Светлая тема', icon: <SunIcon /> },
  ] as const;

  return (
    <div
      className="theme"
      role="radiogroup"
      aria-label="Тема оформления"
      data-value={value}
    >
      <span className="theme_thumb" />
      {options.map(({ id, label, icon }) => (
        <button
          key={id}
          type="button"
          role="radio"
          aria-checked={value === id}
          aria-label={label}
          disabled={disabled}
          className={`theme_option${value === id ? ' theme_option-active' : ''}`}
          onClick={() => onChange?.(id)}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}