import {
  AccumulatorIcon,
  AlertCircleIcon,
  AlertIcon,
  ArrowTopIcon,
  BackIcon,
  BastIcon,
  BastLogoFullIcon,
  BatteryChargingEmptyIcon,
  BatteryChargingFullIcon,
  BatteryChargingHalfIcon,
  BatteryChargingQuarterIcon,
  BatteryChargingThreeQuartersIcon,
  BatteryEmptyIcon,
  BatteryFullIcon,
  BatteryHalfIcon,
  BatteryQuarterIcon,
  BatteryThreeQuartersIcon,
  BluetoothIcon,
  BoilerIcon,
  BoxIcon,
  CellularIcon,
  ChargeIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronUpIcon,
  CircleFilledIcon,
  CircleIcon,
  CloseIcon,
  CloudIcon,
  ConnectIcon,
  CurrentIcon,
  DownloadIcon,
  EcoIcon,
  EditIcon,
  ElectricalPlugIcon,
  EmailIcon,
  ExternalLinkIcon,
  FileIcon,
  FilterIcon,
  FireIcon,
  FlashIcon,
  FullScreenIcon,
  GasSensorIcon,
  GlassesIcon,
  HomeIcon,
  LocationIcon,
  LockIcon,
  LogInIcon,
  LogOutIcon,
  MessageIcon,
  MinusIcon,
  MoonIcon,
  MoreVerticalIcon,
  NextIcon,
  NFCIcon,
  NotificationIcon,
  OptionsIcon,
  PersonIcon,
  PhoneIcon,
  PlusIcon,
  PresentIcon,
  ProcessorIcon,
  RainIcon,
  ReloadIcon,
  RepeatIcon,
  ScanIcon,
  SettingsIcon,
  ShieldIcon,
  SimistorIcon,
  SkatLogoFullIcon,
  SKUDIcon,
  SmallScreenIcon,
  SnowIcon,
  SocketIcon,
  SoundIcon,
  SoundOffIcon,
  SpinnerIcon,
  StabilizerIcon,
  StarIcon,
  StormIcon,
  SunIcon,
  TimeIcon,
  TimerIcon,
  TrashIcon,
  USBIcon,
  WaterIcon,
  WiFiIcon,
  BastIdFilledIcon,
  BastIdOutlinedIcon,
  BastIdClearedIcon,
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
  Cellular: CellularIcon,
  Circle: CircleIcon,
  CircleFilled: CircleFilledIcon,
  BatteryThreeQuarters: BatteryThreeQuartersIcon,
  BatteryEmpty: BatteryEmptyIcon,
  BatteryQuarter: BatteryQuarterIcon,
  BatteryFull: BatteryFullIcon,
  BatteryHalf: BatteryHalfIcon,
  BatteryChargingThreeQuarters: BatteryChargingThreeQuartersIcon,
  BatteryChargingHalf: BatteryChargingHalfIcon,
  BatteryChargingQuarter: BatteryChargingQuarterIcon,
  BatteryChargingFull: BatteryChargingFullIcon,
  BatteryChargingEmpty: BatteryChargingEmptyIcon,
  Sound: SoundIcon,
  Processor: ProcessorIcon,
  Eco: EcoIcon,
  Fire: FireIcon,
  Lock: LockIcon,
  ArrowTop: ArrowTopIcon,
  Socket: SocketIcon,
  SoundOff: SoundOffIcon,
  Back: BackIcon,
  Next: NextIcon,
  Reload: ReloadIcon,
  Repeat: RepeatIcon,
  FullScreen: FullScreenIcon,
  Accumulator: AccumulatorIcon,
  Charge: ChargeIcon,
  ElectricalPlug: ElectricalPlugIcon,
  Bluetooth: BluetoothIcon,
  Boiler: BoilerIcon,
  Download: DownloadIcon,
  Edit: EditIcon,
  Filter: FilterIcon,
  GasSensor: GasSensorIcon,
  ExternalLink: ExternalLinkIcon,
  File: FileIcon,
  Home: HomeIcon,
  Message: MessageIcon,
  NFC: NFCIcon,
  SKUD: SKUDIcon,
  Minus: MinusIcon,
  Simistor: SimistorIcon,
  Plus: PlusIcon,
  Present: PresentIcon,
  Stabilizer: StabilizerIcon,
  Notification: NotificationIcon,
  Storm: StormIcon,
  Star: StarIcon,
  Timer: TimerIcon,
  Trash: TrashIcon,
  USB: USBIcon,
  SmallScreen: SmallScreenIcon,
  BastIdFilled: BastIdFilledIcon,
  BastIdOutlined: BastIdOutlinedIcon,
  BastIdCleared: BastIdClearedIcon,
};

export type TIcons = keyof typeof Icons;

export const BAST_ICONS_BY_COLOR: Record<TBastColor, TIcons> = {
  brand: 'Bast',
  gray: 'Bast',
  warning: 'Alert',
  danger: 'AlertCircle',
  success: 'CheckCircle',
};
