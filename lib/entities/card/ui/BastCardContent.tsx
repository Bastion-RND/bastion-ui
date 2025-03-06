import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

type TBastCardContentProps = ComponentProps<'div'>;

const BastCardContent: FC<TBastCardContentProps> = ({ className, ...props }) => (
  <div className={`${clsx(['card__content', className && className])}`} {...props} />
);

export { BastCardContent };
