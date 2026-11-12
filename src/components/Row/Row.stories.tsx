import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Row } from './Row';

const meta = {
  title: 'Components/Row',
  component: Row,
  args: {
    user: 'Пользователь',
    status: 'Статус',
    variant: 'blue',
    description: 'Описание',
    amount: 'Сумма',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['blue', 'green', 'orange', 'red', 'purple'],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 1318, background: 'var(--color-surface)' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Row>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(false);
    return <Row {...args} selected={selected} onSelect={setSelected} />;
  },
};

export const Selected: Story = { args: { selected: true } };
export const Disabled: Story = { args: { disabled: true } };
export const Loading: Story = { args: { loading: true } };