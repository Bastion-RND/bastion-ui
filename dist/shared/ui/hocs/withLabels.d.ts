import { ComponentProps, ComponentType, PropsWithoutRef } from 'react';
interface TInjectingLabelsProps {
    label?: string;
    subLabel?: string;
}
type TWrappedComponent<InitialProps, InjectingProps> = ComponentType<Omit<PropsWithoutRef<InitialProps & TInjectingLabelsProps>, keyof InjectingProps>>;
export declare const withLabels: <T extends ComponentProps<"input">>(WrappedComponent: TWrappedComponent<T, TInjectingLabelsProps>) => import('react').ForwardRefExoticComponent<PropsWithoutRef<T & TInjectingLabelsProps> & import('react').RefAttributes<HTMLInputElement>>;
export {};
