import type { Meta, StoryObj } from '@storybook/react-vite';
import { Search } from './Search';
import { Accent } from '../Accent/Accent';
import { NewsIcon } from '../icons/icons';

const meta = {
  title: 'Components/Search',
  component: Search,
  args: {
    found: 10,
    results: [
      {
        id: '1',
        status: 'Ожидает',
        variant: 'orange',
        boxed: true,
        text: 'Создать разработку Дизайн системы за июнь',
      },
      {
        id: '2',
        status: 'Выполнено 29.06.25',
        variant: 'green',
        text: (
          <>
            Закрыть 5 заявок Марии до конца <Accent>июня</Accent>.
          </>
        ),
      },
      {
        id: '3',
        status: 'Новости',
        variant: 'blue',
        icon: <NewsIcon />,
        title: 'Плановые технические работы:',
        text: (
          <>
            Сообщаем, что в ночь с пятницы на субботу, 15–16 <Accent>июня</Accent> 2026 года, на
            нашей платформе пройдут плановые технические работы.
            <br />
            Приносим извинения за временные неудобства.
          </>
        ),
        updated: 'Обновлено 15.06.26',
      },
    ],
  },
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};