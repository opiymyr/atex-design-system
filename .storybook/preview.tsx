import { useEffect } from 'react';
import type { Preview } from '@storybook/react-vite';
import '../src/styles/tok.css';
import '../src/index.css';

const preview: Preview = {
  tags: ['autodocs'],

  globalTypes: {
    theme: {
      description: 'Тема',
      toolbar: {
        title: 'Тема',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Светлая', icon: 'sun' },
          { value: 'dark', title: 'Тёмная', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: 'light' },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme === 'dark' ? 'dark' : 'light';

      useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
      }, [theme]);

      return (
        <div
          data-theme={theme}
          style={{ padding: 24, background: 'var(--color-page)', color: 'var(--color-text)' }}
        >
          <Story />
        </div>
      );
    },
  ],

  parameters: {
    backgrounds: { disabled: true },
  },
};

export default preview;