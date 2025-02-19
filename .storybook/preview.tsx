import type { Preview } from '@storybook/react';
import '../lib/app/styles/bastion-ui.scss';
import { useLayoutEffect, useState } from 'react';
import { THEME, ThemeContext } from '../lib/entities/theme';
import { addons } from '@storybook/preview-api';
import { ToastProvider } from '../lib/app/providers/toast/ToastProvider';
import {
  VisuallyImpairedModeProvider
} from '../lib/app/providers/visuallyImpairedMode/VisuallyImpairedModeProvider.tsx';

const BG = {
  DARK: '#0F1F2C',
  LIGHT: '#fff',
};

const channel = addons.getChannel();

channel.on('globals:update', ({ globals }) => {
  if (globals.theme) {
    const backgroundColor = globals.theme === 'dark' ? BG.DARK : BG.LIGHT;
    channel.emit('updateGlobals', { globals: { backgrounds: { value: backgroundColor } } });
  }
});

const preview: Preview = {
  parameters: {
    backgrounds: {
      disable: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Color Scheme',
        icon: 'circlehollow',
        items: [
          { value: THEME.LIGHT, title: 'Light' },
          { value: THEME.DARK, title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { theme } = context.globals;
      const [localTheme, setLocalTheme] = useState<typeof theme>(theme);

      useLayoutEffect(() => {
        document.documentElement.dataset.theme = localTheme;
        context.globals.theme = localTheme;
      }, [localTheme]);

      const toggleTheme = () =>
        setLocalTheme((prev) => (prev === THEME.DARK ? THEME.LIGHT : THEME.DARK));

      return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <VisuallyImpairedModeProvider>
            <ToastProvider>
              <Story />
            </ToastProvider>
          </VisuallyImpairedModeProvider>
        </ThemeContext.Provider>
      );
    },
  ],
};

export default preview;
