import '../lib/theme/variables.scss';

import { FC } from 'react';

import { BastButton } from '../lib/BastButton/BastButton';

const App: FC = () => (
  <>
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
      <BastButton expanded>Confirm</BastButton>
      <BastButton fill="outline" expanded>Confirm</BastButton>
      <BastButton fill="clear" expanded>Confirm</BastButton>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
      <BastButton>Confirm</BastButton>
      <BastButton fill="outline">Confirm</BastButton>
      <BastButton fill="clear">Confirm</BastButton>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
      <BastButton size='small'>Confirm</BastButton>
      <BastButton fill="outline" size='small'>Confirm</BastButton>
      <BastButton fill="clear" size='small'>Confirm</BastButton>
    </div>
  </>
)

export default App
