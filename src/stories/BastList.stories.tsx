import type { Meta, StoryObj } from '@storybook/react';

import { BastList as BastListComponent } from '../../lib/entities/BastList';

const ExampleList = () => (
  <BastListComponent>
    <BastListComponent.Item>Элемент списка 1</BastListComponent.Item>
    <BastListComponent.Item>Элемент списка 2</BastListComponent.Item>
    <BastListComponent.Item>Элемент списка 3</BastListComponent.Item>
  </BastListComponent>
);

const meta = {
  title: 'Example/BastList',
  component: ExampleList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BastListComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BastList: Story = {
  args: {},
};
