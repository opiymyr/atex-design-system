import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './Textarea';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  args: { placeholder: 'Введите текст...' },
  argTypes: {
    status: { control: 'select', options: [undefined, 'success', 'error'] },
    width: { control: { type: 'number', min: 160, max: 700, step: 10 } },
    height: { control: { type: 'number', min: 100, max: 500, step: 10 } },
    },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Placeholder: Story = {};
export const WithValue: Story = { args: { defaultValue: 'Какой-то текст' } };
export const Disabled: Story = { args: { disabled: true } };
export const Success: Story = { args: { status: 'success' } };
export const Error: Story = { args: { status: 'error' } };
export const Large: Story = { args: { width: 400, height: 260 } };
export const Small: Story = { args: { width: 200, height: 120 } };