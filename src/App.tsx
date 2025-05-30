import '../lib/app/styles/bastion-ui.scss';
import { FC, useState } from 'react';
import { BastIcon } from '../lib/entities/icon';
import { BastButton } from '../lib/entities/button';
import { BastHeader } from '../lib/widgets/header';
import { BastActionSheet } from '../lib/widgets/actionSheet';
import { BastInputGroup } from '../lib/widgets/inputGroup';
import { useTheme } from '../lib/features/toggleTheme';
import { BastCard } from '../lib/entities/card';

const App: FC = () => {
  const [isActionSheetOpen, setActionSheetOpen] = useState(false);
  const { toggleTheme, theme } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        height: '100%',
      }}
    >
      <BastHeader>
        <div className="d-f jc-center ai-center">
          <BastIcon name="Bast" />
          <p className="h3 m-0 ml-1">BastionUI</p>
          <BastButton onClick={toggleTheme} color="white" fill="outlined">
            Theme: {theme}
          </BastButton>
        </div>
      </BastHeader>
      <div>
        <BastButton onClick={() => setActionSheetOpen((state) => !state)} color="brand">
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
        blanditiis <b>numquam</b> porro <i>repudiandae</i> voluptatem <em>voluptatum</em>. Cum earum
        eos expedita facilis fugit hic ipsa odio omnis quos repellat? Amet commodi debitis delectus
        eligendi fugiat incidunt necessitatibus odit sunt! Aliquid delectus magni maiores sit
        tempora voluptate! Aliquid atque consequuntur delectus dicta doloremque ea id officiis
        reprehenderit similique tempora! Fugiat impedit numquam sapiente. Aspernatur facere fugiat
        laborum quisquam, voluptas voluptate! Architecto assumenda aut autem commodi, consequatur
        corporis cupiditate dolor doloremque eos facilis illo incidunt magni modi natus, nesciunt
        nulla officia optio placeat quae qui recusandae rerum similique soluta, tenetur ut vel
        veniam voluptate!
      </p>
      <p>
        Lorem ipsum dolor sit amet, <a href="http://google.com">consectetur</a> adipisicing elit.
        Aliquam blanditiis numquam porro repudiandae voluptatem voluptatum. Cum earum eos expedita
        facilis fugit hic ipsa odio omnis quos repellat? Amet commodi debitis delectus eligendi
        fugiat incidunt necessitatibus odit sunt! Aliquid delectus magni maiores sit tempora
        voluptate! Aliquid atque consequuntur delectus dicta doloremque ea id officiis reprehenderit
        similique tempora! Fugiat impedit numquam sapiente. Aspernatur facere fugiat laborum
        quisquam, voluptas voluptate! Architecto assumenda aut autem commodi, consequatur corporis
        cupiditate dolor doloremque eos facilis illo incidunt magni modi natus, nesciunt nulla
        officia optio placeat quae qui recusandae rerum similique soluta, tenetur ut vel veniam
        voluptate!
      </p>
      <figure>
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
      <div className='m-5'>
        <BastCard>
          <BastCard.Image src="https://images.unsplash.com/photo-1591534180437-507029f6ee60" />
          <BastCard.Title>
            <h3>Монодатчики</h3>
          </BastCard.Title>
          <BastCard.Content>КРАСИВЫЕ</BastCard.Content>
        </BastCard>
      </div>
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
    </div>
  );
};

export default App;
