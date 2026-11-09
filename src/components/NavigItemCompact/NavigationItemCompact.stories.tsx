import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavigationItemCompact } from './NavigItemCompact';
import { PenIcon } from '../icons/icons';

const meta = {
  title: 'Components/NavigationItemCompact',
  component: NavigationItemCompact,
  args: { icon: <PenIcon /> },
} satisfies Meta<typeof NavigationItemCompact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Selected: Story = { args: { selected: true } };