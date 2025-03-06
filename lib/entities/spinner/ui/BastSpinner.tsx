import { FC } from 'react';

import { Icons } from '../../../shared/ui/icons';

const BastSpinner: FC = () => (
  <div className="spinner">
    <Icons.Spinner className="spinner__icon" />
    <Icons.Spinner className="spinner__icon" />
    <Icons.Spinner className="spinner__icon" />
  </div>
);

export { BastSpinner };
