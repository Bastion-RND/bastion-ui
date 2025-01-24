export type TBastColor = 'brand' | 'gray' | 'success' | 'warning' | 'danger';

export type TWithBastColor<Type = object> = Type & { color?: TBastColor };
