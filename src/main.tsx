import { createRoot } from 'react-dom/client';

import { BastUiProvider } from '../lib/app/providers';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <BastUiProvider>
    <App />
  </BastUiProvider>,
);
