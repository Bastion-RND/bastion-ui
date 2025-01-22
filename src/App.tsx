import '../lib/app/styles/bastion-ui.scss';

import { FC, useState } from 'react';

import { BastButton, BastCheck, BastControl, BastInputGroup, BastRadio } from '../lib/app/main';
import { BastModal } from '../lib/entities/BastModal';

const App: FC = () => {
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);

  return (
    <>
      {isDialogOpen && <BastModal onClose={() => setDialogOpen((prevState) => !prevState)} />}
      <div
        style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', gap: '10px' }}
      >
        <BastButton color='gray' expand="full" onClick={() => setDialogOpen((prevState) => !prevState)}>
          Confirm
        </BastButton>
        <BastButton color='gray' fill="outlined" expand="full">
          Confirm
        </BastButton>
        <BastButton color='gray' fill="cleared" expand="full">
          Confirm
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
