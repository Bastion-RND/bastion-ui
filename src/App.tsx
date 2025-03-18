import '../lib/app/styles/bastion-ui.scss';
import { FC } from 'react';
import { BastIcon } from '../lib/entities/icon';
import { BastButton } from '../lib/entities/button';
import { BastHeader } from '../lib/widgets/header';
import { BastFooter } from '../lib/widgets/footer';

const App: FC = () => {
  return (
   <div style={{
     display: 'flex',
     flexDirection: 'column',
     gap: '10px',
   }}>
     <BastHeader isFloating color='gray'>
       <div>Text</div>
     </BastHeader>
     <BastButton iconOnly>
       <BastIcon name='MoreVertical' />
     </BastButton>
     <BastFooter isFloating color='gray'>
       <div>Text</div>
     </BastFooter>
   </div>
  );
};

export default App;
