import { FC } from 'react';

import { withPortal } from '../../../shared/ui/hocs/withPortal';

const BastModal: FC = () => (
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      modal
    </div>
  )

const BastModalWithPortal = withPortal(BastModal);

export { BastModalWithPortal as BastModal };
