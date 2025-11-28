import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

const BastListItem: FC<PropsWithChildren<{ className?: string; onClick?: () => void }>> = ({
  className,
  ...props
}) =>(
    <li className='list__item'>
      {'onClick' in props ? (
        <button
          type='button'
          className={`${clsx(['list__item-content', 'list__item-content--clickable', className && className])}`}
          {...props}
        />
      ) : (
        <span
          className={`${clsx(['list__item-content', className && className])}`}
          {...props}
        />
      )}
    </li>
  );

export { BastListItem };
