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
}) => (
  <p
    className={`bast-input-group__feedback ${clsx({
      [`${className}`]: className,
      [`feedback--${feedbackType}`]: feedbackType,
    })}`}
    {...props}
  >
    {children}
  </p>
);
