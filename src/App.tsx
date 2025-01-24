import '../lib/app/styles/bastion-ui.scss';

import { FC, useState } from 'react';

import { BastButton, BastCheck, BastControl, BastInputGroup, BastRadio } from '../lib/app/main';
import { BastIcon } from '../lib/entities/BastIcon';
import { BastAlert } from '../lib/widgets/BastAlert';
import { BastDialog } from '../lib/widgets/BastDialog';
import { BastModal } from '../lib/widgets/BastModal';

const App: FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
  const [isAlertOpen, setAlertOpen] = useState<boolean>(false);

  return (
    <>
      <BastModal isOpen={isModalOpen} onClose={() => setModalOpen((prevState) => !prevState)}>
        <BastModal.Header>
          <BastModal.Icon color="brand">
            <BastIcon name="Bast" />
          </BastModal.Icon>
          <BastModal.Title>Какой-то важный текст</BastModal.Title>
        </BastModal.Header>
        <BastModal.Content>
          <div>Мы что-то важное хотим вам сказать</div>
        </BastModal.Content>
        <BastModal.Footer
          style={{
            display: 'grid',
            gap: '10px',
            gridTemplateColumns: '1fr 1fr',
            gridAutoFlow: 'column',
          }}
        >
          <BastButton fill="outlined" color="gray">
            Не согласен
          </BastButton>
          <BastButton>Согласен</BastButton>
        </BastModal.Footer>
      </BastModal>
      <div
        style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', gap: '10px' }}
      >
        <BastButton
          color="gray"
          expand="full"
          onClick={() => setModalOpen((prevState) => !prevState)}
        >
          Modal
        </BastButton>
        {isDialogOpen && (
          <BastDialog
            color="gray"
            title="Диалог обычный"
            content="Важное сообщение и длинное сообщение..."
            onClose={() => setDialogOpen((prevState) => !prevState)}
          />
        )}
        <BastButton
          color="gray"
          fill="outlined"
          expand="full"
          onClick={() => setDialogOpen((prevState) => !prevState)}
        >
          Dialog
        </BastButton>
        {isAlertOpen && (
          <BastAlert color="success" onClose={() => setAlertOpen(false)}>
            Какое-то прикольное уведомление
          </BastAlert>
        )}
        <BastButton color="gray" fill="cleared" expand="full" onClick={() => setAlertOpen(true)}>
          Alert
        </BastButton>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <BastButton>Confirm</BastButton>
        <BastButton fill="outlined">Confirm</BastButton>
        <BastButton fill="cleared">Confirm</BastButton>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <BastButton size="small">Confirm</BastButton>
        <BastButton fill="outlined" size="small">
          Confirm
        </BastButton>
        <BastButton fill="cleared" size="small">
          Confirm
        </BastButton>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '10px',
          padding: '10px',
        }}
      >
        <BastInputGroup>
          <BastInputGroup.Label>Label</BastInputGroup.Label>
          <BastInputGroup.Control placeholder="Злодей" />
        </BastInputGroup>
        <BastInputGroup>
          <BastInputGroup.Label htmlFor="3">Label</BastInputGroup.Label>
          <BastInputGroup.Control id="2" placeholder="Злодей" disabled />
          <BastInputGroup.Feedback feedbackType="success">Test</BastInputGroup.Feedback>
        </BastInputGroup>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '10px',
          padding: '10px',
        }}
      >
        <BastControl placeholder="Злодей" debounce={0} />
        <BastControl placeholder="Злодей" disabled />
      </div>
      <div style={{ display: 'flex', gap: '10px', padding: '10px' }}>
        <BastCheck disabled />
        <BastCheck
          label="Remember me"
          subLabel="Save my login details for next time"
          disabled
          checked
        />
        <BastCheck label="Remember me" subLabel="Save my login details for next time" />
      </div>
      <form action="#" style={{ display: 'flex', gap: '10px', padding: '10px' }}>
        <BastRadio label="Злодей" disabled />
        <BastRadio
          label="Remember me"
          subLabel="Save my login details for next time"
          disabled
          checked
        />
        <BastRadio name="1" label="Remember me" subLabel="Save my login details for next time" />
        <BastRadio name="1" label="Remember me" subLabel="Save my login details for next time" />
      </form>
    </>
  );
};

export default App;
