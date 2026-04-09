import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

interface IBastInputGroupFeedback extends ComponentProps<'p'> {
  feedbackType?: 'error' | 'warning' | 'info' | 'success';
}

export const BastInputGroupFeedback: FC<IBastInputGroupFeedback> = ({
  children,
  className,
  feedbackType = 'info',
  ...props
}) => {
  const cls = clsx([
    'bast-input-group__feedback',
    feedbackType && `bast-input-group__feedback--${feedbackType}`,
    className && className,
  ]);

  return (
    <p className={cls} {...props}>
      {children}
    </p>
  );
};
