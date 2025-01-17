import '../lib/app/styles/bastion-ui.scss';

import { FC } from 'react';

import { BastButton, BastCheck,BastControl, BastInputGroup, BastRadio } from '../lib/app/main';

const App: FC = () => (
  <>
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', gap: '10px' }}>
      <BastButton expand="full">Confirm</BastButton>
      <BastButton fill="outlined" expand="full">
        Confirm
      </BastButton>
      <BastButton fill="cleared" expand="full">
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
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', padding: '10px' }}
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
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', padding: '10px' }}
    >
      <BastControl placeholder="Злодей" debounce={0} />
      <BastControl placeholder="Злодей" disabled />
    </div>
    <div style={{ display: 'flex', gap: '10px', padding: '10px' }}>
      <BastCheck label="Remember me" disabled />
      <BastCheck
        label="Remember me"
        subLabel="Save my login details for next time"
        disabled
        checked
      />
      <BastCheck label="Remember me" subLabel="Save my login details for next time" />
    </div>
    <div style={{ display: 'flex', gap: '10px', padding: '10px' }}>
      <BastRadio disabled />
      <BastRadio />
      <BastRadio checked />
    </div>
  </>
);

export default App;
