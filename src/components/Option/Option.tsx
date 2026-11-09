import { CheckIcon } from '../icons/icons';
import '../Option/Option.css';

type OptionProps = {
  label: string;
  selected?: boolean;
  onClick?: () => void;
};

export function Option({ label, selected = false, onClick }: OptionProps) {
  return (
    <div
      role="option"
      aria-selected={selected}
      className={`option ${selected ? 'option-selected' : ''}`}
      onClick={onClick}
    >
      <span className="option_box">
        <CheckIcon />
      </span>
      <span className="option_label">{label}</span>
    </div>
  );
}