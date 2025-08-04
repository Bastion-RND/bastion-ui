import type { Meta, StoryObj } from '@storybook/react';

import { BastGrid as BastGridComponent } from '../../lib/entities/grid';

const meta = {
  title: 'Business/BastGrid',
  component: BastGridComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'business'],
} satisfies Meta<typeof BastGridComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastGrid: Story = {
  args: {
    space: 2
  },
  argTypes: {
    space: {
      control: 'select',
      options: [0, 1, 2, 3, 4],
      description: 'Размер отступов'
    },
  },
  render: ({space}) => (
    <BastGridComponent space={space}>
      <BastGridComponent.Column className="bgc-brand p-1 c-white">Колонка 1</BastGridComponent.Column>
      <BastGridComponent.Column size={{ default: 'auto' }} className="bgc-brand p-1 c-white">Колонка 2</BastGridComponent.Column>
      <BastGridComponent.Column size={{ default: 3 }} className="bgc-brand p-1 c-white">Колонка 3</BastGridComponent.Column>
      <BastGridComponent.Column size={{ default: 12 }} className="bgc-brand p-1 c-white">Колонка 4</BastGridComponent.Column>
    </BastGridComponent>
  ),
  parameters: {
    docs: {
      source: {
        code: `<BastGrid>
    <BastGrid.Column>Колонка 1</BastGrid.Column>
    <BastGrid.Column>Колонка 2</BastGrid.Column>
    <BastGrid.Column>Колонка 3</BastGrid.Column>
</BastGrid>`,
      },
    },
  }
};
