import '../lib/app/styles/bastion-ui.scss';

import { ChangeEvent, FC, useState } from 'react';

import {
  BastButton,
  BastCheck,
  BastInput,
  BastInputGroup,
  BastRadio,
  Container,
} from '../lib/app/main';
import { BastIcon } from '../lib/entities/BastIcon';
import { BastList } from '../lib/entities/BastList/ui/BastList';
import { BastDialog } from '../lib/widgets/BastDialog';
import { BastDropdown } from '../lib/widgets/BastDropdown';
import { BastModal } from '../lib/widgets/BastModal';
import { useToast } from '../lib/widgets/BastToast';

const gridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
  gap: '10px',
  padding: '10px',
};

const App: FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
  const { createToast } = useToast();

  const handleChangeInput = ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
    console.log(value);

  return (
    <Container>
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
          style={{ display: 'flex', gap: '.5em' }}
        >
          <BastButton expand fill="outlined" color="gray">
            Не согласен
          </BastButton>
          <BastButton expand>Согласен</BastButton>
        </BastModal.Footer>
      </BastModal>
      <div
        style={gridStyles}
      >
        <BastButton color="gray" expand onClick={() => setModalOpen((prevState) => !prevState)}>
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
          expand
          onClick={() => setDialogOpen((prevState) => !prevState)}
        >
          Dialog
        </BastButton>
        <BastButton
          color="gray"
          fill="cleared"
          expand
          onClick={() =>
            createToast({
              color: 'danger',
              autoClose: true,
              duration: 5000,
              text: 'Какое-то прикольное уведомление',
            })
          }
        >
          Alert
        </BastButton>
      </div>

      <div style={gridStyles}>
        <BastButton>Confirm</BastButton>
        <BastButton fill="outlined">Confirm</BastButton>
        <BastButton fill="cleared">Confirm</BastButton>
      </div>

      <div style={gridStyles}>
        <BastButton size="small">Confirm</BastButton>
        <BastButton fill="outlined" size="small">
          Confirm
        </BastButton>
        <BastButton fill="cleared" size="small">
          Confirm
        </BastButton>
      </div>

      <div
        style={gridStyles}
      >
        <BastInputGroup>
          <BastInputGroup.Label>Debounced</BastInputGroup.Label>
          <BastInputGroup.Input placeholder="Злодей" debounce={1000} onChange={handleChangeInput} />
        </BastInputGroup>
        <BastInputGroup>
          <BastInputGroup.Label htmlFor="3">Label</BastInputGroup.Label>
          <BastInputGroup.Input id="2" placeholder="Злодей" disabled />
          <BastInputGroup.Feedback feedbackType="success">Test</BastInputGroup.Feedback>
        </BastInputGroup>
      </div>
      <div
        style={gridStyles}
      >
        <BastInput placeholder="Злодей" debounce={0} />
        <BastInput placeholder="Злодей" disabled />
      </div>
      <div style={gridStyles}>
        <BastCheck disabled />
        <BastCheck
          label="Remember me"
          subLabel="Save my login details for next time"
          disabled
          checked
        />
        <BastCheck label="Remember me" subLabel="Save my login details for next time" />
      </div>
      <form action="#" style={{ display: 'flex', gap: '10px', padding: '10px', flexWrap: 'wrap' }}>
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
      <BastDropdown placeholder='Найти человека'>
        <BastDropdown.Option>1</BastDropdown.Option>
        <BastDropdown.Option>1</BastDropdown.Option>
        <BastDropdown.Option>1</BastDropdown.Option>
        <BastDropdown.Option>1</BastDropdown.Option>
        <BastDropdown.Option>1</BastDropdown.Option>
      </BastDropdown>
      <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1em',
            padding: '10px',
          }}
        >
          <h1>H1</h1>
          <h2>H2</h2>
          <h3>H3</h3>
          <h4>H4</h4>
          <h5>H5</h5>
          <p>Paragraph</p>
          <q>Quote</q>
        </div>
        <BastList>
          <BastList.Item>Item 1</BastList.Item>
          <BastList.Item>Item 1</BastList.Item>
          <BastList.Item>Item 1</BastList.Item>
          <BastList.Item>Item 1</BastList.Item>
          <BastList.Item>Item 1</BastList.Item>
          <BastList.Item>Item 1</BastList.Item>
          <BastList.Item>Item 1</BastList.Item>
        </BastList>
      </div>
    </Container>
  );
};

export default App;
