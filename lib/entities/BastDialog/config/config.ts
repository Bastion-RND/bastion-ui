import { TBastColor } from '../../../shared/lib/utility-types/color';
import { TIcons } from '../../../shared/ui/icons';

export const CLOSE_BUTTON_DEFAULT_TEXT = 'Закрыть';

export const ACCEPT_BUTTON_DEFAULT_TEXT = 'Принять';

export const BAST_DIALOG_BUTTONS_BY_COLOR: Record<TBastColor, TIcons> = {
  brand: 'Bast',
  gray: 'Bast',
  warning: 'Alert',
  danger: 'AlertCircle',
  success: 'CheckCircle',
}
