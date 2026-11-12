import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Theme } from './Theme';
import type { ThemeValue } from './Theme';

const meta = {
  title: 'Components/Theme',
  component: Theme,
  args: { value: 'light' },
} satisfies Meta<typeof Theme>;

export default meta;
type Story = StoryObj<typeof meta>;

function InteractiveDemo() {
  const [value, setValue] = useState<ThemeValue>('light');
  return <Theme value={value} onChange={setValue} />;
}

export const Interactive: Story = {
  args: { value: 'light' },
  render: () => <InteractiveDemo />,
};