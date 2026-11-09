import { useState } from 'react';
import { Checkbox } from './components/Checkbox/Checkbox';
import { Radio } from './components/Radio/Radio';
import { Switch } from './components/Switch/Switch';
import { Option } from './components/Option/Option';
import { Select } from './components/Select/Select';
import { Status } from './components/Status/Status';
import { HelperText } from './components/HelperText/HelperText';
import { Button } from './components/Button/Button';
import { SecondaryButton } from './components/SecondaryButton/SecondaryButton';
import { Badge } from './components/Badge/Badge';
import { Input } from './components/Input/Input';
import { Textarea } from './components/Textarea/Textarea';
import { Cell } from './components/Cell/Cell';
import { HeaderRow } from './components/HeaderRow/HeaderRow';
import { Row } from './components/Row/Row';
import { CalendarIcon, FilterIcon, InfoIcon } from './components/icons/icons';
import { InfoBar } from './components/InfoBar/InfoBar';
import { CompactRow } from './components/CompactRow/CompactRow';
import { Pagination } from './components/Pagination/Pagination';
import { PaginationLink } from './components/PaginationLink/PaginationLink';
import { Table } from './components/Table/Table';
import type { Item } from './components/Table/Table';
import { ListItem } from './components/ListItem/ListItem';
import { List } from './components/List/List';
import { EntityCard, ProjectCard, ClientCard } from './components/Card/Card';
import { BreadcrumbsItem } from './components/BreadcrumbsItem/BreadcrumbsItem';
import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs';
import { TabItem } from './components/TabItem/TabItem';
import { Tabs } from './components/Tabs/Tabs';
import { DropdownItem } from './components/DropdownItem/DropdownItem';
import { Dropdown, ContextMenu } from './components/Dropdown/Dropdown';
import { EditIcon } from './components/icons/icons';
import { NavigationItem } from './components/NavigationItem/Navigationitem';
import { NavigationItemCompact } from './components/NavigItemCompact/NavigItemCompact';
import { Navigation } from './components/Navigation/Navigation';
import { Modal } from './components/Modal/Modal';
import { Alert, Toast } from './components/Alert_Toast/Alert_Toast';
import { SearchInput } from './components/SearchInput/SearchInput';
import { Search } from './components/Search/Search';
import { Accent } from './components/Accent/Accent';
import { NewsIcon, PenIcon, TrashIcon,} from './components/icons/icons';

const options = [
  { id: '1', label: 'Вариант 1' },
  { id: '2', label: 'Вариант 1' },
  { id: '3', label: 'Вариант 1' },
  { id: '4', label: 'Вариант 1' },
];

