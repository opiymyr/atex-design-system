import type { ReactNode } from 'react';
import { Status } from '../Status/Status';
import type { StatusVariant } from '../Status/Status';
import { CompactRow } from '../CompactRow/CompactRow';
import { ListItem } from '../ListItem/ListItem';
import { EditIcon, UserIcon } from '../icons/icons';
import './Card.css';

function Actions() {
  return (
    <div className="card_actions">
      <button type="button" className="card_button card_button--primary">
        <EditIcon />
        Кнопка
      </button>
      <button type="button" className="card_button">
        <EditIcon />
        Кнопка
      </button>
    </div>
  );
}

function Line({ label, children }: { label: string; children: ReactNode }) {
  return (
    <p className="card_line">
      <span className="card_label">{label}:</span> {children}
    </p>
  );
}

type EntityProps = {
  status: string;
  variant?: StatusVariant;
  name: string;
  task: string;
  contacts: string;
  updated: string;
};

export function EntityCard({ status, variant, name, task, contacts, updated }: EntityProps) {
  return (
    <div className="card card-entity">
      <Status variant={variant}>{status}</Status>
      <div className="card_user">
        <span className="card_avatar">
          <UserIcon />
        </span>
        <span className="card_title">{name}</span>
      </div>
      <Line label="Задача">{task}</Line>
      <Line label="Контакты">{contacts}</Line>
      <span className="card_updated">{updated}</span>
      <Actions />
    </div>
  );
}

type ProjectProps = {
  title: string;
  result: string;
  updated: string;
};

export function ProjectCard({ title, result, updated }: ProjectProps) {
  return (
    <div className="card card--project">
      <span className="card__title">{title}</span>
      <Line label="Результаты">{result}</Line>
      <span className="card__updated">{updated}</span>
      <Actions />
    </div>
  );
}

type ClientProps = {
  status: string;
  variant?: StatusVariant;
  user: string;
  description: string;
  name: string;
  text: string;
};

export function ClientCard({ status, variant, user, description, name, text }: ClientProps) {
  return (
    <div className="card card--client">
      <CompactRow status={status} variant={variant} user={user} description={description} />
      <ListItem title={name} text={text} />
      <Actions />
    </div>
  );
}