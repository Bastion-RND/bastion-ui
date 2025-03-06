import type { Meta, StoryObj } from '@storybook/react';

import { BastList as BastListComponent } from '../../lib/entities/list';

const meta = {
  title: 'Business/BastList',
  component: BastListComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'business'],
  args: {
    children: (
      <>
        <BastListComponent.Item>Элемент списка 1</BastListComponent.Item>
        <BastListComponent.Item>Элемент списка 2</BastListComponent.Item>
        <BastListComponent.Item>Элемент списка 3</BastListComponent.Item>
      </>
    ),
    inset: false,
  },
} satisfies Meta<typeof BastListComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastList: Story = {
  args: {},
  argTypes: {

  }
};
BastList.parameters = {
  docs: {
    source: {
      code: `<BastList>
  <BastList.Item>Элемент списка 1</BastList.Item>
  <BastList.Item>Элемент списка 2</BastList.Item>
  <BastList.Item>Элемент списка 3</BastList.Item>
</BastList>`,
    },
  },
};