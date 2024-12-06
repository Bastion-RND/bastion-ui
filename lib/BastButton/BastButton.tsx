import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

import classes from './index.module.scss';

type TBastButtonProps = PropsWithChildren<{ fill?: 'solid' | 'outline' | 'clear' }>;

export const BastButton: FC<TBastButtonProps> = ({ fill = 'solid', ...props }) => (
  <button type='button' className={`${classes.bastButton} ${clsx({
    [classes.bastButtonFilled]: fill === 'solid',
    [classes.bastButtonOutlined]: fill === 'outline',
    [classes.bastButtonCleared]: fill === 'clear',
  })}`} {...props} />
);
