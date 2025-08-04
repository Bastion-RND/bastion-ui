import '../lib/app/styles/bastion-ui.scss';
import { FC, useState } from 'react';
import { BastIcon } from '../lib/entities/icon';
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

const App: FC = () => {
  const [isActionSheetOpen, setActionSheetOpen] = useState(false);
  const { toggleTheme, theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        height: '100%',
      }}
    >
      <BastHeader fluid className="p-1">
        <div className="d-f jc-center ai-center">
          <BastIcon name="Bast" />
          <p className="h3 m-0 ml-1">BastionUI</p>
        </div>
        <BastButton onClick={toggleTheme} color="white" fill="outlined">
          {theme}
        </BastButton>
      </BastHeader>
      <Container>
        <div>
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
          corporis cupiditate dolor <BastIcon name="ArrowTop" />
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
            disabled
            value="disabled"
            onClick={(e) => {
              console.log(e);
            }}
            className="mt-2"
          />
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
        <BastButton onClick={() => setIsDialogOpen(true)}>Открыть Dialog</BastButton>
        <BastDialog
          isOpen={isDialogOpen}
          color="gray"
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
          <BastGrid.Column className='bgc-gray'>Колонка 4</BastGrid.Column>
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
