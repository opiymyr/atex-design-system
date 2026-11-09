import { useState } from 'react';
import { HeaderRow } from '../HeaderRow/HeaderRow';
import { Row } from '../Row/Row';
import { Pagination } from '../Pagination/Pagination';
import '../Table/Table.css';

export type Item = {
  id: string;
  user: string;
  status: string;
  description: string;
  amount: string;
};

type Props = {
  items: Item[];
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
};

const variants = ['blue', 'green', 'orange', 'red', 'purple'] as const;

export function Table({ items, page, pages, onPageChange }: Props) {
  const [selected, setSelected] = useState<string[]>([]);

  const select = (id: string, on: boolean) =>
    setSelected((s) => (on ? [...s, id] : s.filter((x) => x !== id)));

  return (
    <div className="table">
      <HeaderRow
        checked={items.length > 0 && selected.length === items.length}
        onCheck={(on) => setSelected(on ? items.map((i) => i.id) : [])}
      />

      <div>
        {items.map((it, i) => (
          <Row
            key={it.id}
            user={it.user}
            status={it.status}
            variant={variants[i % variants.length]}
            description={it.description}
            amount={it.amount}
            selected={selected.includes(it.id)}
            onSelect={(on) => select(it.id, on)}
          />
        ))}
      </div>

      <div className="table__footer">
        <Pagination page={page} total={pages} onChange={onPageChange} />
      </div>
    </div>
  );
}