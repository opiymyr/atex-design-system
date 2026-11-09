import type { Meta, StoryObj } from '@storybook/react-vite';
import { Navigation } from './Navigation';
import { PenIcon } from '../icons/icons';

const items = ['1', '2', '3', '4'].map((id) => ({
  id,
  label: 'Выбрать',
  icon: <PenIcon />,
}));

const meta = {
  title: 'Components/Navigation',
  component: Navigation,
  args: { items },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Compact: Story = { args: { compact: true } };