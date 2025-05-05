import '../lib/app/styles/bastion-ui.scss';
import { FC, useState } from 'react';
import { BastIcon } from '../lib/entities/icon';
import { BastButton } from '../lib/entities/button';
import { BastHeader } from '../lib/widgets/header';
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
        height: '100%',
      }}
    >
      <BastHeader>
        <div className="d-f jc-center ai-center">
          <BastIcon name="Bast" />
          <p className="h3 m-0 ml-1">BastionUI</p>
        </div>
      </BastHeader>
      <BastButton onClick={() => setActionSheetOpen((state) => !state)}>ActionSheet</BastButton>
      <BastActionSheet
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
    </div>
  );
};

export default App;
