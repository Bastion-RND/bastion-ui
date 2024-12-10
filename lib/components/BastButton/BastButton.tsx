import clsx from 'clsx';
import { ComponentPropsWithRef, FC, PropsWithChildren } from 'react';

interface IBastButtonProps extends Omit<ComponentPropsWithRef<'button'>, 'type'>, PropsWithChildren {
  fill?: 'filled' | 'outlined' | 'cleared';
  size?: 'large' | 'small';
  color?: 'brand';
  expand?: 'full' | 'block';
  type?: 'button' | 'submit';
}

export const BastButton: FC<IBastButtonProps> = ({
  className,
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
        [`${className}`]: className !== undefined,
      },
    )}`}
    {...props}
  />
);
