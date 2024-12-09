import '../lib/theme/bastion-ui.scss';

import { FC } from 'react';

import { BastButton } from '../lib/BastButton/BastButton';

const App: FC = () => (
  <>
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
      <BastButton expanded>Confirm</BastButton>
      <BastButton fill="outlined" expanded>Confirm</BastButton>
      <BastButton fill="cleared" expanded>Confirm</BastButton>
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
  </>
)

export default App
