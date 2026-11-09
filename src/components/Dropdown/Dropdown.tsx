import { useState } from 'react';
import { DropdownItem } from '../DropdownItem/DropdownItem';
import './Dropdown.css';

type MenuItem = {
  id: string;
  label: string;
  disabled?: boolean;
  error?: boolean;
};

type Props = {
  items: MenuItem[];
  onSelect?: (id: string) => void;
};

function Menu({ items, onSelect, role }: Props & { role: string }) {
  const [selected, setSelected] = useState(items[0]?.id);

  return (
    <div className="dropdown" role={role}>
      {items.map((it) => (
        <DropdownItem
          key={it.id}
          disabled={it.disabled}
          error={it.error}
          selected={it.id === selected}
          onClick={() => {
            setSelected(it.id);
            onSelect?.(it.id);
          }}
        >
          {it.label}
        </DropdownItem>
      ))}
    </div>
  );
}

export const Dropdown = (props: Props) => <Menu {...props} role="listbox" />;
export const ContextMenu = (props: Props) => <Menu {...props} role="menu" />;