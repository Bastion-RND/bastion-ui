import '../lib/theme/variables.css';

import { FC } from 'react';

import { BastButton } from '../lib/BastButton/BastButton';

const App: FC = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <BastButton>Confirm</BastButton>
    <BastButton fill='outline'>Confirm</BastButton>
    <BastButton fill='clear'>Confirm</BastButton>
  </div>
)

export default App
