import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from './Pagination';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    page: 1,
    total: 20,
    onChange: () => {},
    compact: false
  },
  render: (args) => {
    const [page, setPage] = useState(1);
    return <Pagination {...args} page={page} onChange={setPage} />;
  },
};

export const Compact: Story = {
  args: { page: 1, total: 20, compact: true, onChange: () => {} },
  render: (args) => {
    const [page, setPage] = useState(1);
    return <Pagination {...args} page={page} onChange={setPage} />;
  },
};