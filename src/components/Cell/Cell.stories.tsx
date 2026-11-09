import type { Meta, StoryObj } from '@storybook/react-vite';
import { Cell } from './Cell';
import { FilterIcon, InfoIcon } from '../icons/icons';

const meta = {
  title: 'Components/Cell',
  component: Cell,
  args: { children: 'Пользователь' },
} satisfies Meta<typeof Cell>;

export default meta;
type Story = StoryObj<typeof meta>;

const actions = (
  <>
    <InfoIcon />
    <InfoIcon />
    <FilterIcon />
    <FilterIcon />
  </>
);

export const WithIcon: Story = { args: { icon: <FilterIcon /> } };
export const Actions: Story = { args: { width: 128, children: undefined, icon: actions } };
export const Header: Story = { args: { header: true, icon: <FilterIcon /> } };
export const HeaderActions: Story = { args: { header: true, width: 128, children: undefined, icon: actions } };
export const Loading: Story = { args: { loading: true } };
export const LoadingShort: Story = { args: { loading: true, width: 128 } };
export const HeaderLoading: Story = { args: { header: true, loading: true } };