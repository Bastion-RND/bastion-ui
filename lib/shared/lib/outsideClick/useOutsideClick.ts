import { RefObject, useEffect } from 'react';

export const useOutsideClick = (callback: () => void, target: RefObject<HTMLElement>) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (target?.current && !target.current.contains(e.target as Node)) callback();
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [target, callback]);
};
