import { FC } from 'react';

import { Icons, TIcons } from '../../../shared/ui/icons';

interface IBastIconProps {
  name: TIcons;
}

const BastIcon: FC<IBastIconProps> = ({ name }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) return null;

  return <IconComponent />;
};

export { BastIcon };