import clsx from 'clsx';
import {
  ChangeEvent,
  FC,
  PropsWithChildren,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { debounceFunction } from '../../../shared/lib';
import { Icons } from '../../../shared/ui/icons';
import { useAccordionContext } from '../model/AccordionContext';

export type TBastAccordionProps = PropsWithChildren<{
  id?: string;
  title: string;
  disabled?: boolean;
  expanded?: boolean;
  initialExpanded?: boolean;
  className?: string;
  onChange?: (value: boolean) => void;
}>;

const ACCORDION_CONTENT_RESIZE_DELAY = 100;

const BastAccordion: FC<TBastAccordionProps> = ({
  disabled,
  id,
  title,
  children,
  initialExpanded = true,
  expanded,
  className,
  onChange,
}) => {
  const [isOpen, setOpen] = useState<boolean>(initialExpanded);
  const [height, setHeight] = useState<string>('fit-content');
  const context = useAccordionContext();
  const fallbackId = useId();
  const resolvedId = id ?? fallbackId;
  const isChecked = context ? context.openedAccordions.has(resolvedId) : isOpen;
  const isExpanded = expanded !== undefined ? expanded : isChecked;
  const isDisabled = typeof disabled === 'boolean' ? disabled : context?.disabled || false;
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!context || !initialExpanded) return;
    const { setOpenedAccordions } = context;
    setOpenedAccordions(resolvedId);
  }, []);

  useEffect(() => {
    if (!contentRef?.current) return;

    const contentEl = contentRef.current;
    const setRef = () => setHeight(`${(contentEl.scrollHeight || 0).toString()}px`);
    const setRefDebounced = debounceFunction(setRef, ACCORDION_CONTENT_RESIZE_DELAY);
    const mutationObserver = new MutationObserver(setRef);
    const resizeObserver = new ResizeObserver(setRefDebounced);

    mutationObserver.observe(contentRef.current, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    resizeObserver.observe(contentRef.current);
    setRef();

    return () => {
      mutationObserver.disconnect();
      resizeObserver.disconnect();
    };
  }, [isOpen]);

  const toggleAccordion = ({ target: { checked } }: ChangeEvent<HTMLInputElement>) => {
    setOpen(checked);
    onChange?.(checked);

    if (!context) return;

    const { setOpenedAccordions } = context;
    setOpenedAccordions(resolvedId);
  };

  return (
    <div className={clsx(['accordion', className && className])}>
      <label htmlFor={id} className="accordion__title">
        {title}
        <Icons.ChevronUp className="accordion__icon" />
        <input
          className="accordion__input"
          id={id}
          disabled={isDisabled}
          type="checkbox"
          checked={isExpanded}
          onChange={toggleAccordion}
        />
      </label>
      <div
        style={{
          height: isExpanded ? height : 0,
        }}
        className={clsx([
          'accordion__content-wrapper',
          isExpanded && 'accordion__content-wrapper--expanded',
        ])}
      >
        <div ref={contentRef} className="accordion__content">
          {children}
        </div>
      </div>
    </div>
  );
};

export { BastAccordion };
