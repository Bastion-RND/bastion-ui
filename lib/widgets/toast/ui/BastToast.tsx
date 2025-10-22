import clsx from 'clsx';
import { FC, ReactElement, useEffect, useState } from 'react';

import { TBastColor, useDebounce } from '../../../shared/lib';
import { withPortal } from '../../../shared/ui/hocs';
import { TToastItem, useToastActionsContext, useToastValueContext } from '../model/ToastValueContext';
import { BastToastCloseButton } from './BastToastCloseButton';

/**
 * Дефолтное значение, после которого Toast закроется автоматически
 */
const AUTOCLOSE_DURATION_DEFAULT = 5_000;

const TOAST_ANIMATION_DURATION = 500;

type TBastToastProps = TToastItem & { onClose: () => void };

const BAST_ICONS_BY_COLOR: Partial<Record<TBastColor, ReactElement>> = {
  brand: (
    <svg
      height="1em"
      width="auto"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 105 105"
      fill="currentColor"
    >
      <path d="M64.72 24.398c.35 1.222.7 2.575 1.05 3.972 4.33 16.283 11.065 41.645 13.165 49.547.306 1.09-.7 2.095-1.837 1.833-3.106-.742-8.31-2.052-11.022-2.707-2.493-9.298-4.942-18.596-7.435-27.981-6.56 7.159-13.078 14.23-19.595 21.346-3.673-.917-7.347-1.79-11.021-2.706-1.137-.262-1.531-1.66-.744-2.532 12.465-13.62 24.887-27.109 37.44-40.772Zm0-7.64a7.67 7.67 0 0 0-5.642 2.489l-10.76 11.742-28.472 30.907c-1.837 2.008-2.45 4.802-1.706 7.377.787 2.576 2.887 4.584 5.511 5.195l11.547 2.837 1.968.48a8.792 8.792 0 0 0 1.837.219 7.67 7.67 0 0 0 5.642-2.488L54.792 64.47v.131l3.849 14.406a7.572 7.572 0 0 0 5.554 5.456l13.471 3.318c.613.175 1.225.218 1.881.218a7.55 7.55 0 0 0 5.423-2.27c3.106-3.099 2.58-5.15.525-12.746L81.952 59.67l-8.878-33.308-1.05-3.972a7.572 7.572 0 0 0-5.554-5.457 8.792 8.792 0 0 0-1.837-.218l.087.044Z" />
    </svg>
  ),
  gray: (
    <svg
      height="1em"
      width="auto"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 105 105"
      fill="currentColor"
    >
      <path d="M64.72 24.398c.35 1.222.7 2.575 1.05 3.972 4.33 16.283 11.065 41.645 13.165 49.547.306 1.09-.7 2.095-1.837 1.833-3.106-.742-8.31-2.052-11.022-2.707-2.493-9.298-4.942-18.596-7.435-27.981-6.56 7.159-13.078 14.23-19.595 21.346-3.673-.917-7.347-1.79-11.021-2.706-1.137-.262-1.531-1.66-.744-2.532 12.465-13.62 24.887-27.109 37.44-40.772Zm0-7.64a7.67 7.67 0 0 0-5.642 2.489l-10.76 11.742-28.472 30.907c-1.837 2.008-2.45 4.802-1.706 7.377.787 2.576 2.887 4.584 5.511 5.195l11.547 2.837 1.968.48a8.792 8.792 0 0 0 1.837.219 7.67 7.67 0 0 0 5.642-2.488L54.792 64.47v.131l3.849 14.406a7.572 7.572 0 0 0 5.554 5.456l13.471 3.318c.613.175 1.225.218 1.881.218a7.55 7.55 0 0 0 5.423-2.27c3.106-3.099 2.58-5.15.525-12.746L81.952 59.67l-8.878-33.308-1.05-3.972a7.572 7.572 0 0 0-5.554-5.457 8.792 8.792 0 0 0-1.837-.218l.087.044Z" />
    </svg>
  ),
  warning: (
    <svg
      height="1em"
      width="auto"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 105 105"
      fill="currentColor"
    >
      <path d="M86.344 68.337 62.022 23.884c-4.017-7.38-14.585-7.38-18.602 0L19.097 68.337c-3.842 7.074 1.267 15.677 9.301 15.677h48.645c8.035 0 13.144-8.603 9.301-15.677Zm-13.798 7.73h-39.65c-4.061 0-6.594-4.324-4.672-7.86l19.824-36.244c2.01-3.712 7.293-3.712 9.301 0l19.869 36.243c1.921 3.537-.655 7.86-4.672 7.86Z" />
      <path d="m56 41.078-1.092 16.55c-.087 1.223-1.135 2.14-2.314 2.053a2.243 2.243 0 0 1-2.053-2.053l-1.091-16.55c-.175-4.585 6.724-4.585 6.55 0ZM52.722 70.385c-.524 0-1.048-.175-1.529-.48a3.038 3.038 0 0 1-1.004-1.223c-.218-.48-.262-1.048-.175-1.572a2.58 2.58 0 0 1 .743-1.398 2.58 2.58 0 0 1 1.397-.742c.524-.087 1.092-.044 1.572.175.48.218.917.567 1.223 1.004.305.437.48.96.48 1.528 0 .743-.306 1.398-.786 1.922a2.71 2.71 0 0 1-1.921.786Z" />
    </svg>
  ),
  danger: (
    <svg
      height="1em"
      width="auto"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 105 105"
      fill="currentColor"
    >
      <path d="m56.83 39.268-1.184 17.937c-.095 1.325-1.23 2.32-2.508 2.225a2.431 2.431 0 0 1-2.225-2.225L49.73 39.268c-.19-4.97 7.289-4.97 7.1 0ZM53.28 70.982c-.567 0-1.135-.19-1.656-.52a3.292 3.292 0 0 1-1.088-1.326c-.237-.52-.284-1.136-.19-1.704a2.795 2.795 0 0 1 .805-1.514c.426-.426.947-.71 1.514-.805.569-.095 1.184-.047 1.704.19.52.236.994.615 1.325 1.088.332.473.521 1.041.521 1.656 0 .805-.331 1.515-.852 2.083a2.936 2.936 0 0 1-2.082.852Z" />
      <path d="M53.278 26.632c14.672 0 26.645 11.974 26.645 26.645 0 14.672-11.974 26.646-26.645 26.646-14.672 0-26.646-11.974-26.646-26.646 0-14.671 11.974-26.645 26.646-26.645Zm0-8.282c-19.31 0-34.928 15.618-34.928 34.927 0 19.31 15.618 34.928 34.928 34.928 19.31 0 34.928-15.618 34.928-34.928 0-19.31-15.666-34.927-34.928-34.927Z" />
    </svg>
  ),
  success: (
    <svg
      height="1em"
      width="auto"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 105 105"
      fill="currentColor"
    >
      <path d="m86.814 33.402-32.609 34.36c-1.703 1.94-4.78 1.94-6.53 0L33.333 51.67c-1.23-1.372-1.089-3.502.284-4.733 1.278-1.135 3.218-1.135 4.449 0l16.091 14.34h-6.531L82.08 28.67c3.077-2.934 7.667 1.61 4.733 4.733Z" />
      <path d="M52.835 26.632c14.671 0 26.645 11.974 26.645 26.645 0 14.672-11.974 26.646-26.645 26.646-14.672 0-26.646-11.974-26.646-26.646 0-14.671 11.974-26.645 26.646-26.645Zm0-8.282c-19.31 0-34.928 15.618-34.928 34.927 0 19.31 15.618 34.928 34.928 34.928 19.31 0 34.927-15.618 34.927-34.928 0-19.31-15.665-34.927-34.927-34.927Z" />
    </svg>
  ),
};

const BastToastWithoutPortal: FC<TBastToastProps> = ({
  color = 'gray',
  autoClose = true,
  onClose,
  text,
  duration = AUTOCLOSE_DURATION_DEFAULT,
}) => {
  const [isVisible, setVisible] = useState<boolean>(true);
  const isVisibleDebounced = useDebounce(isVisible, TOAST_ANIMATION_DURATION);
  const Icon = BAST_ICONS_BY_COLOR[color];

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
      {Icon}
      <h5 className='toast__title'>{text}</h5>
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

export { BastToast, BastToastWithoutPortal };
