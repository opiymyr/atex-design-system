import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { CalendarIcon } from '../icons/icons';

const meta = {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Все события' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithIcon: Story = { args: { icon: <CalendarIcon /> } };