import clsx from 'clsx';
import { ComponentProps, FC, useId, useMemo } from 'react';

import { InputGroupContext } from '../model/InputGroupContext';
import { BastInputGroupFeedback } from './BastInputGroupFeedback';
import { BastInputGroupInput } from './BastInputGroupInput';
import { BastInputGroupLabel } from './BastInputGroupLabel';

type TBastInputGroupProps = ComponentProps<'div'>;

const BastInputGroup: FC<TBastInputGroupProps> & {
  Input: typeof BastInputGroupInput;
  Label: typeof BastInputGroupLabel;
  Feedback: typeof BastInputGroupFeedback;
} = ({ id, children, className, ...props }) => {
  const initialId = useId();
  const contextValue = useMemo(() => ({ inputGroupId: id || initialId }), []);

  return (
    <InputGroupContext.Provider value={contextValue}>
      <div
        className={`bast-input-group ${clsx({
          [`${className}`]: className,
        })}`}
        {...props}
      >
        {children}
      </div>
    </InputGroupContext.Provider>
  );
};

BastInputGroup.Input = BastInputGroupInput;
BastInputGroup.Label = BastInputGroupLabel;
BastInputGroup.Feedback = BastInputGroupFeedback;

export { BastInputGroup };
