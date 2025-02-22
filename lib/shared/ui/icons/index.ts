import {
  AlertCircleIcon,
  AlertIcon,
  BastIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronUpIcon,
  CloseIcon, SpinnerIcon,
} from '../../assets';
import { TBastColor } from '../../lib';

export const Icons = {
  Check: CheckIcon,
  Close: CloseIcon,
  Bast: BastIcon,
  Alert: AlertIcon,
  AlertCircle: AlertCircleIcon,
  CheckCircle: CheckCircleIcon,
  ChevronUp: ChevronUpIcon,
  Spinner: SpinnerIcon,
}

export type TIcons = keyof typeof Icons;

export const BAST_ICONS_BY_COLOR: Record<TBastColor, TIcons> = {
  brand: 'Bast',
  gray: 'Bast',
  warning: 'Alert',
  danger: 'AlertCircle',
  success: 'CheckCircle',
}
