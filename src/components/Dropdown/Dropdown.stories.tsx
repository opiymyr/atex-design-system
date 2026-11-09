import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dropdown, ContextMenu } from './Dropdown';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  args: {
    items: [
      { id: '1', label: 'Выбрать' },
      { id: '2', label: 'Выбрать' },
      { id: '3', label: 'Выбрать', disabled: true },
    ],
  },
  argTypes: { items: { control: 'object' } },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Context: Story = {
  args: {
    items: [
      { id: '1', label: 'Выбрать' },
      { id: '2', label: 'Выбрать' },
      { id: '3', label: 'Выбрать', error: true },
      { id: '4', label: 'Выбрать', disabled: true },
    ],
  },
  render: (args) => <ContextMenu {...args} />,
};