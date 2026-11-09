import type { Meta, StoryObj } from '@storybook/react-vite';
import { Status } from './Status';
import { StatusIcon, BadgeIcon, NewsIcon, NotesIcon, CalendarIcon, InfoIcon } from '../icons/icons';

const icons = {
  Default: <StatusIcon />,
  Badge: <BadgeIcon />,
  News: <NewsIcon />,
  Notes: <NotesIcon />,
  Calendar: <CalendarIcon />,
  Info: <InfoIcon />,
};

const meta = {
  title: 'Components/Status',
  component: Status,
  args: { children: 'Статус', variant: 'blue' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['blue', 'green', 'orange', 'red', 'purple'],
    },
    icon: {
      control: 'select',
      options: Object.keys(icons),
      mapping: icons,
    },
  },
} satisfies Meta<typeof Status>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blue: Story = { args: { variant: 'blue' } };
export const Green: Story = { args: { variant: 'green' } };
export const Orange: Story = { args: { variant: 'orange' } };
export const Red: Story = { args: { variant: 'red' } };
export const Purple: Story = { args: { variant: 'purple' } };
