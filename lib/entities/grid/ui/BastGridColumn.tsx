import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

import { TBastGridColumnBaseProps, TGridColumnName, TGridColumnSize } from '../config';

type TBastGridColumnProps = ComponentProps<'div'> & TBastGridColumnBaseProps;

const getColumnClassesFromSize = (
  size: Partial<Record<TGridColumnName, TGridColumnSize>>,
): string[] =>
  Object.entries(size).reduce<string[]>((result, [sizeName, sizeValue]) => {
    result.push(`grid__column--size-${sizeName}-${sizeValue}`);
    return result;
  }, []);

const BastGridColumn: FC<TBastGridColumnProps> = ({ size, className, ...props }) => {
  const cn: string[] = size !== undefined ? ['grid__column', ...getColumnClassesFromSize(size)] : ['grid__column'];
  return <div className={`${clsx([...cn, className && className])}`} {...props} />;
};

export { BastGridColumn };
