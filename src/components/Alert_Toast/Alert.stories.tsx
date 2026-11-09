import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert, Toast } from './Alert_Toast';

const variants = ['info', 'success', 'warning', 'error'];

const meta = {
  title: 'Components/Alert',
  component: Alert,
  args: { variant: 'info', title: 'Информация', text: 'Подробнее' },
  argTypes: {
    variant: { control: 'select', options: variants },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {};
export const Success: Story = { args: { variant: 'success' } };
export const Warning: Story = { args: { variant: 'warning' } };
export const Error: Story = { args: { variant: 'error' } };

export const ToastInfo: Story = {
  render: (args) => <Toast variant={args.variant} title={args.title} />,
};
export const ToastSuccess: Story = {
  args: { variant: 'success' },
  render: (args) => <Toast variant={args.variant} title={args.title} />,
};
export const ToastWarning: Story = {
  args: { variant: 'warning' },
  render: (args) => <Toast variant={args.variant} title={args.title} />,
};
export const ToastError: Story = {
  args: { variant: 'error' },
  render: (args) => <Toast variant={args.variant} title={args.title} />,
};