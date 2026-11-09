import type { Meta, StoryObj } from '@storybook/react-vite';
import { InfoBar } from './InfoBar';

const meta = {
  title: 'Components/InfoBar',
  component: InfoBar,
  args: { status: 'Статус', variant: 'green' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['blue', 'green', 'orange', 'red', 'purple'],
    },
  },
} satisfies Meta<typeof InfoBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};