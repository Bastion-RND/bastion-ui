import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

import { capitalize } from '../utils/helpers';

type TBastButtonProps = PropsWithChildren<{
  fill?: 'filled' | 'outlined' | 'cleared';
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
    className={`bast-button ${clsx(
      {
        [`bast-button--${capitalize(color)}`]: color,
        [`bast-button--${capitalize(fill)}`]: fill,
        'bast-button--small': size === 'small',
        'bast-button--expanded': expanded,
      },
    )}`}
    {...props}
  />
);
