import { RefObject, useLayoutEffect } from 'react';

type TClickOutsideProps<T extends HTMLElement> = {
  targetRef: RefObject<T>;
  callback: () => void;
};

export const useClickOutside = <T extends HTMLElement>({
  targetRef,
  callback,
}: TClickOutsideProps<T>) => {
  useLayoutEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (targetRef.current && !targetRef.current.contains(e.target as HTMLElement)) {
        console.log(targetRef.current, e.target);
        callback();
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [callback]);
};
