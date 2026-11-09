import type { Meta, StoryObj } from '@storybook/react-vite';
import { SecondaryButton } from './SecondaryButton';

const meta = {
  title: 'Components/SecondaryButton',
  component: SecondaryButton,
  args: { children: 'Кнопка', variant: 'info' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'danger', 'warning', 'white'],
    },
  },
} satisfies Meta<typeof SecondaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {};
export const Success: Story = { args: { variant: 'success' } };
export const Danger: Story = { args: { variant: 'danger' } };
export const Warning: Story = { args: { variant: 'warning' } };
export const White: Story = { args: { variant: 'white' } };