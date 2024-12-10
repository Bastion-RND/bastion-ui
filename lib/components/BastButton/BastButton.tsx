import clsx from 'clsx';
import { ComponentProps, FC, PropsWithChildren } from 'react';

interface IBastButtonProps extends Omit<ComponentProps<'button'>, 'type'>, PropsWithChildren {
  fill?: 'filled' | 'outlined' | 'cleared';
  size?: 'regular' | 'small';
  color?: 'brand';
  expand?: 'full' | 'block';
  type?: 'button' | 'submit';
}

export const BastButton: FC<IBastButtonProps> = ({
  fill = 'filled',
  size = 'regular',
  color = 'brand',
  expand,
  type = 'button',
  ...props
}) => (
  <button
    type={type === 'button' ? 'button' : 'submit'}
    className={`bast-button ${clsx(
      {
        [`bast-button--${color}`]: color,
        [`bast-button--${fill}`]: fill,
        'bast-button--small': size === 'small',
        [`bast-button--${expand}`]: expand !== undefined,
      },
    )}`}
    {...props}
  />
);
