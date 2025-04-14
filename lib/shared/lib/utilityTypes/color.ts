export type TBastColor = 'brand' | 'gray' | 'success' | 'warning' | 'danger' | 'black' | 'white';

export type TWithBastColor<Type = object> = Type & { color?: TBastColor };
