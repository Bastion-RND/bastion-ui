import { FC } from 'react';

import { withPortal } from '../../../shared/ui/hocs/withPortal';
import { Icons } from '../../../shared/ui/icons';
import { ModalCard } from '../../../shared/ui/modalCard';
import { BastButton } from '../../BastButton';
import { BastModalCloseButton } from './BastModalCloseButton';

type TBastModalProps = {
  onClose?: () => void;
}

const BastModal: FC<TBastModalProps> = ({ onClose }) => (
  <div
    className='bast-modal__wrapper'
  >
    <ModalCard className="bast-modal">
      <ModalCard.Header>
        <ModalCard.Icon color='warning'>
          <Icons.Bast />
        </ModalCard.Icon>
        <ModalCard.Title>Какой-то важный текст</ModalCard.Title>
        <BastModalCloseButton onClick={onClose} />
      </ModalCard.Header>
      <ModalCard.Content>
        Мы что-то важное хотим вам сказать
      </ModalCard.Content>
      <ModalCard.Footer style={{ display: 'grid', gap: '10px', gridTemplateColumns: '1fr 1fr', gridAutoFlow: 'column' }}>
        <BastButton fill="outlined" color="gray">
          Не согласен
        </BastButton>
        <BastButton>Согласен</BastButton>
      </ModalCard.Footer>
    </ModalCard>
  </div>
);

const BastModalWithPortal = withPortal(BastModal);

export { BastModalWithPortal as BastModal };
