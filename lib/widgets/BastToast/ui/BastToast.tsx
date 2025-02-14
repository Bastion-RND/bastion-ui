import clsx from 'clsx';
import { FC, useEffect, useState } from 'react';

import { useDebounce } from '../../../shared/lib';
import { withPortal } from '../../../shared/ui/hocs/withPortal';
import { BAST_ICONS_BY_COLOR, Icons } from '../../../shared/ui/icons';
import { TToastItem, useToastActionsContext, useToastValueContext } from '../model/ToastValueContext';
import { BastToastCloseButton } from './BastToastCloseButton';

/**
 * Дефолтное значение, после которого Toast закроется автоматически
 */
const AUTOCLOSE_DURATION_DEFAULT = 5_000;

const TOAST_ANIMATION_DURATION = 500;

type TBastToastProps = TToastItem & { onClose: () => void };

const BastToastWithoutPortal: FC<TBastToastProps> = ({
  color = 'gray',
  autoClose = true,
  onClose,
  text,
  duration = AUTOCLOSE_DURATION_DEFAULT,
}) => {
  const [isVisible, setVisible] = useState<boolean>(true);
  const isVisibleDebounced = useDebounce(isVisible, TOAST_ANIMATION_DURATION);

  const IconByColor = Icons[BAST_ICONS_BY_COLOR[color]];

  const handleClose = () => {
    setVisible(false);
  }

  useEffect(() => {
    if (!isVisibleDebounced) onClose();
  }, [isVisibleDebounced]);

  useEffect(() => {
    if (!autoClose) return undefined;

    const autoCloseTimeoutId = setTimeout(handleClose, duration);

    return () => {
      if (autoCloseTimeoutId) clearTimeout(autoCloseTimeoutId);
    };
  }, []);

  return (
    <div className={`${clsx(['toast', `toast--${color}`, isVisible && 'toast--visible'])}`}>
      <IconByColor />
      <h5>{text}</h5>
      <BastToastCloseButton onClick={handleClose} />
    </div>
  );
};

const BastToasts: FC = () => {
  const { toasts } = useToastValueContext();
  const { removeToast } = useToastActionsContext();

  return (
    <div className="toast__wrapper">
      {Object.entries(toasts).map(([key, { color, text, duration, autoClose }]) => (
        <BastToastWithoutPortal
          duration={duration}
          autoClose={autoClose}
          text={text}
          color={color}
          key={key}
          onClose={() => removeToast(key)}
        />
      ))}
    </div>
  );
};

const BastToast = withPortal(BastToasts);

export { BastToast };
