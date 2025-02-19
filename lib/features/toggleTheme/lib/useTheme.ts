import { useThemeContext } from '../../../entities/theme';

export const useTheme = () => {
  const context = useThemeContext();

  if (!context) throw new Error('Application must be wrapped in BastUiProvider');

  return context.toggleTheme;
}