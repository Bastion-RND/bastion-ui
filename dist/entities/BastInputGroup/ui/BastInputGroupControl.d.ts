import { ComponentPropsWithRef } from 'react';
interface IBastControl extends ComponentPropsWithRef<'input'> {
    debounce?: number;
}
declare const BastInputGroupControl: import('react').ForwardRefExoticComponent<Omit<IBastControl, "ref"> & import('react').RefAttributes<HTMLInputElement>>;
declare const BastControl: import('react').ForwardRefExoticComponent<Omit<IBastControl, "ref"> & import('react').RefAttributes<HTMLInputElement>>;
export { BastControl, BastInputGroupControl };
