import type { Meta, StoryObj } from '@storybook/react-vite';
import { CompactRow } from './CompactRow';

const meta = {
  title: 'Components/CompactRow',
  component: CompactRow,
  args: {
    status: 'Статус',
    variant: 'green',
    user: 'Пользователь',
    description: 'Описание',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['blue', 'green', 'orange', 'red', 'purple'],
    },
  },
} satisfies Meta<typeof CompactRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
export const Loading: Story = { args: { loading: true } };