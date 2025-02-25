import {
  AlertCircleIcon,
  AlertIcon,
  BastIcon,
  BastLogoFullIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronUpIcon,
  CloseIcon,
  MoreVerticalIcon,
  SkatLogoFullIcon,
  SpinnerIcon} from '../../assets';
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
  BastLogoFull: BastLogoFullIcon,
  SkatLogoFull: SkatLogoFullIcon,
  MoreVertical: MoreVerticalIcon
};

export type TIcons = keyof typeof Icons;

export const BAST_ICONS_BY_COLOR: Record<TBastColor, TIcons> = {
  brand: 'Bast',
  gray: 'Bast',
  warning: 'Alert',
  danger: 'AlertCircle',
  success: 'CheckCircle',
};
