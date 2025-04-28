import '../lib/app/styles/bastion-ui.scss';
import { FC, useState } from 'react';
import { BastIcon } from '../lib/entities/icon';
import { BastButton } from '../lib/entities/button';
import { BastHeader } from '../lib/widgets/header';
import { BastFooter } from '../lib/widgets/footer';
import { BastActionSheet } from '../lib/widgets/actionSheet';
import { BastInput } from '../lib/entities/input';

const App: FC = () => {
  const [isActionSheetOpen, setActionSheetOpen] = useState(false);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <BastHeader isFloating>
        <div>Text</div>
      </BastHeader>
      <BastButton onClick={() => setActionSheetOpen((state) => !state)}>
        <BastIcon name="MoreVertical" />
      </BastButton>
      <BastActionSheet
        maxHeightPercent={80}
        isOpen={isActionSheetOpen}
        onClose={() => setActionSheetOpen(false)}
      >
        <BastInput />
      </BastActionSheet>
      <BastFooter isFloating color="gray">
        <div>Text</div>
      </BastFooter>
    </div>
  );
};

export default App;
