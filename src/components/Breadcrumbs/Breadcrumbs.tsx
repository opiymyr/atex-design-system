import { useState } from 'react';
import { BreadcrumbsItem } from '../BreadcrumbsItem/BreadcrumbsItem';
import { ChevronRightIcon } from '../icons/icons';
import './Breadcrumbs.css';

type Props = {
  items: string[];
};

export function Breadcrumbs({ items }: Props) {
  const [current, setCurrent] = useState(items.length - 1);

  return (
    <nav className="breadcrumbs">
      {items.map((item, i) => (
        <span key={i} className="breadcrumbs__part">
          {i > 0 && (
            <span className="breadcrumbs__sep">
              <ChevronRightIcon />
            </span>
          )}
          <BreadcrumbsItem selected={i === current} onClick={() => setCurrent(i)}>
            {item}
          </BreadcrumbsItem>
        </span>
      ))}
    </nav>
  );
}