import clsx from 'clsx';
import {
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithChildren,
  ReactNode,
  RefAttributes,
} from 'react';

import { BastListItem } from './BastListItem';

type TBastListStaticProps = {
  Item: typeof BastListItem;
};

type TBastListProps = {
  className?: string;
  inset?: boolean;
};

const BastList = forwardRef<HTMLUListElement, PropsWithChildren<TBastListProps>>(
  ({ className, inset, ...props }, ref) => (
    <ul
      ref={ref}
      className={`${clsx(['list', inset && 'list--inset', className && className])}`}
      {...props}
    />
  ),
) as ForwardRefExoticComponent<
  TBastListProps & {
    children?: ReactNode;
  } & RefAttributes<HTMLUListElement>
> &
  TBastListStaticProps;

BastList.Item = BastListItem;

export { BastList };
