import '../lib/app/styles/bastion-ui.scss';
import { FC, useState } from 'react';
import { BastIcon } from '../lib/entities/icon';
import { BastButton } from '../lib/entities/button';
import { BastHeader } from '../lib/widgets/header';
import { BastFooter } from '../lib/widgets/footer';
import { BastActionSheet } from '../lib/widgets/actionSheet';
import { BastInputGroup } from '../lib/widgets/inputGroup';

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
        maxHeightPercent={90}
        isOpen={isActionSheetOpen}
        onClose={() => setActionSheetOpen(false)}
      >
        <BastInputGroup>
          <BastInputGroup.Label className="m-0" htmlFor="1">
            Мобильный номер устройства
          </BastInputGroup.Label>
          <BastInputGroup.Input
            id="1"
            inputMode="numeric"
            maxLength={12}
            placeholder="Номер телефона"
            value="89885861192"
          />
          <BastInputGroup.Label className="m-0" htmlFor="2">
            Имя устройства
          </BastInputGroup.Label>
          <BastInputGroup.Input maxLength={15} id="2" placeholder="Имя устройства" value="Ilia" />
        </BastInputGroup>
        <BastInputGroup>
          <BastInputGroup.Label className="m-0" htmlFor="1">
            Мобильный номер устройства
          </BastInputGroup.Label>
          <BastInputGroup.Input
            id="1"
            inputMode="numeric"
            maxLength={12}
            placeholder="Номер телефона"
            value="89885861192"
          />
          <BastInputGroup.Label className="m-0" htmlFor="2">
            Имя устройства
          </BastInputGroup.Label>
          <BastInputGroup.Input maxLength={15} id="2" placeholder="Имя устройства" value="Ilia" />
        </BastInputGroup>
      </BastActionSheet>
      <BastFooter isFloating color="gray">
        <div>Text</div>
      </BastFooter>
    </div>
  );
};

export default App;
