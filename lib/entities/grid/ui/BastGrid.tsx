import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

import { TBastGridBaseProps } from '../config';
import { BastGridColumn } from './BastGridColumn';

type TBastGridProps = ComponentProps<'div'> & TBastGridBaseProps;

type TBastGridStaticProps = {
  Column: typeof BastGridColumn;
};

const BastGrid: FC<TBastGridProps> & TBastGridStaticProps = ({
  className,
  space = 2,
  ...props
}) => {
  const cn = clsx(['grid', `grid--space-${space}`, className && className]);
  return <div className={cn} {...props} />;
};

BastGrid.Column = BastGridColumn;

export { BastGrid };
