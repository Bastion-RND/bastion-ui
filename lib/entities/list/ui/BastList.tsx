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
  hoverable?: boolean;
};

const BastList = forwardRef<HTMLUListElement, PropsWithChildren<TBastListProps>>(
  ({ className, inset, hoverable, ...props }, ref) => (
    <ul
      ref={ref}
      className={`${clsx(['list', inset && 'list--inset', hoverable && 'list--hoverable', className && className])}`}
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
