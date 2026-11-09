import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { List } from './List';
import { ListItem } from '../ListItem/ListItem';
import { Pagination } from '../Pagination/Pagination';

const meta = {
  title: 'Components/List',
  component: List,
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

const rows = [1, 2, 3, 4].map((n) => (
  <ListItem key={n} title="Пользователь" text="Пользователь" />
));

export const Default: Story = {
  args: { children: rows },
  render: (args) => {
    const [page, setPage] = useState(1);
    return (
      <List {...args} footer={<Pagination page={page} total={20} onChange={setPage} />} />
    );
  },
};