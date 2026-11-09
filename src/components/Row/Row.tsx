import { Checkbox } from '../Checkbox/Checkbox';
import { Cell } from '../Cell/Cell';
import { Status } from '../Status/Status';
import type { StatusVariant } from '../Status/Status';
import { FilterIcon, InfoIcon } from '../icons/icons';
import { widths } from '../columns';
import '../Row/Row.css';

type Props = {
  user?: string;
  status?: string;
  variant?: StatusVariant;
  description?: string;
  amount?: string;
  selected?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onSelect?: (selected: boolean) => void;
};

export function Row({ user, status, variant = 'blue', description, amount, selected, disabled, loading, onSelect }: Props) {
  const cls = ['row', selected && 'row--selected', disabled && 'row--disabled'].filter(Boolean).join(' ');

  return (
    <div className={cls}>
      <span className="row__check">
        <Checkbox checked={!!selected} disabled={disabled} onChange={(e) => onSelect?.(e.target.checked)} />
      </span>
      <Cell width={widths.user} loading={loading}>
        {user}
      </Cell>
      <div className="row__status" style={{ width: widths.status }}>
        {loading ? <div className="row__skeleton" /> : <Status variant={variant}>{status}</Status>}
      </div>
      <Cell width={widths.description} loading={loading}>
        {description}
      </Cell>
      <Cell width={widths.amount} loading={loading}>
        {amount}
      </Cell>
      <Cell
        width={widths.actions}
        loading={loading}
        icon={
          <>
            <InfoIcon />
            <InfoIcon />
            <FilterIcon />
            <FilterIcon />
          </>
        }
      />
    </div>
  );
}