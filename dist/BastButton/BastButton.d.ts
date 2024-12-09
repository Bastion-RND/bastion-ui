import { ComponentProps, FC, PropsWithChildren } from 'react';
interface IBastButtonProps extends Omit<ComponentProps<'button'>, 'type'>, PropsWithChildren {
    fill?: 'filled' | 'outlined' | 'cleared';
    size?: 'regular' | 'small';
    color?: 'brand';
    expanded?: boolean;
    type?: 'button' | 'submit';
}
export declare const BastButton: FC<IBastButtonProps>;
export {};
