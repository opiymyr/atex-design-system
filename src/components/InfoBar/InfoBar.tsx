import type { ReactNode } from 'react';
import { Status } from '../Status/Status';
import type { StatusVariant } from '../Status/Status';
import { DotsIcon } from '../icons/icons';
import './InfoBar.css';

type Props = {
  status?: string;
  variant?: StatusVariant;
  icon?: ReactNode;
  loading?: boolean;
};

export function InfoBar({ status, variant, icon, loading }: Props) {
  return (
    <div className="info-bar">
      {loading ? (
        <span className="info-bar__skeleton" />
      ) : (
        <Status variant={variant} icon={icon}>{status}</Status>
      )}
      <span className="info-bar__icon">
        <DotsIcon />
      </span>
    </div>
  );
}