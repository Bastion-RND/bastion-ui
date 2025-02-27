import clsx from 'clsx';
import { ComponentProps, FC, PropsWithChildren, ReactNode, useRef, useState } from 'react';
import { usePopper } from 'react-popper';

import { useDebounce } from '../../../shared/lib';
import { useOutsideClick } from '../../../shared/lib/outsideClick/useOutsideClick';
import { Portal } from '../../../shared/ui/portal';

type TBastPopoverProps = PropsWithChildren<
  {
    trigger?: 'click' | 'hover';
    content: ReactNode;
    placement?:
      | 'auto'
      | 'auto-start'
      | 'auto-end'
      | 'top'
      | 'bottom'
      | 'right'
      | 'left'
      | 'top-start'
      | 'top-end'
      | 'bottom-start'
      | 'bottom-end'
      | 'right-start'
      | 'right-end'
      | 'left-start'
      | 'left-end';
  } & Pick<ComponentProps<'div'>, 'className' | 'style' | 'id'>
>;

const ANIMATION_DELAY = 300;

const BastPopover: FC<TBastPopoverProps> = ({
  children,
  trigger = 'click',
  placement,
  content,
  className,
  style,
  id,
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const isOpenDebounced = useDebounce(isOpen, ANIMATION_DELAY);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerWrapperRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  let timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null).current;

  const { styles, attributes } = usePopper(triggerWrapperRef.current, contentWrapperRef.current, {
    placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
      {
        name: 'flip',
        options: {
          flipVariations: true,
        },
      },
      {
        name: 'preventOverflow',
        options: {
          rootBoundary: 'viewport',
        },
      },
    ],
  });

  useOutsideClick(() => {
    if (trigger === 'click') setOpen(false);
  }, wrapperRef);

  const handleMouseOver = () => {
    if (timeoutId) clearTimeout(timeoutId);
    if (trigger === 'hover') setOpen(true);
  };

  const handleMouseLeft = () => {
    if (trigger === 'hover') timeoutId = setTimeout(() => setOpen(false), ANIMATION_DELAY);
  };

  return (
    <div
      id={id}
      style={style}
      className={`${clsx(['popover', className && className])}`}
      ref={wrapperRef}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeft}
    >
      {/* eslint-disable-next-line
      jsx-a11y/click-events-have-key-events,
      jsx-a11y/no-static-element-interactions
      */}
      <div
        ref={triggerWrapperRef}
        onClick={() => {
          if (trigger === 'click') setOpen((prev) => !prev);
        }}
      >
        {children}
      </div>
      <Portal>
        <div
          ref={contentWrapperRef}
          className={clsx(['popover__content', isOpen && 'popover__content--open'])}
          style={styles.popper}
          hidden={!isOpenDebounced}
          {...attributes.popper}
        >
          {content}
        </div>
      </Portal>
    </div>
  );
};

export { BastPopover };
