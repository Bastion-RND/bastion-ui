import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

import { TBastGridColumnBaseProps } from '../config';

type TBastGridColumnProps = ComponentProps<'div'> & TBastGridColumnBaseProps;

// TODO: Доделать
const BastGridColumn: FC<TBastGridColumnProps> = ({ className, ...props }) => (
  <div className={`${clsx(['grid__column', className && className])}`} {...props} />
);

export { BastGridColumn };
