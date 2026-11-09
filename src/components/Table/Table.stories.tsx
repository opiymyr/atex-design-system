import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table } from './Table';
import type { Item } from './Table';

const items: Item[] = Array.from({ length: 5 }, (_, i) => ({
  id: String(i),
  user: 'Пользователь',
  status: 'Статус',
  description: 'Описание',
  amount: 'Сумма',
}));

const meta = {
  title: 'Components/Table',
  component: Table,
  args: { items, page: 1, pages: 20, onPageChange: () => {} },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [page, setPage] = useState(1);
    return <Table {...args} page={page} onPageChange={setPage} />;
  },
};