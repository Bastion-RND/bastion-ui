import { FC, PropsWithChildren } from 'react';
type TBastButtonProps = PropsWithChildren<{
    fill?: 'filled' | 'outline' | 'clear';
    size?: 'regular' | 'small';
    color?: 'brand';
    expanded?: boolean;
}>;
export declare const BastButton: FC<TBastButtonProps>;
export {};
