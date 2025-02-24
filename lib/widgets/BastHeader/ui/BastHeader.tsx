import { ComponentProps, FC } from 'react';

const BastHeader: FC<
  Pick<ComponentProps<'header'>, 'style' | 'className' | 'children' | 'id'> & {
    logo?: 'bast' | 'skat';
  }
> = ({ logo = 'bast', ...props }) => <header {...props} />;

export { BastHeader };
