import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavigationItem } from './Navigationitem';
import { PenIcon } from '../icons/icons';

const meta = {
  title: 'Components/NavigationItem',
  component: NavigationItem,
  args: { children: 'Выбрать', icon: <PenIcon /> },
} satisfies Meta<typeof NavigationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Selected: Story = { args: { selected: true } };