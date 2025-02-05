import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

const BastCardContent: FC<ComponentProps<'div'>> = ({ className, ...props }) => <div className={`${clsx(['card__content', className && className])}`} {...props} />;

export { BastCardContent };
