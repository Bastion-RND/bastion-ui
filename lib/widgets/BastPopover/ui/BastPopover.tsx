import clsx from 'clsx';
import { FC, PropsWithChildren, ReactNode, useRef, useState } from 'react';

import { useDebounce } from '../../../shared/lib';
import { useOutsideClick } from '../../../shared/lib/outsideClick/useOutsideClick';

type TBastPopoverProps = PropsWithChildren<{
  trigger?: 'click' | 'hover';
  content: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}>;

const ANIMATION_DELAY = 300;

// TODO: Доделать поведение по триггеру ховер
const BastPopover: FC<TBastPopoverProps> = ({
  children,
  position = 'bottom',
  trigger = 'click',
  content,
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isOpenDebounced = useDebounce(isOpen, ANIMATION_DELAY);

  useOutsideClick(() => {
    if (trigger === 'click') setOpen(false);
  }, wrapperRef);

  const handleMouseOver = () => {
    if (trigger === 'hover') setOpen(true);
  };

  const handleMouseLeft = () => {
    if (trigger === 'hover') setOpen(false);
  };

  return (
    <div
      className="popover"
      ref={wrapperRef}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeft}
    >
      <div
        onClick={() => {
          if (trigger === 'click') setOpen((prev) => !prev);
        }}
      >
        {children}
      </div>
      <div
        className={clsx([
          'popover__content',
          isOpen && 'popover__content--open',
          `popover__content--${position}`,
        ])}
        hidden={!isOpenDebounced}
      >
        {content}
      </div>
    </div>
  );
};

export { BastPopover };
