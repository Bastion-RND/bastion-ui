import { ComponentProps, FC } from 'react';
interface IBastInputGroupFeedback extends ComponentProps<'p'> {
    feedbackType?: 'error' | 'warning' | 'info' | 'success';
}
export declare const BastInputGroupFeedback: FC<IBastInputGroupFeedback>;
export {};
