import '../lib/theme/bastion-ui.scss';

import { FC } from 'react';

import { BastButton } from '../lib/components/BastButton/BastButton';
import { BastInput, BastInputGroup } from '../lib/components/BastInput/BastInput';

const App: FC = () => (
  <>
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', gap: '10px' }}>
      <BastButton expand='full'>Confirm</BastButton>
      <BastButton fill="outlined" expand='full'>Confirm</BastButton>
      <BastButton fill="cleared" expand='full'>Confirm</BastButton>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
      <BastButton>Confirm</BastButton>
      <BastButton fill="outlined">Confirm</BastButton>
      <BastButton fill="cleared">Confirm</BastButton>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
      <BastButton size='small'>Confirm</BastButton>
      <BastButton fill="outlined" size='small'>Confirm</BastButton>
      <BastButton fill="cleared" size='small'>Confirm</BastButton>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', padding: '10px' }}>
      <BastInput value='Злодей' />
      <BastInput disabled value='Злодей' />
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', padding: '10px' }}>
      <BastInputGroup>
        <BastInputGroup.Label>Label</BastInputGroup.Label>
        <BastInputGroup.Input />
      </BastInputGroup>
    </div>
  </>
)

export default App
