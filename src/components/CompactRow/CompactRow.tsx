import { InfoBar } from '../InfoBar/InfoBar';
import type { StatusVariant } from '../Status/Status';
import './CompactRow.css';

type Props = {
  status?: string;
  variant?: StatusVariant;
  user?: string;
  description?: string;
  disabled?: boolean;
  loading?: boolean;
};

export function CompactRow({ status, variant, user, description, disabled, loading }: Props) {
  const cls = ['compact-row', disabled && 'compact-row--disabled', loading && 'compact-row--loading']
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cls}>
      <InfoBar status={status} variant={variant} loading={loading} />
      <div className="compact-row__field">{user}</div>
      <div className="compact-row__field">{description}</div>
    </div>
  );
}