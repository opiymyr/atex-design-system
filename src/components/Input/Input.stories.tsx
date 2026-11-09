import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  args: { placeholder: 'Введите текст...' },
  argTypes: {
    status: { control: 'select', options: [undefined, 'success', 'error'] },
    width: { control: { type: 'number', min: 80, max: 600, step: 10 } },
    height: { control: { type: 'number', min: 32, max: 120, step: 2 } },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Placeholder: Story = {};
export const Disabled: Story = { args: { disabled: true } };
export const Success: Story = { args: { status: 'success' } };
export const Error: Story = { args: { status: 'error' } };
export const Wide: Story = { args: { width: 320 } };
export const Tall: Story = { args: { width: 240, height: 56 } };