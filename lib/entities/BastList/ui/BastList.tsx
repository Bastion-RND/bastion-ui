import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

import { BastListItem } from './BastListItem';

type TBastListStaticProps = {
  Item: typeof BastListItem;
};

const BastList: FC<PropsWithChildren<{ className?: string }>> & TBastListStaticProps = ({
  className,
  ...props
}) => <ul className={`${clsx(['list', className && className])}`} {...props} />;

BastList.Item = BastListItem;

export { BastList };
