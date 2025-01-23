import { FC } from 'react';

import { TWithBastColor } from '../../../shared/lib/utility-types/color';
import { withPortal } from '../../../shared/ui/hocs/withPortal';
import { BAST_ICONS_BY_COLOR, Icons } from '../../../shared/ui/icons';
import { ModalCard } from '../../../shared/ui/modalCard';
import { BastButton } from '../../BastButton';
import { ACCEPT_BUTTON_DEFAULT_TEXT, CLOSE_BUTTON_DEFAULT_TEXT } from '../config/config';

type TBastDialog = TWithBastColor<{
  title?: string;
  content?: string;
  closeButtonText?: string;
  acceptButtonText?: string;
  onAccept?: () => void;
  onClose?: () => void;
}>;

const BastDialog: FC<TBastDialog> = ({
  closeButtonText = CLOSE_BUTTON_DEFAULT_TEXT,
  acceptButtonText = ACCEPT_BUTTON_DEFAULT_TEXT,
  title,
  content,
  onAccept,
  onClose,
  color = 'gray',
}) => {
  const Icon = Icons[BAST_ICONS_BY_COLOR[color]];

  return (
    <div className="dialog__wrapper">
      <ModalCard className="dialog">
        <ModalCard.Header className="dialog__header">
          {Icon && (
            <ModalCard.Icon color={color}>
              <Icon />
            </ModalCard.Icon>
          )}
          {title && <ModalCard.Title>{title}</ModalCard.Title>}
        </ModalCard.Header>
        {content && <ModalCard.Content className="dialog__content">{content}</ModalCard.Content>}
        <ModalCard.Footer
          style={{
            display: 'grid',
            gap: '10px',
            gridTemplateColumns: '1fr 1fr',
            gridAutoFlow: 'column',
          }}
        >
          <BastButton fill="outlined" color="gray" onClick={onClose}>
            {closeButtonText}
          </BastButton>
          <BastButton color={color} onClick={onAccept}>
            {acceptButtonText}
          </BastButton>
        </ModalCard.Footer>
      </ModalCard>
    </div>
  );
};

const BastDialogWithPortal = withPortal(BastDialog);

export { BastDialogWithPortal as BastDialog };
