import { ChevronLeftIcon, ChevronRightIcon } from '../icons/icons';
import '../Pagination/Pagination.css';

type Props = {
  page: number;
  total: number;
  onChange: (page: number) => void;
  compact?: boolean;
};

const getPages = (page: number, total: number): (number | '...')[] => {
  if (total <= 4) return Array.from({ length: total }, (_, i) => i + 1);
  if (page >= total - 2) return [total - 3, total - 2, total - 1, total];
  return [page, page + 1, '...', total];
};

export function Pagination({ page, total, onChange, compact }: Props) {
  const go = (n: number) => onChange(Math.min(total, Math.max(1, n)));

  if (compact) {
    return (
      <nav className="pagination">
        <button type="button" className="page" onClick={() => go(page - 1)}>
          <ChevronLeftIcon />
        </button>
        <span className="page page-active">{page}</span>
        <button type="button" className="page" onClick={() => go(page + 1)}>
          <ChevronRightIcon />
        </button>
      </nav>
    );
  }

  return (
    <nav className="pagination">
      <button type="button" className="page" onClick={() => go(page - 1)}>
        <ChevronLeftIcon />
      </button>

      {getPages(page, total).map((p, i) =>
        p === '...' ? (
          <span key={i} className="page page-dots">...</span>
        ) : (
          <button
            key={i}
            type="button"
            className={p === page ? 'page page-active' : 'page'}
            onClick={() => go(p as number)}
          >
            {p}
          </button>
        )
      )}

      <button type="button" className="page" onClick={() => go(page + 1)}>
        <ChevronRightIcon />
      </button>
    </nav>
  );
}