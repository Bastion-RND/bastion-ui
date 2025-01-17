import { ComponentProps, FC } from 'react';
import { BastSublabel } from './BastSublabel';
interface IBastLabelProps extends Omit<ComponentProps<'label'>, 'htmlFor'> {
    disabled?: boolean;
    htmlFor: string;
}
declare const BastLabel: FC<IBastLabelProps> & {
    SubLabel: typeof BastSublabel;
};
export { BastLabel };
