import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';

const options = [
  { id: '1', label: 'Вариант 1' },
  { id: '2', label: 'Вариант 2' },
  { id: '3', label: 'Вариант 3' },
  { id: '4', label: 'Вариант 4' },
];

const meta = {
  title: 'Components/Select',
  component: Select,
  args: { options, label: 'Выбрать' },
  decorators: [
    (Story) => (
      <div style={{ height: 220 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

function Interactive({ initial, ...args }: React.ComponentProps<typeof Select> & { initial: string[] }) {
  const [selected, setSelected] = useState(initial);
  return <Select {...args} selected={selected} onChange={setSelected} />;
}

export const Default: Story = {
  render: (args) => <Interactive {...args} initial={[]} />,
};
