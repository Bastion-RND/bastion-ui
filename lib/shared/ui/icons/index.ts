import {
  AlertCircleIcon,
  AlertIcon,
  BastIcon,
  BastLogoFullIcon,
  BoxIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronUpIcon,
  CloseIcon,
  CloudIcon,
  ConnectIcon,
  CurrentIcon,
  EmailIcon,
  FlashIcon,
  GlassesIcon,
  LocationIcon,
  LogInIcon,
  LogOutIcon,
  MoonIcon,
  MoreVerticalIcon,
  OptionsIcon,
  PersonIcon,
  PhoneIcon,
  RainIcon,
  ScanIcon,
  SettingsIcon,
  ShieldIcon,
  SkatLogoFullIcon,
  SnowIcon,
  SpinnerIcon,
  SunIcon,
  TimeIcon,
  WaterIcon,
  WiFiIcon,
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
  BastLogoFull: BastLogoFullIcon,
  SkatLogoFull: SkatLogoFullIcon,
  MoreVertical: MoreVerticalIcon,
  Person: PersonIcon,
  Sun: SunIcon,
  Glasses: GlassesIcon,
  Moon: MoonIcon,
  LogIn: LogInIcon,
  LogOut: LogOutIcon,
  Options: OptionsIcon,
  Settings: SettingsIcon,
  Rain: RainIcon,
  Snow: SnowIcon,
  Water: WaterIcon,
  Cloud: CloudIcon,
  Current: CurrentIcon,
  Flash: FlashIcon,
  Phone: PhoneIcon,
  Time: TimeIcon,
  WiFi: WiFiIcon,
  Box: BoxIcon,
  Connect: ConnectIcon,
  Location: LocationIcon,
  Scan: ScanIcon,
  Shield: ShieldIcon,
  Email: EmailIcon,
};

export type TIcons = keyof typeof Icons;

export const BAST_ICONS_BY_COLOR: Record<TBastColor, TIcons> = {
  brand: 'Bast',
  gray: 'Bast',
  warning: 'Alert',
  danger: 'AlertCircle',
  success: 'CheckCircle',
};
