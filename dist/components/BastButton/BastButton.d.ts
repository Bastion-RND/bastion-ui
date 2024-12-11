import { ComponentPropsWithRef, FC, PropsWithChildren } from 'react';
interface IBastButtonProps extends Omit<ComponentPropsWithRef<'button'>, 'type'>, PropsWithChildren {
    fill?: 'filled' | 'outlined' | 'cleared';
    size?: 'large' | 'small';
    color?: 'brand';
    expand?: 'full' | 'block';
    type?: 'button' | 'submit';
}
export declare const BastButton: FC<IBastButtonProps>;
export {};
