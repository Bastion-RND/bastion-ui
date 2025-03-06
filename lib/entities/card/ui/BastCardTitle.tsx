import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

const BastCardTitle: FC<ComponentProps<'header'>> = ({ className, ...props }) => (
    <header className={`${clsx(['card__title', className && className])}`} {...props} />
  );

export { BastCardTitle };
