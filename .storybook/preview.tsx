import type { Preview } from '@storybook/react-vite';
import '../src/styles/tok.css'
import '../src/index.css'

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;