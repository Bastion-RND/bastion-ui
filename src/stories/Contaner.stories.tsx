import type { Meta, StoryObj } from '@storybook/react';

import { Container as ContainerComponent } from '../../lib/shared/ui/container';

const meta = {
  title: 'Utility/Container',
  component: ContainerComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs', 'utility'],
  args: {
    fluid: false,
    children: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium adipisci assumenda
        cumque doloremque eligendi ipsa maxime nobis, quibusdam reiciendis reprehenderit velit! At
        cupiditate doloremque eius facere illo labore optio voluptatibus. Aspernatur cumque dolore
        doloremque incidunt maiores, molestiae necessitatibus officiis quo recusandae repudiandae
        rerum sapiente sed sint? Aperiam assumenda atque consectetur doloremque eaque, error fugiat
        fugit, ipsam iusto laborum nulla officiis perspiciatis quis similique sint suscipit unde
        veritatis vero voluptate voluptatem. Eos ipsam minima minus molestiae molestias nesciunt
        quas repudiandae sed veritatis voluptate? Accusantium animi aut consequuntur culpa cum
        deserunt dolor dolores doloribus, dolorum ea enim eos eum eveniet exercitationem fuga fugit
        in iusto laborum, magnam nostrum obcaecati odio odit officia optio perspiciatis possimus
        quam quidem quod repellendus sint sunt ullam, unde voluptatibus. Amet animi aperiam
        architecto consequatur consequuntur deleniti deserunt doloribus ea error esse est eveniet
        hic id in iure laudantium libero modi natus non odit optio perspiciatis quaerat quos
        reprehenderit rerum sapiente similique sint tempora, tempore, veniam. Aut, debitis enim ex
        in iste laboriosam molestiae nemo neque, perferendis, placeat suscipit vel? Dolores error
        expedita ipsam maiores minima non odio officiis quo rem tempora! Accusamus amet animi
        architecto corporis culpa cum debitis dolore eaque eos expedita, harum laboriosam laudantium
        minus modi non nulla optio, possimus qui repellendus rerum totam veniam, voluptate? Ab
        accusamus architecto, aspernatur assumenda beatae blanditiis commodi, debitis dicta
        doloribus ducimus et fuga fugiat id, incidunt inventore ipsa laboriosam magni modi natus
        necessitatibus quibusdam totam veniam voluptates. Aliquid delectus doloribus harum, hic
        maxime minima perspiciatis praesentium recusandae. Accusantium aliquam error ex id nesciunt
        perferendis, quia sed ut! At blanditiis dicta neque optio saepe sapiente vero! At beatae
        consectetur debitis deleniti eaque, eius eligendi enim explicabo facere, facilis iste
        maxime, nam odio quaerat velit vero voluptas? Amet atque dignissimos eos et magni pariatur
        quo quos sed similique unde? Aspernatur cupiditate omnis quaerat quas? Blanditiis
        consequuntur cum ducimus illum, labore natus temporibus? Accusamus adipisci, deleniti nisi
        obcaecati optio perspiciatis porro recusandae rem reprehenderit voluptates. Animi facilis
        illum incidunt iste laborum nemo ratione reprehenderit ullam? Accusamus asperiores
        aspernatur commodi consequuntur corporis delectus, dolores eligendi laboriosam maiores quia
        recusandae reprehenderit sapiente ut? Debitis eius enim eveniet hic incidunt ipsam minus
        molestiae nihil, nobis omnis quas qui temporibus vel. Accusantium animi blanditiis, corporis
        eaque earum eveniet, explicabo iure labore magni quibusdam, repellat tenetur voluptas! A
        assumenda atque, beatae cumque debitis dicta distinctio expedita explicabo facilis iste
        nihil officiis perferendis quidem recusandae repellendus saepe sed sequi sunt, tempora
        totam, ut voluptate voluptatem! Deserunt itaque nesciunt quas sapiente tempore. Accusantium
        aspernatur ex ipsam labore laudantium nam quasi voluptatem. Beatae, cupiditate deleniti
        iusto magni nam nulla praesentium quae tempore ut voluptatem. Cupiditate dolor dolorem
        reprehenderit soluta? Accusantium ad alias aliquam aliquid atque commodi consequatur
        consequuntur, cumque delectus ducimus eaque earum enim eos error et eum eveniet hic ipsam
        laboriosam odit officiis omnis quo sapiente sint suscipit voluptates voluptatibus! Amet
        assumenda atque autem cupiditate earum eius est eveniet facilis illo nostrum omnis provident
        quo quos reiciendis repellendus repudiandae soluta, tempora? Dignissimos dolores facilis
        labore quae quod.
      </div>
    ),
  },
} satisfies Meta<typeof ContainerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Container: Story = {
  args: { fluid: false },
  argTypes: {
    children: {
      control: 'object',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
};
