import { DotsIcon, UserIcon } from '../icons/icons';
import './ListItem.css';

type Props = {
  title: string;
  text: string;
  disabled?: boolean;
  onClick?: () => void;
};

export function ListItem({ title, text, disabled, onClick }: Props) {
  return (
    <div
      className={disabled ? 'list-item list-item--disabled' : 'list-item'}
      onClick={disabled ? undefined : onClick}
    >
      <span className="list-item__avatar">
        <UserIcon />
      </span>
      <div className="list-item__body">
        <div className="list-item__title">{title}</div>
        <div className="list-item__text">{text}</div>
      </div>
      <span className="list-item__dots">
        <DotsIcon />
      </span>
    </div>
  );
}