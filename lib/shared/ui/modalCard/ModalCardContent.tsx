import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

type TModalCardContentProps = ComponentProps<'div'>;

const ModalCardContent: FC<TModalCardContentProps> = ({ className, ...props }) => (
  <div className={`${clsx(['modal-card__content', className && className])}`} {...props} />
);

export { ModalCardContent };
