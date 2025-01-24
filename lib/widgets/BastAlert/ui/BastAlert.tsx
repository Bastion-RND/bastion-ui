import clsx from 'clsx';
import { FC, useEffect } from 'react';

import { withPortal } from '../../../shared/ui/hocs/withPortal';
import { BAST_ICONS_BY_COLOR, Icons } from '../../../shared/ui/icons';
import { TAlertItem, useAlertContext } from '../model/AlertContext';
import { BastAlertCloseButton } from './BastAlertCloseButton';

/**
 * Дефолтное значение, после которого Alert закроется автоматически
 */
const AUTOCLOSE_DURATION_DEFAULT = 5_000;

type TBastAlertProps = TAlertItem & { onClose: () => void };

const BastAlertWithoutPortal: FC<TBastAlertProps> = ({
  color = 'gray',
  onClose,
  text,
  duration = AUTOCLOSE_DURATION_DEFAULT,
  autoClose,
}) => {
  const IconByColor = Icons[BAST_ICONS_BY_COLOR[color]];

  useEffect(() => {
    if (!autoClose) return undefined;

    const autoCloseTimeoutId = setTimeout(() => onClose(), duration);

    return () => {
      if (autoCloseTimeoutId) clearTimeout(autoCloseTimeoutId);
    };
  }, []);

  return (
    // <div className="alert__wrapper">
      <div className={`${clsx(['alert', `alert--${color}`])}`}>
        <IconByColor />
        {text}
        <BastAlertCloseButton onClick={onClose} />
      </div>
    // </div>
  );
};

const BastAlerts: FC = () => {
  const { alerts, removeAlert } = useAlertContext();

  return (
    <div className="alert__wrapper">
      {Object.entries(alerts).map(([key, { color, text, duration, autoClose }]) => (
        <BastAlertWithoutPortal
          duration={duration}
          autoClose={autoClose}
          text={text}
          color={color}
          key={key}
          onClose={() => removeAlert(key)}
        />
      ))}
    </div>
  );
};

const BastAlert = withPortal(BastAlerts);

export { BastAlert };
