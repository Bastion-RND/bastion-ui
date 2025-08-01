export type TSpace = 0 | 1 | 2 | 3 | 4;

export type TBastGridBaseProps = {
  space?: TSpace;
}

export type TGridColumnName = 'default' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type TGridColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto' | 'grow';

export type TBastGridColumnBaseProps = {
  size?: Partial<Record<TGridColumnName, TGridColumnSize>>
};
