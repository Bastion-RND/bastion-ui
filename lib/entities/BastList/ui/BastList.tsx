import clsx from 'clsx';
import { forwardRef, ForwardRefExoticComponent, PropsWithChildren, ReactNode, RefAttributes } from 'react';

import { BastListItem } from './BastListItem';

type TBastListStaticProps = {
  Item: typeof BastListItem;
};

const BastList = forwardRef<HTMLUListElement, PropsWithChildren<{ className?: string }>>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={`${clsx(['list', className && className])}`} {...props} />
  ),
) as ForwardRefExoticComponent<
  { className?: string | undefined } & {
    children?: ReactNode;
  } & RefAttributes<HTMLUListElement>
> &
  TBastListStaticProps;

BastList.Item = BastListItem;

export { BastList };
