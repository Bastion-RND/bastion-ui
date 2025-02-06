import { ComponentType, FC, forwardRef, MouseEvent, PropsWithChildren } from 'react';

import { Container } from '../../../shared/ui/container';
import { TWithPortalArgs, withPortal } from '../../../shared/ui/hocs/withPortal';
import { ModalCard } from '../../../shared/ui/modalCard';
import type { TModalCardStaticProps } from '../../../shared/ui/modalCard/ui/ModalCard';
import { BastModalCloseButton } from './BastModalCloseButton';

type TBastModalProps = {
  closeButton?: boolean;
  backdropDismiss?: boolean;
  onClose?: () => void;
} & PropsWithChildren;

const BastModalWithoutPortal: FC<TBastModalProps> = forwardRef<HTMLDivElement, TBastModalProps>(
  ({ closeButton = true, backdropDismiss = true, onClose, children }, ref) => {
    const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        onClose?.();
      }
    };

    return (
      <div
        role="presentation"
        ref={ref}
        className="modal__wrapper"
        onClick={backdropDismiss ? handleBackdropClick : undefined}
      >
        <ModalCard className="modal">
          {closeButton && <BastModalCloseButton onClick={onClose} />}
          <Container>
            {children}
          </Container>
        </ModalCard>
      </div>
    );
  },
);

const BastModal = Object.assign<
  ComponentType<TWithPortalArgs<TBastModalProps>>,
  TModalCardStaticProps
>(withPortal(BastModalWithoutPortal), ModalCard);

export { BastModal };
