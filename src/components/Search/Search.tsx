import type { ReactNode } from 'react';
import { SearchInput } from '../SearchInput/SearchInput';
import { TabItem } from '../TabItem/TabItem';
import { InfoBar } from '../InfoBar/InfoBar';
import type { StatusVariant } from '../Status/Status';
import { CalendarIcon, ChevronRightIcon, NewsIcon, NotesIcon } from '../icons/icons';
import '../Search/Search.css';

export type SearchResult = {
  id: string;
  status: string;
  variant: StatusVariant;
  icon?: ReactNode;
  boxed?: boolean;
  title?: string;
  text: ReactNode;
  updated?: string;
};

type Props = {
  query?: string;
  onQueryChange?: (query: string) => void;
  found: number;
  results: SearchResult[];
};

export function Search({ query, onQueryChange, found, results }: Props) {
  return (
    <div className="search">
      <SearchInput value={query} onChange={onQueryChange} />
      <span className="search__found">Найдено {found} результатов:</span>

      <div className="search__tabs">
        <TabItem icon={<CalendarIcon />}>Задачи</TabItem>
        <TabItem icon={<NewsIcon />}>Новости</TabItem>
        <TabItem icon={<NotesIcon />}>Заметки</TabItem>
        <TabItem>
          Другое
          <ChevronRightIcon />
        </TabItem>
      </div>

      {results.map((r) => (
        <div key={r.id} className="search__result">
          <InfoBar status={r.status} variant={r.variant} icon={r.icon} />
          {r.boxed ? (
            <div className="search__box">{r.text}</div>
          ) : (
            <div className="search__text">
              {r.title && <div className="search__title">{r.title}</div>}
              {r.text}
            </div>
          )}
          {r.updated && <span className="search__updated">{r.updated}</span>}
        </div>
      ))}

      <div className="search__tabs search__more">
        <TabItem>
          Открыть все
          <ChevronRightIcon />
        </TabItem>
      </div>
    </div>
  );
}