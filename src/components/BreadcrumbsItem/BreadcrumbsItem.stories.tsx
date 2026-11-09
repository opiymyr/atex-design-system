import type { Meta, StoryObj } from '@storybook/react-vite';
import { BreadcrumbsItem } from './BreadcrumbsItem';

const meta = {
  title: 'Components/BreadcrumbsItem',
  component: BreadcrumbsItem,
  args: { children: 'Главная' },
} satisfies Meta<typeof BreadcrumbsItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Selected: Story = { args: { selected: true } };