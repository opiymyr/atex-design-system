import type { ButtonHTMLAttributes } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons/icons';
import '../Pagination/Pagination.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  direction?: 'prev' | 'next' | 'page';
  selected?: boolean;
};

export function PaginationLink({ direction = 'page', selected, children, ...rest }: Props) {
  if (direction === 'page') {
    return (
      <button type="button" className={selected ? 'page page--active' : 'page'} {...rest}>
        {children ?? 1}
      </button>
    );
  }

  const prev = direction === 'prev';

  return (
    <button type="button" className="page-link" {...rest}>
      {prev && <ChevronLeftIcon />}
      {prev ? 'Предыдущая' : 'Следующая'}
      {!prev && <ChevronRightIcon />}
    </button>
  );
}