const col = { display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' } as const;


const items: Item[] = Array.from({ length: 5 }, (_, i) => ({
  id: String(i),
  user: 'Пользователь',
  status: 'Статус',
  description: 'Описание',
  amount: 'Сумма',
}));

export default function App() {
  const [checked, setChecked] = useState(true);
  const [radio, setRadio] = useState('a');
  const [on, setOn] = useState(true);
  const [picked, setPicked] = useState<string[]>([]);
  const [filters, setFilters] = useState(['2', '4']);
  const [all, setAll] = useState(false);
  const [rowA, setRowA] = useState(false);
  const [rowB, setRowB] = useState(true);
  const [page, setPage] = useState(1);

  const togglePicked = (id: string) =>
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const rowProps = { user: 'Пользователь', status: 'Статус', description: 'Описание', amount: 'Сумма' };

  return (
    <div style={{ ...col, padding: 40, gap: 24 }}>
      <Checkbox label="Вариант 1" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
      <Radio name="radio" label="Вариант A" checked={radio === 'a'} onChange={() => setRadio('a')} />
      <Radio name="radio" label="Вариант B" checked={radio === 'b'} onChange={() => setRadio('b')} />
      <Switch label="Уведомления" checked={on} onChange={(e) => setOn(e.target.checked)} />

      <div style={{ width: 200 }}>
        <Option label="Вариант 1" selected={picked.includes('1')} onClick={() => togglePicked('1')} />
        <Option label="Вариант 2" selected={picked.includes('2')} onClick={() => togglePicked('2')} />
      </div>

      <div style={col}>
        <Status variant="blue">Статус</Status>
        <Status variant="green">Статус</Status>
        <Status variant="orange">Статус</Status>
        <Status variant="red">Статус</Status>
        <Status variant="purple">Статус</Status>
      </div>

      <div style={col}>
        <HelperText variant="success">Успешно</HelperText>
        <HelperText variant="error">Ошибка</HelperText>
      </div>

      <div style={col}>
        <Button icon={<CalendarIcon />}>Все события</Button>
      </div>

      <div style={col}>
        <SecondaryButton variant="info">Кнопка</SecondaryButton>
        <SecondaryButton variant="success">Кнопка</SecondaryButton>
        <SecondaryButton variant="danger">Кнопка</SecondaryButton>
        <SecondaryButton variant="warning">Кнопка</SecondaryButton>
        <SecondaryButton variant="white">Кнопка</SecondaryButton>
      </div>

      <div style={col}>
        <Badge variant="blue">Бейдж</Badge>
        <Badge variant="green">Бейдж</Badge>
        <Badge variant="orange">Бейдж</Badge>
        <Badge variant="red">Бейдж</Badge>
        <Badge variant="purple">Бейдж</Badge>
      </div>

      <div style={col}>
        <Input placeholder="Введите текст..." />
        <Input placeholder="Введите текст..." disabled />
        <Input placeholder="Введите текст..." status="success" />
        <Input placeholder="Введите текст..." status="error" />
        <HelperText variant="error">Ошибка</HelperText>
      </div>

      <div style={col}>
        <Input defaultValue="Какой-то текст" />
        <Input defaultValue="Какой-то текст" disabled />
        <Input defaultValue="Какой-то текст" status="success" />
        <Input defaultValue="Какой-то текст" status="error" />
        <HelperText variant="error">Ошибка</HelperText>
      </div>

      <div style={col}>
        <Textarea placeholder="Введите текст..." />
        <Textarea placeholder="Введите текст..." disabled />
        <Textarea placeholder="Введите текст..." status="success" />
        <Textarea placeholder="Введите текст..." status="error" />
        <HelperText variant="error">Ошибка</HelperText>
      </div>

      <div style={col}>
        <Textarea defaultValue="Какой-то текст" />
        <Textarea defaultValue="Какой-то текст" disabled />
        <Textarea defaultValue="Какой-то текст" status="success" />
        <Textarea defaultValue="Какой-то текст" status="error" />
      </div>

      <div style={col}>
        <Cell header icon={<FilterIcon />}>Пользователь</Cell>
        <Cell icon={<FilterIcon />}>Пользователь</Cell>

        <Cell
          header
          width={128}
          icon={<><InfoIcon /><InfoIcon /><FilterIcon /><FilterIcon /></>}
        />
        <Cell
          width={128}
          icon={<><InfoIcon /><InfoIcon /><FilterIcon /><FilterIcon /></>}
        />

        <Cell header loading />
        <Cell loading />
        <Cell header loading width={128} />
        <Cell loading width={128} />
      </div>

      <div style={{ width: 1318 }}>
        <HeaderRow checked={all} onCheck={setAll} />
        <Row {...rowProps} selected={rowA} onSelect={setRowA} />
        <Row {...rowProps} selected={rowB} onSelect={setRowB} />
        <Row {...rowProps} disabled />
        <Row loading />
      </div>

      <div style={{ height: 220 }}>
        <Select options={options} selected={filters} onChange={setFilters} />
      </div>

      <InfoBar status="Статус" variant="green" />

      <div style={col}>
        <CompactRow status="Статус" variant="green" user="Пользователь" description="Описание" />
        <CompactRow status="Статус" variant="green" user="Пользователь" description="Описание" disabled />
        <CompactRow loading />
      </div>

      <div style={col}>
        <PaginationLink direction="prev" />
        <PaginationLink direction="next" />
        <PaginationLink direction="page">1</PaginationLink>
        <PaginationLink direction="page" selected>1</PaginationLink>
      </div>

      <Pagination page={page} total={20} onChange={setPage} />
      <Pagination compact page={page} total={20} onChange={setPage} />

      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', width: 1652 }}>
        <Table items={items} page={page} pages={20} onPageChange={setPage} />

        <div
          style={{
            ...col,
            width: 310,
            height: 560,
            boxSizing: 'border-box',
            padding: 12,
            gap: 8,
            background: 'var(--color-white)',
            borderRadius: 'var(--radius-lg)',
          }}
        >
          <CompactRow status="Статус" variant="green" user="Пользователь" description="Описание" />
          <CompactRow status="Статус" variant="orange" user="Пользователь" description="Описание" />
          <CompactRow status="Статус" variant="red" user="Пользователь" description="Описание" />
          <div style={{ alignSelf: 'flex-end' }}>
            <Pagination compact page={page} total={20} onChange={setPage} />
          </div>
        </div>
      </div>

      <div style={{ ...col, width: 422, gap: 8 }}>
        <ListItem title="Пользователь" text="Пользователь" />
        <ListItem title="Пользователь" text="Пользователь" disabled />
      </div>

      <List footer={<Pagination page={page} total={20} onChange={setPage} />}>
        <ListItem title="Пользователь" text="Пользователь" />
        <ListItem title="Пользователь" text="Пользователь" />
        <ListItem title="Пользователь" text="Пользователь" />
        <ListItem title="Пользователь" text="Пользователь" />
      </List>

      <div style={col}>
        <EntityCard
          status="Статус"
          variant="green"
          name="Cybsparkle"
          task="Разработка новой дизайн-системы"
          contacts="+1 (234) 567-89-10"
          updated="Обновлено сегодня"
        />
        <ProjectCard
          title="Обзор проекта"
          result="200+ точек на карте, 500 регистраций, 15 локальных акций за первый квартал."
          updated="Обновлено сегодня"
        />
        <ClientCard
          status="Статус"
          variant="green"
          user="Пользователь"
          description="Описание"
          name="Клиент"
          text="Описание"
        />
      </div>
      <div style={col}>
        <BreadcrumbsItem>Главная</BreadcrumbsItem>
      </div>

      <Breadcrumbs items={['Главная', 'Новости', 'Статья']} />

      <div style={col}>
        <TabItem icon={<EditIcon />}>Кнопка</TabItem>
      </div>

      <Tabs
        tabs={[
          { id: '1', label: 'Кнопка' },
          { id: '2', label: 'Кнопка' },
        ]}
      />

      <div style={col}>
        <DropdownItem>Выбрать</DropdownItem>
        <DropdownItem disabled>Выбрать</DropdownItem>
        <DropdownItem error>Выбрать</DropdownItem>
      </div>

      <Dropdown
        items={[
          { id: '1', label: 'Выбрать' },
          { id: '2', label: 'Выбрать' },
          { id: '3', label: 'Выбрать', disabled: true },
        ]}
      />

      <ContextMenu
        items={[
          { id: '1', label: 'Выбрать' },
          { id: '2', label: 'Выбрать' },
          { id: '3', label: 'Выбрать', error: true },
          { id: '4', label: 'Выбрать', disabled: true },
        ]}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <NavigationItem icon={<EditIcon />}>Выбрать</NavigationItem>
    </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <NavigationItemCompact icon={<EditIcon />} />
    </div>
      <Navigation
        items={['1', '2', '3', '4'].map((id) => ({ id, label: 'Выбрать', icon: <PenIcon /> }))}
      />
      <Navigation
        compact
        items={['1', '2', '3', '4'].map((id) => ({ id, label: 'Выбрать', icon: <PenIcon /> }))}
      />

      <Modal
        height={205}
        title="Сохранить изменения?"
        actions={[
          { label: 'Кнопка', icon: <EditIcon /> },
          { label: 'Кнопка', icon: <EditIcon />, variant: 'primary' },
        ]}
      >
        Вы внесли изменения в <Accent>проект «А»</Accent>. Хотите сохранить их?
      </Modal>

      <Modal
        height={180}
        title="Удалить проект?"
        actions={[
          { label: 'Кнопка', icon: <EditIcon /> },
          { label: 'Кнопка', icon: <TrashIcon />, variant: 'danger' },
        ]}
      >
        Вы удаляете <Accent>проект «А»</Accent>. Действия необратимы.
      </Modal>

      <div style={col}>
        <Alert variant="info" title="Информация" text="Подробнее" />
        <Alert variant="success" title="Информация" text="Подробнее" />
        <Alert variant="warning" title="Информация" text="Подробнее" />
        <Alert variant="error" title="Информация" text="Подробнее" />
      </div>

      <div style={col}>
        <Toast variant="info" title="Информация" />
        <Toast variant="success" title="Информация" />
        <Toast variant="warning" title="Информация" />
        <Toast variant="error" title="Информация" />
      </div>

      <div style={col}>
        <SearchInput />
      </div>

      <Search
        found={10}
        results={[
          {
            id: '1',
            status: 'Ожидает',
            variant: 'orange',
            boxed: true,
            text: 'Создать разработку Дизайн системы за июнь',
          },
          {
            id: '2',
            status: 'Выполнено 29.06.25',
            variant: 'green',
            text: (
              <>
                Закрыть 5 заявок Марии до конца <Accent>июня</Accent>.
              </>
            ),
          },
          {
            id: '3',
            status: 'Новости',
            variant: 'blue',
            icon: <NewsIcon />,
            title: 'Плановые технические работы:',
            text: (
              <>
                Сообщаем, что в ночь с пятницы на субботу, 15–16 <Accent>июня</Accent> 2026 года, на
                нашей платформе пройдут плановые технические работы.
                <br />
                Приносим извинения за временные неудобства.
              </>
            ),
            updated: 'Обновлено 15.06.26',
          },
        ]}
      />
    </div>
  );
}