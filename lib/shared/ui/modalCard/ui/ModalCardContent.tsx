import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

const ModalCardContent: FC<ComponentProps<'div'>> = ({ className, ...props }) => (
  <div className={`${clsx(['modal-card__content', className && className])}`} {...props} />
);

export { ModalCardContent };
