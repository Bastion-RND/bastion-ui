import clsx from 'clsx';
import { ComponentPropsWithRef, FC, PropsWithChildren } from 'react';

import type { TWithBastColor } from '../../../shared/lib/utility-types/color';

interface IBastButtonProps extends Omit<ComponentPropsWithRef<'button'>, 'type'>, PropsWithChildren {
  fill?: 'filled' | 'outlined' | 'cleared';
  size?: 'large' | 'small';
  expand?: 'full' | 'block';
  type?: 'button' | 'submit';
  shape?: 'round';
  iconOnly?: boolean;
}

export const BastButton: FC<TWithBastColor<IBastButtonProps>> = ({
  className,
  fill = 'filled',
  size = 'regular',
  color = 'brand',
  expand,
  type = 'button',
  shape,
  iconOnly,
  ...props
}) => (
  <button
    type={type === 'button' ? 'button' : 'submit'}
    className={`bast-button ${clsx(
      [
        className && className,
        size === 'small' && 'bast-button--small',
        `bast-button--${color}`,
        `bast-button--${fill}`,
        `bast-button--${expand}`,
         shape && `bast-button--${shape}`,
        iconOnly && 'bast-button--icon-only'
      ]
    )}`}
    {...props}
  />
);
