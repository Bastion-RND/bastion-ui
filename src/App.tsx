import '../lib/app/styles/bastion-ui.scss';
import { FC, useState } from 'react';
import { BastButton } from '../lib/entities/button';
import { BastHeader } from '../lib/widgets/header';
import { BastActionSheet } from '../lib/widgets/actionSheet';
import { BastInputGroup } from '../lib/widgets/inputGroup';
import { useTheme } from '../lib/features/toggleTheme';
import { BastCheck } from '../lib/entities/check';
import { BastModal } from '../lib/widgets/modal';
import { BastPopover } from '../lib/widgets/popover';
import { BastList, BastListItem } from '../lib/entities/list';
import { BastTabs } from '../lib/widgets/tabs';
import { BastRadio } from '../lib/entities/radio';
import { BastInput } from '../lib/entities/input';
import { BastDialog } from '../lib/widgets/dialog';
import { BastDropdownOption } from '../lib/widgets/dropdown/ui/BastDropdownOption';
import { BastDropdown } from '../lib/widgets/dropdown';
import { BastCard } from '../lib/entities/card';
import { Container } from '../lib/shared/ui/container';
import { BastGrid } from '../lib/entities/grid';
import { BastSwitch } from '../lib/entities/switch';
import { BastAccordion } from '../lib/entities/accordion';
import { BastSpinner } from '../lib/entities/spinner';

