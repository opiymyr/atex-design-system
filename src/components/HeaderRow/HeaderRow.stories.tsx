import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { HeaderRow } from './HeaderRow';

const meta = {
  title: 'Components/HeaderRow',
  component: HeaderRow,
  decorators: [
    (Story) => (
      <div style={{ width: 1318, background: 'var(--color-surface)' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HeaderRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return <HeaderRow checked={checked} onCheck={setChecked} />;
  },
};