import { RefObject, useEffect } from 'react';

const isOutsideClick = (currentTarget: MouseEvent['target'], targets: RefObject<HTMLElement>[]) =>
  targets.every((target) => !target?.current || !target.current.contains(currentTarget as Node));

export const useOutsideClick = (
  callback: () => void,
  targets: RefObject<HTMLElement>[],
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOutsideClick(e.target, targets)) callback();
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [callback]);
};
