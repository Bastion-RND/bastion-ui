import clsx from 'clsx';
import {
  ChangeEvent,
  FC,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { debounceFunction } from '../../../shared/lib';
import { useAccordionContext } from '../model/AccordionContext';

export type TBastAccordionProps = PropsWithChildren<{
  id?: string;
  title: ReactNode;
  disabled?: boolean;
  expanded?: boolean;
  initialExpanded?: boolean;
  className?: string;
  onChange?: (value: boolean) => void;
  expandIcon?: ReactElement<SVGSVGElement, 'svg'>;
}>;

const ACCORDION_CONTENT_RESIZE_DELAY = 100;

const BastAccordion: FC<TBastAccordionProps> = ({
  disabled,
  id,
  title,
  children,
  initialExpanded = true,
  expandIcon = (
    <svg
      height="1em"
      width="auto"
      viewBox="0 0 106 106"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M57.4149 36.2396C69.7776 41.6985 77.8238 55.0217 83.683 67.9716C84.4666 69.7029 82.1171 71.1404 80.8469 69.7076C74.1368 62.1334 66.6053 53.3951 58.4002 47.3702C55.3697 45.1455 51.1901 45.1455 48.1596 47.3702C39.952 53.3963 32.4193 62.137 25.708 69.7136C24.4391 71.1464 22.0895 69.7088 22.8719 67.9776C28.7299 55.0289 36.7871 41.6961 49.1449 36.2396C51.7683 35.0815 54.7915 35.0815 57.4149 36.2396Z" />
    </svg>
  ),
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
        <span className="accordion__icon">{expandIcon}</span>
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
