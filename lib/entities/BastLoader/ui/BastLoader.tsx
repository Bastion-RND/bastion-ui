import { FC } from 'react';

import { Icons } from '../../../shared/ui/icons';

const BastLoader: FC = () => (
  <div className="loader">
    <Icons.Loader className="loader__icon" />
    <Icons.Loader className="loader__icon" />
    <Icons.Loader className="loader__icon" />
  </div>
);

export { BastLoader };
