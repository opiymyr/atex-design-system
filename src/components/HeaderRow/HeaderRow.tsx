import { Checkbox } from '../Checkbox/Checkbox';
import { Cell } from '../Cell/Cell';
import { FilterIcon } from '../icons/icons';
import { titles, widths } from '../columns';
import '../Row/Row.css';

type Props = {
  checked?: boolean;
  onCheck?: (checked: boolean) => void;
};

const keys = Object.keys(widths) as (keyof typeof widths)[];

export function HeaderRow({ checked, onCheck }: Props) {
  return (
    <div className="row">
      <span className="row__check">
        <Checkbox checked={!!checked} onChange={(e) => onCheck?.(e.target.checked)} />
      </span>
      {keys.map((key) => (
        <Cell key={key} header width={widths[key]} icon={<FilterIcon />}>
          {titles[key]}
        </Cell>
      ))}
    </div>
  );
}