import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal } from './Modal';
import { Accent } from '../Accent/Accent';
import { EditIcon, TrashIcon } from '../icons/icons';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  args: { title: 'Сохранить изменения?', height: 205 },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Save: Story = {
  args: {
    children: (
      <>
        Вы внесли изменения в <Accent>проект «А»</Accent>. Хотите сохранить их?
      </>
    ),
    actions: [
      { label: 'Кнопка', icon: <EditIcon /> },
      { label: 'Кнопка', icon: <EditIcon />, variant: 'primary' },
    ],
  },
};

export const Delete: Story = {
  args: {
    title: 'Удалить проект?',
    height: 180,
    children: (
      <>
        Вы удаляете <Accent>проект «А»</Accent>. Действия необратимы.
      </>
    ),
    actions: [
      { label: 'Кнопка', icon: <EditIcon /> },
      { label: 'Кнопка', icon: <TrashIcon />, variant: 'danger' },
    ],
  },
};