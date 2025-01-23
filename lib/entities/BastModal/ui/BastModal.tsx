import { ComponentProps, FC, forwardRef, MouseEvent, PropsWithChildren } from 'react';

import { withPortal } from '../../../shared/ui/hocs/withPortal';
import { ModalCard } from '../../../shared/ui/modalCard';
import type { TModalCardStaticProps } from '../../../shared/ui/modalCard/ui/ModalCard';
import { BastModalCloseButton } from './BastModalCloseButton';

type TBastModalProps = {
  closeButton?: boolean;
  backdropDismiss?: boolean;
  onClose?: () => void;
} & PropsWithChildren;

const BastModal: FC<TBastModalProps> = forwardRef<HTMLDivElement, TBastModalProps>(
  ({ closeButton = true, backdropDismiss = true, onClose, children }, ref) => {
    const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        onClose?.();
      }
    };

    return (
      <div
        role='presentation'
        ref={ref}
        className="modal__wrapper"
        onClick={backdropDismiss ? handleBackdropClick : undefined}
      >
        <ModalCard className="modal">
          {closeButton && <BastModalCloseButton onClick={onClose} />}
          {children}
        </ModalCard>
      </div>
    );
  },
);

const BastModalWithPortal: FC<ComponentProps<typeof BastModal>> & TModalCardStaticProps =
  Object.assign(withPortal(BastModal), ModalCard);

export { BastModalWithPortal as BastModal };
