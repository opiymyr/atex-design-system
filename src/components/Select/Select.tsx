import { useEffect, useRef, useState } from 'react';
import { Option } from '../Option/Option';
import { ChevronIcon } from '../icons/icons';
import '../Select/Select.css';

type Props = {
  options: { id: string; label: string }[];
  selected?: string[];
  onChange?: (ids: string[]) => void;
  label?: string;
};

export function Select({ options, selected = [], onChange, label = 'Выбрать' }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const toggle = (id: string) =>
    onChange?.(selected.includes(id) ? selected.filter((s) => s !== id) : [...selected, id]);

  return (
    <div className={open ? 'select select--open' : 'select'} ref={ref}>
      <button type="button" className="select_trigger" onClick={() => setOpen(!open)}>
        {label}
        <span className="select_icon">
          <ChevronIcon />
        </span>
      </button>

      {open && (
        <div className="select_menu" role="listbox" aria-multiselectable="true">
          {options.map((o) => (
            <Option
              key={o.id}
              label={o.label}
              selected={selected.includes(o.id)}
              onClick={() => toggle(o.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}