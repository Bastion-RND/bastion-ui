import '../lib/app/styles/bastion-ui.scss';
import { FC } from 'react';
import { BastIcon } from '../lib/entities/icon';
import { BastButton } from '../lib/entities/button';

const gridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
  gap: '10px',
  padding: '10px',
};

const App: FC = () => {
  return (
   <div style={gridStyles}>
     <BastButton iconOnly>
       <BastIcon name='MoreVertical' />
     </BastButton>
   </div>
  );
};

export default App;
