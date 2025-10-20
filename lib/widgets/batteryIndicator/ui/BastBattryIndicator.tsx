import { FC, ReactElement } from 'react';

const BastBatteryIndicator: FC<{
  percent: number;
  isCharging?: boolean;
  icons: {
    BatteryChargingFull: ReactElement<SVGSVGElement, 'svg'>;
    BatteryFull: ReactElement<SVGSVGElement, 'svg'>;
    BatteryChargingThreeQuarters: ReactElement<SVGSVGElement, 'svg'>;
    BatteryThreeQuarters: ReactElement<SVGSVGElement, 'svg'>;
    BatteryChargingHalf: ReactElement<SVGSVGElement, 'svg'>;
    BatteryHalf: ReactElement<SVGSVGElement, 'svg'>;
    BatteryChargingQuarter: ReactElement<SVGSVGElement, 'svg'>;
    BatteryQuarter: ReactElement<SVGSVGElement, 'svg'>;
    BatteryChargingEmpty: ReactElement<SVGSVGElement, 'svg'>;
    BatteryEmpty: ReactElement<SVGSVGElement, 'svg'>;
  };
}> = ({ percent, isCharging = false, icons }) => {
  let icon: ReactElement<SVGSVGElement, 'svg'>;
  const {
    BatteryFull,
    BatteryChargingFull,
    BatteryChargingEmpty,
    BatteryChargingHalf,
    BatteryChargingQuarter,
    BatteryThreeQuarters,
    BatteryEmpty,
    BatteryHalf,
    BatteryQuarter,
    BatteryChargingThreeQuarters,
  } = icons;

  if (percent >= 80) {
    icon = isCharging ? BatteryChargingFull : BatteryFull;
  } else if (percent >= 60) {
    icon = isCharging ? BatteryChargingThreeQuarters : BatteryThreeQuarters;
  } else if (percent >= 40) {
    icon = isCharging ? BatteryChargingHalf : BatteryHalf;
  } else if (percent >= 20) {
    icon = isCharging ? BatteryChargingQuarter : BatteryQuarter;
  } else {
    icon = isCharging ? BatteryChargingEmpty : BatteryEmpty;
  }

  return icon;
};

export { BastBatteryIndicator };
