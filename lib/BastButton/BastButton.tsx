import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

import { capitalize } from '../utils/helpers';
import classes from './index.module.scss';

type TBastButtonProps = PropsWithChildren<{
  fill?: 'filled' | 'outline' | 'clear';
  size?: 'regular' | 'small';
  color?: 'brand';
  expanded?: boolean;
}>;

export const BastButton: FC<TBastButtonProps> = ({
  fill = 'filled',
  size = 'regular',
  color = 'brand',
  expanded = false,
  ...props
}) => (
  <button
    type="button"
    className={`${classes.bastButton} ${classes.bastButton + capitalize(color)} ${classes.bastButton + capitalize(fill)} ${clsx(
      {
        [classes.bastButtonPrimary]: color === 'brand',
        [classes.bastButtonFilled]: fill === 'filled',
        [classes.bastButtonOutlined]: fill === 'outline',
        [classes.bastButtonCleared]: fill === 'clear',
        [classes.bastButtonSmall]: size === 'small',
        [classes.bastButtonExpanded]: expanded,
      },
    )}`}
    {...props}
  />
);
