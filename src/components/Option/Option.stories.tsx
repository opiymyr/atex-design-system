import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Option } from './Option';

const meta = {
  title: 'Components/Option',
  component: Option,
  args: { label: 'Вариант 1' },
} satisfies Meta<typeof Option>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ label }) => {
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(true);

    return (
      <div style={{ width: 200 }}>
        <Option label={label} selected={first} onClick={() => setFirst(!first)} />
        <Option label={label} selected={second} onClick={() => setSecond(!second)} />
      </div>
    );
  },
};