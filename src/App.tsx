import '../lib/app/styles/bastion-ui.scss';

import { ChangeEvent, FC, useState } from 'react';

import {
  BastAccordion,
  BastAccordionGroup, BastBatteryIndicator,
  BastButton,
  BastDropdown,
  BastFooter,
  BastHeader,
  BastInputGroup,
  BastModal,
  BastTabs,
  Container,
  useTheme,
  useVisualImpairedMode,
} from '../lib/app/main';
import { BastIcon } from '../lib/entities/BastIcon';
import { BastList } from '../lib/entities/BastList';
import { BastProgress } from '../lib/entities/BastProgress';
import { BastSpinner } from '../lib/entities/BastSpinner';
import { MoreVerticalIcon } from '../lib/shared/assets';
import { Icons } from '../lib/shared/ui/icons';
import { BastDialog } from '../lib/widgets/BastDialog';
import { BastPopover } from '../lib/widgets/BastPopover';
import { BastTabsItem } from '../lib/widgets/BastTabs/ui/BastTabsItem';
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
  const [value, setValue] = useState('1');
  const { toggleTheme } = useTheme();
  const { toggleVisualImpairedMode } = useVisualImpairedMode();
  const [isOpenAccordion, setopenAccordion] = useState(false);

  const handleChangeInput = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    console.log(value);
    setValue(value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <BastHeader>header</BastHeader>
      <main>
        <Container>
          <BastBatteryIndicator isCharging percent={50} />
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
            <BastModal.Footer style={{ display: 'flex', gap: '.5em' }}>
              <BastButton expand fill="outlined" color="gray">
                Не согласен
              </BastButton>
              <BastButton expand>Согласен</BastButton>
            </BastModal.Footer>
          </BastModal>
          <div style={gridStyles}>
            <BastButton color="gray" expand onClick={() => setModalOpen((prevState) => !prevState)}>
              Modal
            </BastButton>
            <BastDialog
              isOpen={isDialogOpen}
              color="gray"
              title="Диалог обычный"
              content="Важное сообщение и длинное сообщение..."
              onClose={() => setDialogOpen((prevState) => !prevState)}
            />
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
                  color: 'success',
                  autoClose: false,
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

          <div style={gridStyles}>
            <BastInputGroup>
              <BastInputGroup.Label>Debounced</BastInputGroup.Label>
              <BastInputGroup.Input
                placeholder="Злодей"
                debounce={1000}
                value={value}
                onChange={handleChangeInput}
              />
            </BastInputGroup>
            <BastInputGroup>
              <BastInputGroup.Label htmlFor="3">Label</BastInputGroup.Label>
              <BastInputGroup.Input id="2" placeholder="Злодей" disabled />
              <BastInputGroup.Feedback feedbackType="success">Test</BastInputGroup.Feedback>
            </BastInputGroup>
          </div>
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
            <BastSpinner />
            <BastProgress progress={50} />
          </div>
          <div style={gridStyles}>
            <BastDropdown label="test" placeholder="Найти человека 2222" value="1">
              <BastDropdown.Option value="0">Значение 1</BastDropdown.Option>
              <BastDropdown.Option value="1">Значение 2</BastDropdown.Option>
              <BastDropdown.Option value="2">Значение 3</BastDropdown.Option>
              <BastDropdown.Option>1</BastDropdown.Option>
              <BastDropdown.Option>1</BastDropdown.Option>
            </BastDropdown>
            <BastDropdown placeholder="Найти человека" style={{ alignSelf: 'end' }}>
              <BastDropdown.Option value="0">Значение 1</BastDropdown.Option>
              <BastDropdown.Option value="1">Значение 2</BastDropdown.Option>
              <BastDropdown.Option value="2">Значение 3</BastDropdown.Option>
              <BastDropdown.Option>1</BastDropdown.Option>
              <BastDropdown.Option>1</BastDropdown.Option>
            </BastDropdown>
          </div>
          <div style={gridStyles}>
            <BastTabs>
              <BastTabsItem>Default</BastTabsItem>
              <BastTabsItem>Default</BastTabsItem>
              <BastTabsItem>Default</BastTabsItem>
              <BastTabsItem>Default</BastTabsItem>
            </BastTabs>
            <BastTabs iconOnly>
              <BastTabsItem>
                <Icons.Bast />
              </BastTabsItem>
              <BastTabsItem>
                <Icons.Bast />
              </BastTabsItem>
              <BastTabsItem>
                <Icons.Bast />
              </BastTabsItem>
              <BastTabsItem>
                <Icons.Bast />
              </BastTabsItem>
            </BastTabs>
            <BastTabs borders="round-bottom" active="1">
              <BastTabsItem disabled>Default</BastTabsItem>
              <BastTabsItem id="1">Default</BastTabsItem>
              <BastTabsItem>Default</BastTabsItem>
              <BastTabsItem>Default</BastTabsItem>
            </BastTabs>
            <BastTabs borders="round-top" disabled>
              <BastTabsItem>Default</BastTabsItem>
              <BastTabsItem>Default</BastTabsItem>
              <BastTabsItem>Default</BastTabsItem>
              <BastTabsItem>Default</BastTabsItem>
            </BastTabs>
          </div>
          <div style={gridStyles}>
            <BastAccordion title="Accordion" disabled>
              <div>Disabled && Expanded</div>
            </BastAccordion>
            <BastAccordion title="Accordion">
              <div>Disabled && Expanded</div>
            </BastAccordion>
            <BastAccordionGroup multiple>
              <BastAccordion title="AccordionGroup" disabled initialExpanded={false}>
                <div>Accordion content 1</div>
              </BastAccordion>
              <BastAccordion
                title="Accordion 2"
                expanded={isOpenAccordion}
                onChange={setopenAccordion}
              >
                <div>Accordion content 2</div>
              </BastAccordion>
              <BastAccordion title="Accordion 3" initialExpanded>
                <BastList inset>
                  <BastList.Item>Longolonglong</BastList.Item>
                  <BastList.Item>Longolonglong</BastList.Item>
                  <BastList.Item>LongolonglongLongolonglong</BastList.Item>
                  <BastList.Item>Longolonglong</BastList.Item>
                </BastList>
              </BastAccordion>
            </BastAccordionGroup>
          </div>
          <BastButton fill="outlined" onClick={toggleTheme}>
            Тема
          </BastButton>
          <BastButton fill="outlined" onClick={toggleVisualImpairedMode}>
            Версия для слабовидящих
          </BastButton>
          <div style={{ ...gridStyles, gridTemplateColumns: '1fr 1fr' }}>
            <BastPopover
              placement="bottom-start"
              content={
                <BastList inset>
                  <BastList.Item onClick={() => console.log('click')}>test</BastList.Item>
                  <BastList.Item>test</BastList.Item>
                  <BastList.Item>test</BastList.Item>
                  <BastList.Item>test</BastList.Item>
                </BastList>
              }
            >
              <BastButton fill="filled" color="success">
                Click me
              </BastButton>
            </BastPopover>
            <BastPopover
              placement="left"
              content={
                <BastList>
                  <BastList.Item>Longolonglong</BastList.Item>
                  <BastList.Item>Longolonglong</BastList.Item>
                  <BastList.Item>LongolonglongLongolonglong</BastList.Item>
                  <BastList.Item>Longolonglong</BastList.Item>
                </BastList>
              }
            >
              <BastButton fill="filled" color="success">
                Click me
              </BastButton>
            </BastPopover>
            <BastPopover
              trigger="hover"
              placement="right-end"
              content={
                <BastList>
                  <BastList.Item>Longolonglong</BastList.Item>
                  <BastList.Item>Longolonglong</BastList.Item>
                  <BastList.Item>LongolonglongLongolonglong</BastList.Item>
                  <BastList.Item>Longolonglong</BastList.Item>
                </BastList>
              }
            >
              <BastButton fill="filled" color="success">
                Hover me
              </BastButton>
            </BastPopover>
            <BastPopover
              placement="right-start"
              trigger="hover"
              content={
                <BastList>
                  <BastList.Item>Longolonglong</BastList.Item>
                  <BastList.Item>Longolonglong</BastList.Item>
                  <BastList.Item>LongolonglongLongolonglong</BastList.Item>
                  <BastList.Item>Longolonglong</BastList.Item>
                </BastList>
              }
            >
              <BastButton iconOnly>
                <MoreVerticalIcon />
              </BastButton>
            </BastPopover>
          </div>
        </Container>
      </main>
      <BastFooter>footer</BastFooter>
    </div>
  );
};

export default App;
