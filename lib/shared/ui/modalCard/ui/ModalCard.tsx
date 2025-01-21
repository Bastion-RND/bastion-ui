import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

import { ModalCardContent } from './ModalCardContent';
import { ModalCardFooter } from './ModalCardFooter';
import { ModalCardHeader } from './ModalCardHeader';
import { ModalCardTitle } from './ModalCardTitle';

const ModalCard: FC<ComponentProps<'div'>> & {
  Title: typeof ModalCardTitle,
  Header: typeof ModalCardHeader,
  Content: typeof ModalCardContent,
  Footer: typeof ModalCardFooter,
} = ({ className, ...props }) => (
  <div className={`${clsx(['modal-card', className && className])}`} {...props} />
);

ModalCard.Title = ModalCardTitle;
ModalCard.Header = ModalCardHeader;
ModalCard.Content = ModalCardContent;
ModalCard.Footer = ModalCardFooter;

export { ModalCard };
