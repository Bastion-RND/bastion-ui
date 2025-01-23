export type TBastColor = 'brand' | 'gray' | 'success' | 'warning' | 'danger';

export type TWithBastColor<Type> = Type & { color?: TBastColor };
