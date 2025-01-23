import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

import { TWithBastColor } from '../../../shared/lib/utility-types/color';
import { withPortal } from '../../../shared/ui/hocs/withPortal';
import { BAST_ICONS_BY_COLOR, Icons } from '../../../shared/ui/icons';

type TBastAlertProps = PropsWithChildren<TWithBastColor>;

const BastAlertWithoutPortal: FC<TBastAlertProps> = ({ color = 'gray', children }) => {
  const IconByColor = Icons[BAST_ICONS_BY_COLOR[color]];

  return (
    <div className="alert__wrapper">
      <div className={`${clsx(['alert', `alert--${color}`])}`}>
        <IconByColor />
        {children}
      </div>
    </div>
  );
};

const BastAlert = withPortal(BastAlertWithoutPortal);

export { BastAlert };
