import type { Meta, StoryObj } from '@storybook/react-vite';
import { HelperText } from './HelperText';

const meta = {
  title: 'Components/HelperText',
  component: HelperText,
  args: { children: 'Успешно' },
} satisfies Meta<typeof HelperText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = { args: { variant: 'success' } };
export const Error: Story = { args: { variant: 'error', children: 'Ошибка' } };