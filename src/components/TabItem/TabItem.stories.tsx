import type { Meta, StoryObj } from '@storybook/react-vite';
import { TabItem } from './TabItem';
import { EditIcon } from '../icons/icons';

const meta = {
  title: 'Components/TabItem',
  component: TabItem,
  args: { children: 'Кнопка', icon: <EditIcon /> }
} satisfies Meta<typeof TabItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Selected: Story = { args: { selected: true } };