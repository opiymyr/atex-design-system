import { useState } from 'react';
import { CloseIcon, SearchIcon } from '../icons/icons';
import '../SearchInput/SearchInput.css';

type Props = {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

export function SearchInput({ value, onChange, placeholder = 'Введите текст...' }: Props) {
  const [own, setOwn] = useState('');
  const text = value ?? own;

  const set = (v: string) => {
    setOwn(v);
    onChange?.(v);
  };

  return (
    <label className={text ? 'search-input search-input--filled' : 'search-input'}>
      <SearchIcon />
      <input
        className="search-input__field"
        value={text}
        placeholder={placeholder}
        onChange={(e) => set(e.target.value)}
      />
      {text && (
        <button type="button" className="search-input__clear" onClick={() => set('')}>
          <CloseIcon />
        </button>
      )}
    </label>
  );
}