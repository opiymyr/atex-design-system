import { useState } from 'react';
import type { ReactNode } from 'react';
import { NavigationItem } from '../NavigationItem/Navigationitem';
import { NavigationItemCompact } from '../NavigItemCompact/NavigItemCompact';
import './Navigation.css';

type Props = {
  items: { id: string; label: string; icon: ReactNode }[];
  compact?: boolean;
};

export function Navigation({ items, compact }: Props) {
  const [active, setActive] = useState(items[0]?.id);

  return (
    <nav className={compact ? 'navigation navigation--compact' : 'navigation'}>
      {items.map((it) =>
        compact ? (
          <NavigationItemCompact
            key={it.id}
            icon={it.icon}
            selected={it.id === active}
            onClick={() => setActive(it.id)}
          />
        ) : (
          <NavigationItem
            key={it.id}
            icon={it.icon}
            selected={it.id === active}
            onClick={() => setActive(it.id)}
          >
            {it.label}
          </NavigationItem>
        )
      )}
    </nav>
  );
}