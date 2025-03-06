import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

type TModalCardFooterProps = ComponentProps<'div'>;

const ModalCardFooter: FC<TModalCardFooterProps> = ({ className, ...props }) => (
  <div className={`${clsx(['modal-card__footer', className && className])}`} {...props} />
);

export { ModalCardFooter };
