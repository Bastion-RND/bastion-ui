import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

import { ModalCardContent } from './ModalCardContent';
import { ModalCardFooter } from './ModalCardFooter';
import { ModalCardHeader } from './ModalCardHeader';
import { ModalCardIcon } from './ModalCardIcon';
import { ModalCardTitle } from './ModalCardTitle';

export type TModalCardStaticProps = {
  Title: typeof ModalCardTitle;
  Header: typeof ModalCardHeader;
  Content: typeof ModalCardContent;
  Footer: typeof ModalCardFooter;
  Icon: typeof ModalCardIcon;
};

type TModalCardProps = ComponentProps<'div'> & {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | 'full' | 'auto';
};

const ModalCard: FC<TModalCardProps> & TModalCardStaticProps = ({ className, size = 'auto', ...props }) => (
  <div className={`${clsx(['modal-card', className && className, size && `modal-card--${size}`])}`} {...props} />
);

ModalCard.Title = ModalCardTitle;
ModalCard.Header = ModalCardHeader;
ModalCard.Content = ModalCardContent;
ModalCard.Footer = ModalCardFooter;
ModalCard.Icon = ModalCardIcon;

export { ModalCard };