const App: FC = () => {
  const [isActionSheetOpen, setActionSheetOpen] = useState(false);
  const { toggleTheme, theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        height: '100%',
      }}
    >
      <BastHeader logo='skat' fluid className="p-1">
        <div className="d-f jc-center ai-center">
          <p className="h3 m-0 ml-1">BastionUI</p>
        </div>
        <BastButton onClick={toggleTheme} color="white" fill="outlined">
          {theme}
        </BastButton>
      </BastHeader>
      <Container>
        <div>
          <BastGrid space={1} className="mb-1">
            <BastGrid.Column size={{ default: 'auto' }}>Выкл.</BastGrid.Column>
            <BastGrid.Column size={{ default: 'auto' }}>
              <BastSwitch
                checked={switchChecked}
                onChange={({ target: { checked } }) => {setSwitchChecked(checked);}}
              />
            </BastGrid.Column>
            <BastGrid.Column size={{ default: 'auto' }}>Вкл.</BastGrid.Column>
          </BastGrid>
          <BastAccordion
            expanded
            title="Accordion"
          >
            <div>
              Any content
            </div>
          </BastAccordion>
          <BastSpinner />
          <BastButton
            className="mr-1"
            onClick={() => setActionSheetOpen((state) => !state)}
            color="brand"
          >
            filled
          </BastButton>
          <BastButton
            onClick={() => setActionSheetOpen((state) => !state)}
            fill="outlined"
            color="brand"
          >
            outlined
          </BastButton>
          <BastButton
            onClick={() => setActionSheetOpen((state) => !state)}
            fill="cleared"
            color="brand"
          >
            cleared
          </BastButton>
        </div>
        <h1 className="c-warning c-opacity-80">Заголовок 1</h1>
        <h2 className="c-opacity-20">Заголовок 2</h2>
        <h3>Заголовок 3</h3>
        <h4>Заголовок 4</h4>
        <h5>Заголовок 5</h5>
        <h6>Заголовок 6</h6>
        <ul>
          <li>Элемент 1</li>
          <li>Элемент 2</li>
          <li>Элемент 3</li>
        </ul>
        <ol>
          <li>Элемент 1</li>
          <li>Элемент 2</li>
          <li>Элемент 3</li>
        </ol>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <strong>Aliquam</strong>{' '}
          blanditiis <b>numquam</b> porro <i>repudiandae</i> voluptatem <em>voluptatum</em>. Cum
          earum eos expedita facilis fugit hic ipsa odio omnis quos repellat? Amet commodi debitis
          delectus eligendi fugiat incidunt necessitatibus odit sunt! Aliquid delectus magni maiores
          sit tempora voluptate! Aliquid atque consequuntur delectus dicta doloremque ea id officiis
          reprehenderit similique tempora! Fugiat impedit numquam sapiente. Aspernatur facere fugiat
          laborum quisquam, voluptas voluptate! Architecto assumenda aut autem commodi, consequatur
          corporis cupiditate dolor
          doloremque eos facilis illo incidunt magni modi natus, nesciunt nulla officia optio
          placeat quae qui recusandae rerum similique soluta, tenetur ut vel veniam voluptate!
        </p>
        <p>
          Lorem ipsum dolor sit amet, <a href="http://google.com">consectetur</a> adipisicing elit.
          Aliquam blanditiis numquam porro repudiandae voluptatem voluptatum. Cum earum eos expedita
          facilis fugit hic ipsa odio omnis quos repellat? Amet commodi debitis delectus eligendi
          fugiat incidunt necessitatibus odit sunt! Aliquid delectus magni maiores sit tempora
          voluptate! Aliquid atque consequuntur delectus dicta doloremque ea id officiis
          reprehenderit similique tempora! Fugiat impedit numquam sapiente. Aspernatur facere fugiat
          laborum quisquam, voluptas voluptate! Architecto assumenda aut autem commodi, consequatur
          corporis cupiditate dolor doloremque eos facilis illo incidunt magni modi natus, nesciunt
          nulla officia optio placeat quae qui recusandae rerum similique soluta, tenetur ut vel
          veniam voluptate!
        </p>
        <BastPopover
          content={
            <BastList inset className="m-0">
              <BastListItem onClick={() => {}}>test</BastListItem>
              <BastListItem>test</BastListItem>
            </BastList>
          }
          placement="bottom"
          trigger="click"
        >
          <BastButton>trigger</BastButton>
        </BastPopover>
        <div className="p-3">
          <BastList inset>
            <BastListItem onClick={() => {}}>test</BastListItem>
            <BastListItem>test</BastListItem>
            <BastListItem>test</BastListItem>
            <BastListItem>test</BastListItem>
          </BastList>
          <BastCheck checked={false} label="Тест check" readOnly />
          <BastCheck
            checked={checked}
            label="Тест check"
            onChange={({ target: { checked: newChecked } }) => {
              setChecked(newChecked);
            }}
          />
          <BastCheck checked={false} disabled label="Тест check" />
          <BastCheck checked={true} disabled label="Тест check" />
          <BastRadio label="Тест 1" name="test" />
          <BastRadio label="Тест 2" name="test" />
          <BastRadio label="Тест 3" name="test" disabled />
          <BastRadio label="Тест 4" disabled checked />
          <BastInput
            placeholder="input"
            disabled={false}
            value="test"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <BastInput
            isValid
            value="disabled"
            onClick={(e) => {
              console.log(e);
            }}
            className="mt-2 ml-2"
          />
          <BastInputGroup>
            <BastInputGroup.Label htmlFor="2">Label</BastInputGroup.Label>
            <BastInputGroup.Input isValid={true} id="2" placeholder="Злодей" />
          </BastInputGroup>
          <div className="p-5">
            <BastDropdown
              label="Label"
              onChange={(e) => {
                console.log(e);
              }}
              placeholder="Ничего не выбрано"
            >
              <>
                <BastDropdownOption value="0">Значение 1</BastDropdownOption>
                <BastDropdownOption value="1">Значение 2</BastDropdownOption>
                <BastDropdownOption value="2">Значение 3</BastDropdownOption>
                <BastDropdownOption>1</BastDropdownOption>
                <BastDropdownOption>1</BastDropdownOption>
              </>
            </BastDropdown>
          </div>
        </div>
        <figure className="mb-1">
          <blockquote cite="http://google.com">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, amet beatae, deserunt
            ex in ipsum molestiae natus nobis nostrum placeat porro sapiente ut voluptates? Ipsum.
          </blockquote>
          <figcaption>
            <cite>Otello</cite>, by William
          </figcaption>
        </figure>
        <BastActionSheet isOpen={false}>
          <BastButton>Закрыть</BastButton>
        </BastActionSheet>
        <BastButton className="mr-1" onClick={() => setIsModalOpen(true)}>
          Открыть ActionSheet
        </BastButton>
        <BastModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <BastModal.Header>
            <BastModal.Icon color="brand">
              <svg height="1em" width="auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105 105" fill="currentColor">
                <path
                  d="M64.72 24.398c.35 1.222.7 2.575 1.05 3.972 4.33 16.283 11.065 41.645 13.165 49.547.306 1.09-.7 2.095-1.837 1.833-3.106-.742-8.31-2.052-11.022-2.707-2.493-9.298-4.942-18.596-7.435-27.981-6.56 7.159-13.078 14.23-19.595 21.346-3.673-.917-7.347-1.79-11.021-2.706-1.137-.262-1.531-1.66-.744-2.532 12.465-13.62 24.887-27.109 37.44-40.772Zm0-7.64a7.67 7.67 0 0 0-5.642 2.489l-10.76 11.742-28.472 30.907c-1.837 2.008-2.45 4.802-1.706 7.377.787 2.576 2.887 4.584 5.511 5.195l11.547 2.837 1.968.48a8.792 8.792 0 0 0 1.837.219 7.67 7.67 0 0 0 5.642-2.488L54.792 64.47v.131l3.849 14.406a7.572 7.572 0 0 0 5.554 5.456l13.471 3.318c.613.175 1.225.218 1.881.218a7.55 7.55 0 0 0 5.423-2.27c3.106-3.099 2.58-5.15.525-12.746L81.952 59.67l-8.878-33.308-1.05-3.972a7.572 7.572 0 0 0-5.554-5.457 8.792 8.792 0 0 0-1.837-.218l.087.044Z"/>
              </svg>
            </BastModal.Icon>
          </BastModal.Header>
          <BastModal.Content>
            <BastModal.Title>Какой-то важный текст</BastModal.Title>
            <div>Мы что-то важное хотим вам сказать</div>
          </BastModal.Content>
          <BastModal.Footer style={{ display: 'flex', gap: '.5em' }}>
            <BastButton expand fill="outlined" color="gray">
              Не согласен
            </BastButton>
            <BastButton expand>Согласен</BastButton>
          </BastModal.Footer>
        </BastModal>
        <BastButton onClick={() => setIsDialogOpen(true)}>Открыть Dialog</BastButton>
        <BastDialog
          isOpen={isDialogOpen}
          color="danger"
          title="Диалог обычный"
          content="Важное сообщение и длинное сообщение..."
          onClose={() => setIsDialogOpen(false)}
        />
        <BastActionSheet isOpen={isActionSheetOpen} onClose={() => setActionSheetOpen(false)}>
          <BastInputGroup>
            <BastInputGroup.Label className="m-0" htmlFor="1">
              Мобильный номер устройства
            </BastInputGroup.Label>
            <BastInputGroup.Input
              id="1"
              inputMode="numeric"
              maxLength={12}
              placeholder="Номер телефона"
              value="89885861192"
            />
            <BastInputGroup.Label className="m-0" htmlFor="2">
              Имя устройства
            </BastInputGroup.Label>
            <BastInputGroup.Input maxLength={15} id="2" placeholder="Имя устройства" value="Ilia" />
          </BastInputGroup>
        </BastActionSheet>
        <BastCard noShadow radiusType="small" gapType="small" className="mb-1 mt-1">
          <BastCard.Title>
            <h4 className="support-list__title m-0">Техническая поддержка</h4>
          </BastCard.Title>
          <BastCard.Content>
            <p className="m-0">lol</p>
          </BastCard.Content>
        </BastCard>
        <BastGrid className="jc-between">
          <BastGrid.Column
            size={{ default: 12, sm: 6, lg: 'auto', xxl: 'grow' }}
            className="bgc-warning"
          >
            Колонка 1
          </BastGrid.Column>
          <BastGrid.Column
            size={{ default: 12, sm: 6, lg: 'auto', xxl: 'grow' }}
            className="bgc-brand"
          >
            Колонка 2
          </BastGrid.Column>
          <BastGrid.Column size={{ default: 'auto' }} className="bgc-danger">
            Колонка 3
          </BastGrid.Column>
          <BastGrid.Column className="bgc-gray">Колонка 4</BastGrid.Column>
          <BastGrid.Column size={{ default: 'auto' }} className="bgc-success">
            Колонка 5
          </BastGrid.Column>
          <BastGrid.Column className="bgc-white c-black">Колонка 6</BastGrid.Column>
        </BastGrid>
      </Container>
      <BastTabs className="m-0" borders="round-top" style={{ width: '100%' }}>
        <BastTabs.Item disabled> Default </BastTabs.Item>
        <BastTabs.Item> Default </BastTabs.Item>
        <BastTabs.Item> Default </BastTabs.Item>
        <BastTabs.Item> Default </BastTabs.Item>
      </BastTabs>
    </div>
  );
};

export default App;
