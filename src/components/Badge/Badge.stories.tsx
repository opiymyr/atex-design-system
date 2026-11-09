import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  args: { children: 'Бейдж', variant: 'blue' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['blue', 'green', 'orange', 'red', 'purple'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blue: Story = {};
export const Green: Story = { args: { variant: 'green' } };
export const Orange: Story = { args: { variant: 'orange' } };
export const Red: Story = { args: { variant: 'red' } };
export const Purple: Story = { args: { variant: 'purple' } };