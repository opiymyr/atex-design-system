import type { Meta, StoryObj } from '@storybook/react-vite';
import { ListItem } from './ListItem';

const meta = {
  title: 'Components/ListItem',
  component: ListItem,
  args: { title: 'Пользователь', text: 'Пользователь' },
  decorators: [
    (Story) => (
      <div style={{ width: 422 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };