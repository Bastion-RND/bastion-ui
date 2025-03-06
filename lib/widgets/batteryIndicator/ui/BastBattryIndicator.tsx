import { FC } from 'react';

import { BastIcon } from '../../../entities/icon';
import { TIcons } from '../../../shared/ui/icons';

const BastBatteryIndicator: FC<{ percent: number; isCharging?: boolean }> = ({
  percent,
  isCharging = false,
}) => {
  let name: TIcons;

  if (percent >= 80) {
    name = isCharging ? 'BatteryChargingFull' : 'BatteryFull';
  } else if (percent >= 60) {
    name = isCharging ? 'BatteryChargingThreeQuarters' : 'BatteryThreeQuarters';
  } else if (percent >= 40) {
    name = isCharging ? 'BatteryChargingHalf' : 'BatteryHalf';
  } else if (percent >= 20) {
    name = isCharging ? 'BatteryChargingQuarter' : 'BatteryQuarter';
  } else {
    name = isCharging ? 'BatteryChargingEmpty' : 'BatteryEmpty';
  }

  return <BastIcon name={name} />;
};

export { BastBatteryIndicator };
