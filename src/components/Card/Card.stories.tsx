import type { Meta, StoryObj } from '@storybook/react-vite';
import { EntityCard } from './Card';

const meta = {
  title: 'Components/Card',
  component: EntityCard,
} satisfies Meta<typeof EntityCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Entity: Story = {
  args: {
    status: 'Статус',
    variant: 'green',
    name: 'Cybsparkle',
    task: 'Разработка новой дизайн-системы',
    contacts: '+1 (234) 567-89-10',
    updated: 'Обновлено сегодня',
  },
};
