import { ComponentProps, FC } from 'react';
import { BastInputGroupControl } from './BastInputGroupControl';
import { BastInputGroupFeedback } from './BastInputGroupFeedback';
import { BastInputGroupLabel } from './BastInputGroupLabel';
type TBastInputGroupProps = ComponentProps<'div'>;
declare const BastInputGroup: FC<TBastInputGroupProps> & {
    Control: typeof BastInputGroupControl;
    Label: typeof BastInputGroupLabel;
    Feedback: typeof BastInputGroupFeedback;
};
export { BastInputGroup };
