import type { Meta, StoryObj } from '@storybook/react-vite';
import { DropdownItem } from './DropdownItem';

const meta = {
  title: 'Components/DropdownItem',
  component: DropdownItem,
  args: { children: 'Выбрать' },
} satisfies Meta<typeof DropdownItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Selected: Story = { args: { selected: true } };
export const Disabled: Story = { args: { disabled: true } };
export const Error: Story = { args: { error: true } };