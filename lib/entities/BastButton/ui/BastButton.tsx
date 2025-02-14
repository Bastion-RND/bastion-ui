import clsx from 'clsx';
import { ComponentPropsWithRef, FC, PropsWithChildren } from 'react';

import type { TBastColor } from '../../../shared/lib';

interface IBastButtonProps
  extends Omit<ComponentPropsWithRef<'button'>, 'type'>,
    PropsWithChildren {
  fill?: 'filled' | 'outlined' | 'cleared';
  size?: 'large' | 'small';
  expand?: boolean;
  type?: 'button' | 'submit';
  shape?: 'round' | 'default';
  iconOnly?: boolean;
  color?: TBastColor;
}

export const BastButton: FC<IBastButtonProps> = ({
  className,
  fill = 'filled',
  size = 'regular',
  color = 'brand',
  expand = false,
  type = 'button',
  shape,
  iconOnly,
  ...props
}) => (
  <button
    type={type === 'button' ? 'button' : 'submit'}
    className={`${clsx(['bast-button', size === 'small' && 'bast-button--small', `bast-button--${color}`, `bast-button--${fill}`, expand && `bast-button--expand`, shape && `bast-button--${shape}`, iconOnly && 'bast-button--icon-only', className && className])}`}
    {...props}
  />
);
