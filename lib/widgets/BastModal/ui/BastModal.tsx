import clsx from 'clsx';
import { ComponentProps, ComponentType, FC, MouseEvent, PropsWithChildren } from 'react';

import { Backdrop } from '../../../shared/ui/backdrop';
import { TWithPortalArgs, withPortal } from '../../../shared/ui/hocs/withPortal';
import { ModalCard } from '../../../shared/ui/modalCard';
import type { TModalCardStaticProps } from '../../../shared/ui/modalCard/ui/ModalCard';
import { BastModalCloseButton } from './BastModalCloseButton';

type TBastModalProps = PropsWithChildren<{
  isOpen: boolean;
  closeButton?: boolean;
  backdropDismiss?: boolean;
  onClose?: () => void;
}> & Pick<ComponentProps<typeof ModalCard>, 'size'>;

const BastModalWithoutPortal: FC<TBastModalProps> = ({
  closeButton = true,
  backdropDismiss = true,
  isOpen,
  onClose,
  size,
  children,
}) => {
  const handleCloseModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClose?.();
  };

  return (
    <Backdrop show={isOpen} onDismiss={backdropDismiss ? onClose : undefined}>
      <ModalCard
        size={size}
        onClick={(e) => e.stopPropagation()}
        className={clsx(['modal', isOpen && 'modal--active'])}
      >
        {closeButton && <BastModalCloseButton onClick={handleCloseModal} />}
        {children}
      </ModalCard>
    </Backdrop>
  );
};

const BastModal = Object.assign<
  ComponentType<TWithPortalArgs<TBastModalProps>>,
  TModalCardStaticProps
>(withPortal(BastModalWithoutPortal), ModalCard);

export { BastModal };
