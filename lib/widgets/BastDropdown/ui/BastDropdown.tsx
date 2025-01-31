import clsx from 'clsx';
import {
  ComponentProps,
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithChildren,
  RefAttributes,
  useId,
} from 'react';

import { BastList } from '../../../entities/BastList/ui/BastList';
import { Icons } from '../../../shared/ui/icons';
import { BastDropdownOption } from './BastDropdownOption';

type TBastDropdown = PropsWithChildren<{ placeholder?: string }> & ComponentProps<'input'>;

type TBastDropdownWithStaticProps = ForwardRefExoticComponent<
  Omit<TBastDropdown, 'ref'> & RefAttributes<HTMLInputElement>
> & {
  Option: typeof BastDropdownOption;
};

const BastDropdown = forwardRef<HTMLInputElement, TBastDropdown>(
  ({ children, id, className, placeholder, ...props }, ref) => {
    const generatedId = useId();
    const resolvedId = id || generatedId;

    return (
      <div className="dropdown">
        <input
          className={`${clsx(['dropdown__input', className && className])}`}
          ref={ref}
          id={resolvedId}
          type="checkbox"
          {...props}
        />
        <label className="dropdown__label" htmlFor={resolvedId}>
          {placeholder}
          <Icons.ChevronUp className='dropdown__label__icon' />
        </label>
        <BastList>{children}</BastList>
      </div>
    );
  },
) as TBastDropdownWithStaticProps;

BastDropdown.Option = BastDropdownOption;

export { BastDropdown };
