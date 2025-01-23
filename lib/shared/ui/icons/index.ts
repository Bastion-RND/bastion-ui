import AlertIcon from '../../assets/alert.svg?react';
import AlertCircleIcon from '../../assets/alert-circle.svg?react';
import BastIcon from '../../assets/bast.svg?react';
import CheckIcon from '../../assets/check.svg?react';
import CheckCircleIcon from '../../assets/check-circle.svg?react';
import CloseIcon from '../../assets/close.svg?react';
import { TBastColor } from '../../lib/utility-types/color';

export const Icons = {
  Check: CheckIcon,
  Close: CloseIcon,
  Bast: BastIcon,
  Alert: AlertIcon,
  AlertCircle: AlertCircleIcon,
  CheckCircle: CheckCircleIcon,
}

export type TIcons = keyof typeof Icons;

export const BAST_ICONS_BY_COLOR: Record<TBastColor, TIcons> = {
  brand: 'Bast',
  gray: 'Bast',
  warning: 'Alert',
  danger: 'AlertCircle',
  success: 'CheckCircle',
}
