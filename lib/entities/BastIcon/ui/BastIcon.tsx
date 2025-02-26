import clsx from 'clsx';
import { FC } from 'react';

import { Icons, TIcons } from '../../../shared/ui/icons';

interface IBastIconProps {
  name: TIcons;
  className?: string;
}

const BastIcon: FC<IBastIconProps> = ({ name, className }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) return null;

  return <IconComponent className={`${clsx(['icon', className && className])}`} />;
};

export { BastIcon };
