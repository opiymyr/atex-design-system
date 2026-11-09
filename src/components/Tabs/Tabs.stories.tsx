import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from './Tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  args: {
    tabs: [
      { id: '1', label: 'Кнопка' },
      { id: '2', label: 'Кнопка' },
    ],
  },
  argTypes: { tabs: { control: 'object' } },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};