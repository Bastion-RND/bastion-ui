import { ComponentProps, ComponentPropsWithRef, FC, PropsWithChildren } from 'react';
interface IBastInput extends ComponentPropsWithRef<'input'> {
    debounce?: number;
}
declare const BastInputGroupControl: FC<IBastInput>;
interface IBastInputGroupProps extends PropsWithChildren, ComponentProps<'div'> {
}
declare const BastInputGroup: {
    ({ id, children, className, ...props }: IBastInputGroupProps): import("react/jsx-runtime").JSX.Element;
    Control: FC<IBastInput>;
    Label: FC<{
        children?: import('react').ReactNode | undefined;
    } & import('react').ClassAttributes<HTMLLabelElement> & import('react').LabelHTMLAttributes<HTMLLabelElement>>;
};
declare const BastInput: FC<ComponentProps<typeof BastInputGroupControl>>;
export { BastInput, BastInputGroup };
