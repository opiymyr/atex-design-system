import type { Meta, StoryObj } from '@storybook/react-vite';
import { PaginationLink } from './PaginationLink';

const meta = {
  title: 'Components/PaginationLink',
  component: PaginationLink,
  args: { direction: 'prev' },
  argTypes: {
    direction: { control: 'select', options: ['prev', 'next', 'page'] },
  },
} satisfies Meta<typeof PaginationLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Prev: Story = {};
export const Next: Story = { args: { direction: 'next' } };
export const Page: Story = { args: { direction: 'page', children: '1' } };
export const PageSelected: Story = { args: { direction: 'page', selected: true, children: '1' } };