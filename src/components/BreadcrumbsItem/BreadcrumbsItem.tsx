import { useState } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import '../Breadcrumbs/Breadcrumbs.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { selected?: boolean };

export function BreadcrumbsItem({ selected, onClick, ...rest }: Props) {
  const [own, setOwn] = useState(false);
  const active = selected ?? own;

  return (
    <button
      type="button"
      className={active ? 'crumb crumb-selected' : 'crumb'}
      onClick={(e) => {
        setOwn(!own);
        onClick?.(e);
      }}
      {...rest}
    />
  );
}