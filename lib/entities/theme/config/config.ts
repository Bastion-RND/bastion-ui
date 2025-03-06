import { TValuesFromLiteral } from '../../../shared/lib/utilityTypes';

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type TTheme = TValuesFromLiteral<typeof THEME>;
